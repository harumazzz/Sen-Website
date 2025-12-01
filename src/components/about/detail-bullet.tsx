"use client";

import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

interface DetailBulletProps {
  text: string;
  icon?: React.ComponentType<{ className?: string }>;
  className?: string;
}

export function DetailBullet({ text, icon: Icon, className }: DetailBulletProps) {
  const BulletIcon = Icon || Check;

  return (
    <li className={cn("flex items-start gap-3 group", className)}>
      <div className="flex items-center justify-center rounded-lg p-2 bg-gradient-to-br from-primary/20 to-primary/10 mt-0.5 shrink-0 group-hover:from-primary/30 group-hover:to-primary/15 transition-colors">
        <BulletIcon className="h-4 w-4 text-primary" />
      </div>
      <span className="text-sm text-foreground/90 leading-relaxed flex-1 pt-0.5">{text}</span>
    </li>
  );
}
