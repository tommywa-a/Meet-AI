"use client";

import { Suspense, useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

function ProgressBarContent() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Only run in browser environment
    if (typeof window === 'undefined') return;

    // Store original methods
    const originalPush = window.history.pushState;
    const originalReplace = window.history.replaceState;

    NProgress.configure({
      showSpinner: false,
      template: `
        <div class="bar" role="bar" style="height: 4px; background: #10b981;">
          <div class="peg" style="box-shadow: 0 0 10px #10b981, 0 0 5px #10b981; height: 8px;"></div>
        </div>
      `,
    });

    // Handle programmatic navigation
    const handlePushState = () => NProgress.start();

    // Override history methods with proper types
    const handlePush = function(this: History, data: unknown, unused: string, url?: string | URL | null) {
      handlePushState();
      return originalPush.call(this, data, unused, url);
    };

    const handleReplace = function(this: History, data: unknown, unused: string, url?: string | URL | null) {
      handlePushState();
      return originalReplace.call(this, data, unused, url);
    };

    window.history.pushState = handlePush;
    window.history.replaceState = handleReplace;

    // Handle link clicks
    const handleAnchorClick = (event: Event) => {
      const target = event.currentTarget as HTMLAnchorElement;
      if (target.href.startsWith(window.location.origin)) {
        NProgress.start();
      }
    };

    // Add click listeners to all links
    const addLinkListeners = () => {
      const anchors = document.querySelectorAll<HTMLAnchorElement>(
        'a[href^="/"], a[href^="http"]'
      );
      anchors.forEach((anchor) => {
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

    // Complete progress bar when route changes
    NProgress.done();

    // Cleanup
    return () => {
      if (typeof window !== 'undefined') {
        window.history.pushState = originalPush;
        window.history.replaceState = originalReplace;
      }
      observer.disconnect();

      const anchors = document.querySelectorAll<HTMLAnchorElement>(
        'a[href^="/"], a[href^="http"]'
      );
      anchors.forEach((anchor) => {
        anchor.removeEventListener("click", handleAnchorClick as EventListener);
      });
    };
  }, [pathname, searchParams]);

  return null;
}

export default function ProgressBar() {
  return (
    <Suspense fallback={null}>
      <ProgressBarContent />
    </Suspense>
  );
}
