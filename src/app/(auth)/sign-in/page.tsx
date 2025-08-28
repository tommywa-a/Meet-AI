import { headers } from 'next/headers'
import { redirect } from 'next/navigation'
import { Suspense } from 'react'

import { auth } from '@/lib/auth'
import { SignInViewWrapper } from '@/modules/auth/ui/views/sign-in-view-wrapper'

const Page = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  })

  if (session) {
    redirect('/')
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SignInViewWrapper />
    </Suspense>
  )
}

export default Page
