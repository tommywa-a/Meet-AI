"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useMutation, useQueryClient, useSuspenseQuery } from "@tanstack/react-query"
import { toast } from "sonner"

import { useTRPC } from "@/trpc/client"
import { useConfirm } from "@/hooks/use-confirm"
import { ErrorState } from "@/components/error-state"
import { LoadingState } from "@/components/loading-state"

import { ActiveState } from "../components/active-state"
import { UpcomingState } from "../components/upcoming-state"
import { CancelledState } from "../components/cencelled-state"
import { ProcessingState } from "../components/processing-state"
import { UpdateMeetingDialog } from "../components/update-meeting-dialog"
import { MeetingIdViewHeader } from "../components/meeting-id-view-header"
import { CompletedState } from "../components/completed-state"

interface Props {
  meetingId: string
}

export const MeetingIdView = ({ meetingId }: Props) => {
  const trpc = useTRPC()
  const router = useRouter()
  const queryClient = useQueryClient()

  const [updateMeetingDialogOpen, setUpdateMeetingDialogOpen] = useState(false)

  const [RemoveConfirmation, confirmRemove] = useConfirm(
      "Are you sure?",
      "The following action will remove this meeting",
    )
  
  const { data } = useSuspenseQuery(
    trpc.meetings.getOne.queryOptions({id: meetingId})
  )

  const removeMeeting = useMutation(
    trpc.meetings.remove.mutationOptions({
      onSuccess: () => {
        queryClient.invalidateQueries(trpc.meetings.getMany.queryOptions({}))
        // TODO: Invalidate free tier usage
        router.push("/meetings")
      },
      onError: (error) => {
        toast.error(error.message)
      },
    })
  )
  
  const handleRemoveMeeting = async () => {
    const ok = await confirmRemove()

    if (!ok) return

    await removeMeeting.mutateAsync({ id: meetingId })
  }

  const isActive = data.status === "active"
  const isUpcoming = data.status === "upcoming"
  const isCancelled = data.status === "cancelled"
  const isCompleted = data.status === "completed"
  const isProcessing = data.status === "processing"

  return (
    <>
    <RemoveConfirmation />
    <UpdateMeetingDialog
      open={updateMeetingDialogOpen}
      onOpenChange={setUpdateMeetingDialogOpen}
      initialValues={data}
    />
     <div className="flex-1 py-4 px-4 md:px-8 flex flex-col gap-y-4">
      <MeetingIdViewHeader
        meetingId={meetingId}
        meetingName={data.name}
        onEdit={() => setUpdateMeetingDialogOpen(true)}
        onRemove={handleRemoveMeeting}
      />
      {isCancelled && <CancelledState />}
      {isProcessing && <ProcessingState />}
      {isCompleted && <CompletedState data={data} />}
      {isActive && <ActiveState meetingId={meetingId} />}
      {isUpcoming && (
        <UpcomingState
          meetingId={meetingId}
          onCancelMeeting={() => {}}
          isCancelling={false}
        />)}
     </div>
    </>
  )
}

export const MeetingIdViewLoading = () => {
  return (
    <LoadingState
      title='Loading Meeting'
      description='This may take a few seconds'
    />
  )
}

export const MeetingIdViewError = () => {
  return (
    <ErrorState
      title='Error Loading Meeting'
      description='Something went wrong'
    />
  )
}
