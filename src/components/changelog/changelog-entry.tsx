"use client";

import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Changelog } from "@/types/changelog";
import { PlayIcon } from "lucide-react";
import Image from "next/image";

interface ChangelogEntryProps {
  changelog: Changelog;
  className?: string;
}

export function ChangelogEntry({ changelog, className }: ChangelogEntryProps) {
  const formattedDate = changelog.date
    ? new Date(changelog.date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "Unreleased";

  return (
    <Card
      className={cn(
        "mb-6 transition-all duration-300 hover:shadow-lg hover:border-primary/30",
        "border border-border/50",
        className
      )}
    >
      <div className="p-6 sm:p-8">
        {/* Header with logo and badges */}
        <div className="flex items-start justify-between gap-4 mb-6">
          <Image
            src={`/assets/logo.webp`}
            alt="Sen Logo"
            width={80}
            height={80}
            className="object-cover rounded-lg"
          />
          <div className="flex items-center gap-3">
            <Badge className="bg-green-600/20 text-green-700 dark:text-green-400 border border-green-500/20 font-semibold px-3 py-1.5">
              Stable
            </Badge>
            <Badge className="bg-primary/15 text-primary border border-primary/30 font-semibold px-3 py-1.5 font-mono">
              {changelog.version || "N/A"}
            </Badge>
          </div>
        </div>

        {/* Release date */}
        <p className="text-muted-foreground text-sm mb-6 font-medium">
          Released on {formattedDate}
        </p>

        {/* Changes list */}
        {changelog.update_changes && changelog.update_changes.length > 0 && (
          <div className="space-y-3 mb-8 pb-8 border-b border-border/50">
            {changelog.update_changes.map((change, index) => (
              <div key={index} className="flex items-start gap-3">
                <PlayIcon className="w-3.5 h-3.5 text-primary/70 mt-1 flex-shrink-0" />
                <p className="text-foreground/90 text-sm leading-relaxed">{change}</p>
              </div>
            ))}
          </div>
        )}

        {/* Special Thanks section */}
        {changelog.special_thanks && changelog.special_thanks.length > 0 && (
          <div>
            <h3 className="text-foreground text-sm font-semibold mb-4">Special Thanks</h3>
            <div className="flex flex-wrap gap-2">
              {changelog.special_thanks.map((person, index) => (
                <div
                  key={index}
                  className="bg-primary/10 text-foreground/80 text-sm px-3 py-2 rounded-lg border border-primary/20 hover:bg-primary/15 transition-colors"
                >
                  {person}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </Card>
  );
}
