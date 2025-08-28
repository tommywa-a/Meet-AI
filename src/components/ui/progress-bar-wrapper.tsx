'use client';

import { Suspense } from 'react';
import ProgressBar from './progress-bar';

export default function ProgressBarWrapper() {
  return (
    <Suspense fallback={null}>
      <ProgressBar />
    </Suspense>
  );
}
