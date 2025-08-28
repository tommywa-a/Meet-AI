import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NuqsAdapter } from "nuqs/adapters/next"

import { TRPCReactProvider } from "@/trpc/client";
import { Toaster } from "@/components/ui/sonner";
import ProgressBarWrapper from "@/components/ui/progress-bar-wrapper";

import "./globals.css";
import "nprogress/nprogress.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Meet AI",
  description: "AI Chat agent for meetings",
  icons: {
    icon: "/logo.svg", // Path to favicon in /public
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <NuqsAdapter>
      <TRPCReactProvider>
        <ProgressBarWrapper />
        <html lang="en" suppressHydrationWarning>
          <body
            suppressHydrationWarning
            className={`${inter.className}  antialiased`}
          >
            <Toaster />
            {children}
          </body>
        </html>
      </TRPCReactProvider>
    </NuqsAdapter>
  );
}
