'use client';

import { Suspense } from 'react';
import { SignInView } from './sign-in-view';

export function SignInViewWrapper() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SignInView />
    </Suspense>
  );
}
