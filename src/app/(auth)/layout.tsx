import ProgressBar from "@/components/ui/progress-bar";

interface Props {
	children: React.ReactNode
}

const Layout = ({ children }: Props) => {
	return (
		<>
			<ProgressBar />
		<div className='bg-muted flex min-h-svh flex-col items-center justify-center p-6 md:p-10'>
			<div className='w-full max-w-sm md:max-w-3xl'>{children}</div>
		</div>
		</>
	)
}
export default Layout
