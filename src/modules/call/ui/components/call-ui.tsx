import { useState } from "react"
import { StreamTheme, useCall } from "@stream-io/video-react-sdk"
import { CallLobby } from "./call-lobby"
import { CallActive } from "./call-active"
import { CallEnded } from "./call-ended"
import nProgress from "nprogress"

interface Props {
  meetingName: string
}

export const CallUI = ({ meetingName }: Props) => {
  const call = useCall()
  const [show, setShow] = useState<"lobby" | "call" | "ended">("lobby")

  const handleJoin = async () => {
    nProgress.start()
    try {
      if (!call) return

      await call.join()

      setShow("call")
    } finally {
      nProgress.done()
    }
  }

  const handleLeave = () => {
    nProgress.start()
    try {
      if (!call) return

      call.endCall()
      setShow("ended")
    } finally {
      nProgress.done()
    }
  }

  return (
    <StreamTheme className="h-full">
      {show === "lobby" && <CallLobby onJoin={handleJoin}/>}
      {show === "call" && <CallActive onLeave={handleLeave} meetingName={meetingName} />}
      {show === "ended" && <CallEnded />}
    </StreamTheme>
  )
}