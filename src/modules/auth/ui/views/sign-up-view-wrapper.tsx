'use client';

import { Suspense } from 'react';
import { SignUpView } from './sign-up-view';

export function SignUpViewWrapper() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SignUpView />
    </Suspense>
  );
}
