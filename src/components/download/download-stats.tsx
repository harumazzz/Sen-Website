"use client";

import { cn } from "@/lib/utils";
import { Calendar, Download as DownloadIcon, HardDrive } from "lucide-react";
import { formatFileSize } from "@/lib/formatters";
import { useTranslation } from "@/hooks/use-translation";

interface DownloadStatsProps {
  fileSize: number;
  downloadCount: number;
  releaseDate: string;
  className?: string;
}

export function DownloadStats({
  fileSize,
  downloadCount,
  releaseDate,
  className,
}: DownloadStatsProps) {
  const t = useTranslation();
  const formattedDate = new Date(releaseDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <div className={cn("flex flex-wrap gap-4 text-sm text-muted-foreground", className)}>
      <div className="flex items-center gap-1.5">
        <HardDrive className="h-4 w-4" />
        <span>{formatFileSize(fileSize)}</span>
      </div>

      <div className="flex items-center gap-1.5">
        <DownloadIcon className="h-4 w-4" />
        <span>
          {downloadCount.toLocaleString()} {t("download.stats.downloads")}
        </span>
      </div>

      <div className="flex items-center gap-1.5">
        <Calendar className="h-4 w-4" />
        <span>{formattedDate}</span>
      </div>
    </div>
  );
}
