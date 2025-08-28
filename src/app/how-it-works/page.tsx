import { Suspense } from 'react';
import { HeroHeader } from "@/modules/home/ui/components/header";
import { HowItWorksView } from "@/modules/how-it-works/ui/views/how-it-works-view";
import { Skeleton } from '@/components/ui/skeleton';

function LoadingSkeleton() {
  return (
    <div className="min-h-screen bg-background">
      <div className="h-24 bg-muted" />
      <div className="container mx-auto p-4">
        <Skeleton className="h-96 w-full" />
      </div>
    </div>
  );
}

export default function HowItWorks() {
  return (
    <Suspense fallback={<LoadingSkeleton />}>
      <HeroHeader />
      <HowItWorksView />
    </Suspense>
  );
}
