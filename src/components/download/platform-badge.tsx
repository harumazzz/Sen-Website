"use client";

import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

interface PlatformBadgeProps {
  platform: string;
  className?: string;
}

const PLATFORM_COLORS = {
  windows: "bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/20",
  android: "bg-green-500/10 text-green-700 dark:text-green-400 border-green-500/20",
  linux: "bg-orange-500/10 text-orange-700 dark:text-orange-400 border-orange-500/20",
  macos: "bg-gray-500/10 text-gray-700 dark:text-gray-400 border-gray-500/20",
} as const;

export function PlatformBadge({ platform, className }: PlatformBadgeProps) {
  const normalizedPlatform = platform.toLowerCase();
  const colorClass =
    PLATFORM_COLORS[normalizedPlatform as keyof typeof PLATFORM_COLORS] ||
    "bg-muted text-muted-foreground";

  return (
    <Badge variant="outline" className={cn(colorClass, "capitalize font-medium", className)}>
      {platform}
    </Badge>
  );
}
