import { useRouter } from "next/navigation"
import { useQuery } from "@tanstack/react-query"
import { Dispatch, SetStateAction, useState } from "react"

import {
  CommandResponsiveDialog,
  CommandInput,
  CommandItem,
  CommandList,
  CommandGroup,
  CommandEmpty,
} from "@/components/ui/command"
import { useTRPC } from "@/trpc/client"
import { GeneratedAvatar } from "@/components/generated-avatar"
import nProgress from "nprogress"
import { Loader2 } from "lucide-react"

interface Props {
  open: boolean,
  setOpen: Dispatch<SetStateAction<boolean>>
}

export const DashboardCommand = ({open, setOpen}: Props) => {
  const router = useRouter()
  const [search, setSearch] = useState("")

  const trpc = useTRPC()
  const { data: meetings, isPending: meetingsPending } = useQuery(
    trpc.meetings.getMany.queryOptions({
      search,
      pageSize: 100,
    })
  )
  const { data: agents, isPending: agentsPending } = useQuery(
    trpc.agents.getMany.queryOptions({
      search,
      pageSize: 100,
    })
  )

  const handleMeetingSelect = (meetingId: string) => {
    nProgress.start()
    router.push(`/meetings/${meetingId}`)
    setOpen(false)
  }

  const handleAgentSelect = (agentId: string) => {
    nProgress.start()
    router.push(`/agents/${agentId}`)
    setOpen(false)
  }

  return (
    <CommandResponsiveDialog shouldFilter={false} open={open} onOpenChange={setOpen}>
      <CommandInput
        placeholder="Find a meeting or agent..."
        value={search}
        onValueChange={(value) => setSearch(value)}
      />
      <CommandList>
        <CommandGroup heading="Meetings">
          <CommandEmpty>
            <span className="text-muted-foreground text-sm flex items-center justify-center">
              {meetingsPending ? <Loader2 className="size-4 animate-spin" /> : "No meetings found"}
            </span>
          </CommandEmpty>
          {meetings?.items.map((meeting) => (
            <CommandItem
              onSelect={() => handleMeetingSelect(meeting.id)}
              key={meeting.id}
            >
              {meeting.name}
            </CommandItem>
          ))}
        </CommandGroup>
        <CommandGroup heading="Agents">
          <CommandEmpty>
            <span className="text-muted-foreground text-sm flex items-center justify-center">
              {agentsPending ? <Loader2 className="size-4 animate-spin" /> : "No agents found"}
            </span>
          </CommandEmpty>
          {agents?.items.map((agent) => (
            <CommandItem
              onSelect={() => handleAgentSelect(agent.id)}
              key={agent.id}
            >
              <GeneratedAvatar
                seed={agent.name}
                variant="botttsNeutral"
                className="size-5"
              />
              {agent.name}
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </CommandResponsiveDialog>
  )
}