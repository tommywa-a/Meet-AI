import ProgressBar from "@/components/ui/progress-bar";

interface Props {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <ProgressBar />
      <div className="h-screen bg-black">
        {children}
      </div>
    </>
  )
}
export default Layout