import Link from "next/link";
import Image from "next/image";
import { 
  CallControls,
  SpeakerLayout,
  CallSessionParticipantLeftEvent,
  useCall
 } from "@stream-io/video-react-sdk";
import { toast } from "sonner";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

 interface Props {
  onLeave: () => void
  meetingName: string
 }

 export const CallActive = ({ onLeave, meetingName }: Props) => {
  const call = useCall();
  const router = useRouter();

  useEffect(() => {
    const handleParticipantLeft = (event: CallSessionParticipantLeftEvent) => {
      if (event.participant.role === "user") {
        toast.error("Error: Agent left unexpectedly", {
          duration: 600000,
          style: {
            backgroundColor: "#fb2c36",
            color: "white",
          },
          description: "Please end the call.",
          action: {
            label: "End call",
            onClick: () => {
              call?.endCall();
              router.push("/meetings")
            }
          },
        });
      }
    };

    call?.on("call.session_participant_left", handleParticipantLeft);

    return () => {
      call?.off("call.session_participant_left", handleParticipantLeft);
    };
  }, [call, router]);
  
  return (
    <div className="flex flex-col justify-between p-4 h-full text-white">
      <div className="bg-[#101213] rounded-full p-4 flex items-center gap-4">
        <Link href="/" className="flex items-center justify-center p-1 bg-white rounded-full w-fit">
          <Image src="/logo.svg" width={22} height={22} alt="Logo" />
        </Link>
        <h4 className="text-base">
          {meetingName}
        </h4>
      </div>
      <SpeakerLayout />
      <div className="bg-[#101213] rounded-full px-4">
        <CallControls onLeave={onLeave} />
      </div>
    </div>
  )
 }