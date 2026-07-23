"use client";

import { AppBar } from "@/components/navigation/app-bar";
import { BottomNav } from "@/components/navigation/bottom-nav";
import { PageTransition } from "@/components/animations/page-transition";
import { AIChatButton } from "@/components/ai-chat";

interface AppShellProps {
  children: React.ReactNode;
}

export function AppShell({ children }: AppShellProps) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Desktop: sticky top AppBar */}
      <AppBar />

      {/* Page content
          lg:pt-20     → clears the floating AppBar (h-14 + pt-3 gap) on desktop
          pb-24 lg:pb-0 → clears the floating BottomNav (h-16 + pb-3 gap) on mobile */}
      <main className="flex-1 lg:pt-20 pb-24 lg:pb-0">
        <PageTransition>
          <div className="w-full">{children}</div>
        </PageTransition>
      </main>

      {/* Mobile: fixed bottom BottomNav */}
      <BottomNav />

      {/* AI Chat Float Button & Widget */}
      <AIChatButton />
    </div>
  );
}
