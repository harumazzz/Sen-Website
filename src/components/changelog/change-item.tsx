"use client";

import { cn } from "@/lib/utils";
import { Plus, Bug, Wrench, AlertTriangle, Ban, Sparkles } from "lucide-react";
import type { ChangeType } from "@/lib/types";

interface ChangeItemProps {
  type: ChangeType;
  description: string;
  className?: string;
}

const CHANGE_TYPES = {
  feature: {
    icon: Plus,
    label: "Feature",
    color: "text-green-600 dark:text-green-400",
    bgColor: "bg-green-500/10",
  },
  fix: {
    icon: Bug,
    label: "Fix",
    color: "text-red-600 dark:text-red-400",
    bgColor: "bg-red-500/10",
  },
  improvement: {
    icon: Sparkles,
    label: "Improvement",
    color: "text-blue-600 dark:text-blue-400",
    bgColor: "bg-blue-500/10",
  },
  breaking: {
    icon: AlertTriangle,
    label: "Breaking",
    color: "text-orange-600 dark:text-orange-400",
    bgColor: "bg-orange-500/10",
  },
  deprecated: {
    icon: Ban,
    label: "Deprecated",
    color: "text-gray-600 dark:text-gray-400",
    bgColor: "bg-gray-500/10",
  },
} as const;

export function ChangeItem({ type, description, className }: ChangeItemProps) {
  const changeType = CHANGE_TYPES[type];
  const Icon = changeType.icon;

  return (
    <li className={cn("flex items-start gap-3 group", className)}>
      <div
        className={cn(
          "flex items-center justify-center rounded-lg p-2 mt-0.5 shrink-0",
          "group-hover:shadow-md transition-all duration-200",
          changeType.bgColor
        )}
      >
        <Icon className={cn("h-4 w-4", changeType.color)} />
      </div>

      <div className="flex-1 min-w-0">
        <span className={cn("text-xs font-semibold uppercase tracking-wide", changeType.color)}>
          {changeType.label}
        </span>
        <p className="text-sm text-foreground/90 mt-1.5 leading-relaxed">{description}</p>
      </div>
    </li>
  );
}
