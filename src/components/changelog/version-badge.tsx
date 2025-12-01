"use client";

import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

interface VersionBadgeProps {
  version: string;
  prerelease?: boolean;
  className?: string;
}

export function VersionBadge({ version, prerelease = false, className }: VersionBadgeProps) {
  return (
    <Badge
      variant={prerelease ? "secondary" : "default"}
      className={cn(
        "font-mono text-sm px-3 py-1",
        prerelease && "bg-orange-500/10 text-orange-700 dark:text-orange-400 border-orange-500/20",
        className
      )}
    >
      {version}
      {prerelease && <span className="ml-1.5 text-xs">Pre-release</span>}
    </Badge>
  );
}
