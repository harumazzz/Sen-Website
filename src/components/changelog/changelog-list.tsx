"use client";

import { ChangelogEntry } from "./changelog-entry";
import { Skeleton } from "@/components/ui/skeleton";
import { Card } from "@/components/ui/card";
import { AlertCircle, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Changelog } from "@/types/changelog";

interface ChangelogListProps {
  entries?: Changelog[];
  isLoading?: boolean;
  error?: string;
  onRetry?: () => void;
}

export function ChangelogList({ entries, isLoading, error, onRetry }: ChangelogListProps) {
  // Error State - matches Flutter _ErrorView
  if (error) {
    return (
      <div className="flex flex-col items-center justify-center py-16 space-y-4">
        <AlertCircle className="h-12 w-12 text-red-500" />
        <p className="text-center">Error: {error}</p>
        {onRetry && (
          <Button onClick={onRetry} variant="outline" className="mt-6">
            <RefreshCw className="h-4 w-4 mr-2" />
            Try Again
          </Button>
        )}
      </div>
    );
  }

  // Loading State
  if (isLoading) {
    return (
      <div className="space-y-6">
        {[...Array(5)].map((_, i) => (
          <Card key={i} className="border border-border/50 p-6 sm:p-8">
            <div className="space-y-4">
              <div className="flex items-start justify-between gap-4">
                <Skeleton className="h-20 w-20 rounded-lg" />
                <div className="flex gap-2">
                  <Skeleton className="h-8 w-20 rounded-lg" />
                  <Skeleton className="h-8 w-24 rounded-lg" />
                </div>
              </div>
              <Skeleton className="h-4 w-40" />
              <div className="space-y-3 pt-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-5/6" />
                <Skeleton className="h-4 w-3/4" />
              </div>
            </div>
          </Card>
        ))}
      </div>
    );
  }

  // Empty State
  if (!entries || entries.length === 0) {
    return (
      <div className="text-center py-16">
        <p className="text-muted-foreground">No changelog entries available.</p>
      </div>
    );
  }

  // Data State - matches Flutter ChangelogStateLoaded
  return (
    <div>
      {entries.map((entry, index) => (
        <ChangelogEntry key={entry.version || index} changelog={entry} />
      ))}
    </div>
  );
}
