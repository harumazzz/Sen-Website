"use client";

import { NavDrawer } from "@/components/navigation/nav-drawer";
import { MobileMenu } from "@/components/navigation/mobile-menu";
import { PageTransition } from "@/components/animations/page-transition";

interface AppShellProps {
  children: React.ReactNode;
}

export function AppShell({ children }: AppShellProps) {
  return (
    <div className="flex min-h-screen">
      {/* Desktop Navigation Drawer */}
      <NavDrawer />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col lg:ml-64">
        {/* Mobile App Bar */}
        <header className="lg:hidden sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="flex h-14 items-center px-4">
            <MobileMenu />
            <h1 className="text-lg font-semibold">Website</h1>
          </div>
        </header>

        {/* Page Content with Transitions */}
        <main className="flex-1">
          <PageTransition>
            <div className="w-full">{children}</div>
          </PageTransition>
        </main>
      </div>
    </div>
  );
}
