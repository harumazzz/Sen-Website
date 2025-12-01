"use client";

import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface FooterSectionProps {
  title: string;
  children: ReactNode;
  className?: string;
}

export function FooterSection({ title, children, className }: FooterSectionProps) {
  return (
    <div className={cn("flex flex-col gap-3", className)}>
      <h3 className="font-semibold text-base text-foreground">{title}</h3>
      <div className="flex flex-col gap-2">{children}</div>
    </div>
  );
}
