"use client";

import { Suspense, useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

// Configure NProgress
NProgress.configure({
  showSpinner: false,
  template: `
    <div class="bar" role="bar" style="height: 4px; background: #10b981;">
      <div class="peg" style="box-shadow: 0 0 10px #10b981, 0 0 5px #10b981; height: 8px;"></div>
    </div>
  `,
});

function ProgressBarContent() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Complete progress when route changes
    NProgress.done();

    // Cleanup
    return () => {
      NProgress.done();
    };
  }, [pathname, searchParams]);

  // Handle route changes via Next.js router
  useEffect(() => {
    // Listen to route changes
    const handleAnchorClick = (event: MouseEvent) => {
      const target = event.currentTarget as HTMLAnchorElement;

      // Only handle same-origin links
      if (!target.href.startsWith(window.location.origin)) return;

      NProgress.start();
      window.location.href = target.href;
    };

    // Add click listeners to all links
    const addLinkListeners = () => {
      const anchors = document.querySelectorAll<HTMLAnchorElement>(
        'a[href^="/"], a[href^="http"]'
      );
      anchors.forEach((anchor) => {
        anchor.removeEventListener("click", handleAnchorClick as EventListener);
        anchor.addEventListener("click", handleAnchorClick as EventListener);
      });
    };

    // Initial setup
    addLinkListeners();

    // Handle dynamic content
    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (mutation.addedNodes.length) {
          addLinkListeners();
        }
      }
    });

    observer.observe(document.body, { childList: true, subtree: true });

    // Cleanup
    return () => {
      observer.disconnect();
      const anchors = document.querySelectorAll<HTMLAnchorElement>(
        'a[href^="/"], a[href^="http"]'
      );
      anchors.forEach((anchor) => {
        anchor.removeEventListener("click", handleAnchorClick as EventListener);
      });
    };
  }, []);

  return null;
}

export default function ProgressBar() {
  return (
    <Suspense fallback={null}>
      <ProgressBarContent />
    </Suspense>
  );
}
