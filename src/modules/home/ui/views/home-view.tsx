'use client'

import { authClient } from '@/lib/auth-client'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'

export const HomeView = () => {
	const router = useRouter()

	const { data: session } = authClient.useSession()

	const toCamelCase = (str: string | undefined) => {
		if (!str) return ''
		return str
			.split(/\s+/)
			.map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
			.join(' ')
	}

	const userName = toCamelCase(session?.user?.name)

	if (!session) {
		return <p>Loading...</p>
	}

	return (
		<div className='flex flex-col p-4 gap-y-4'>
			<p>Logged in as {userName}.</p>
			<Button
				onClick={() =>
					authClient.signOut({
						fetchOptions: { onSuccess: () => router.push('/sign-in') },
					})
				}
			>
				Sign Out
			</Button>
		</div>
	)
}
