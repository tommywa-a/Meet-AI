import { headers } from 'next/headers'
import { redirect } from 'next/navigation'
import { Suspense } from 'react'

import { auth } from '@/lib/auth'
import { SignUpViewWrapper } from '@/modules/auth/ui/views/sign-up-view-wrapper'

const Page = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  })

  if (session) {
    redirect('/')
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SignUpViewWrapper />
    </Suspense>
  )
}

export default Page
