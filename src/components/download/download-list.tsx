"use client";

import { DownloadCard } from "./download-card";
import { Skeleton } from "@/components/ui/skeleton";
import { Card } from "@/components/ui/card";

interface Asset {
  name: string;
  browserDownloadUrl: string;
  size: number;
  downloadCount: number;
  createdAt: string;
  updatedAt: string;
}

interface DownloadListProps {
  assets?: Asset[];
  version?: string;
  isLoading?: boolean;
  error?: string;
}

export function DownloadList({ assets, version = "LTS", isLoading, error }: DownloadListProps) {
  if (error) {
    return (
      <div className="text-center py-8">
        <p className="text-destructive">Error: {error}</p>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="space-y-4">
        {[...Array(3)].map((_, i) => (
          <Card key={i} className="p-6">
            <div className="flex items-start gap-4">
              <Skeleton className="h-10 w-10 rounded-lg" />
              <div className="flex-1 space-y-2">
                <Skeleton className="h-6 w-32" />
                <Skeleton className="h-4 w-48" />
                <Skeleton className="h-4 w-24" />
              </div>
              <Skeleton className="h-10 w-28" />
            </div>
          </Card>
        ))}
      </div>
    );
  }

  if (!assets || assets.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-muted-foreground">No downloads available at the moment.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4">
      {assets.map((asset) => {
        const platform = asset.name.toLowerCase().includes("android") ? "android" : "windows";

        return (
          <div
            key={asset.name}
            className="w-full sm:w-auto sm:flex-1 sm:min-w-[300px] sm:max-w-[400px]"
          >
            <DownloadCard
              platform={platform}
              version={version}
              fileName={asset.name}
              fileSize={asset.size}
              downloadUrl={asset.browserDownloadUrl}
              downloadCount={asset.downloadCount}
              releaseDate={asset.createdAt}
              description="Recommended for most users, includes all features and optimizations"
            />
          </div>
        );
      })}
    </div>
  );
}
