"use client";

import { AppShell } from "./app-shell";

interface RootLayoutProps {
  children: React.ReactNode;
}

export function RootLayout({ children }: RootLayoutProps) {
  return <AppShell>{children}</AppShell>;
}
