"use client";

import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlatformBadge } from "./platform-badge";
import { DownloadStats } from "./download-stats";
import { Download as DownloadIcon, Monitor, Smartphone } from "lucide-react";
import { useTranslation } from "@/hooks/use-translation";

interface DownloadCardProps {
  platform: string;
  version: string;
  fileName: string;
  fileSize: number;
  downloadUrl: string;
  downloadCount: number;
  releaseDate: string;
  description?: string;
  className?: string;
}

const PLATFORM_ICONS = {
  windows: Monitor,
  android: Smartphone,
  linux: Monitor,
  macos: Monitor,
} as const;

export function DownloadCard({
  platform,
  version,
  fileName,
  fileSize,
  downloadUrl,
  downloadCount,
  releaseDate,
  description,
  className,
}: DownloadCardProps) {
  const t = useTranslation();
  const normalizedPlatform = platform.toLowerCase();
  const Icon =
    PLATFORM_ICONS[normalizedPlatform as keyof typeof PLATFORM_ICONS] ||
    Monitor;

  return (
    <Card
      className={cn(
        "flex flex-col transition-all duration-300 hover:shadow-lg hover:border-primary/30",
        "border border-border/50",
        className
      )}
    >
      <CardHeader>
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-gradient-to-br from-primary/20 to-primary/10">
              <Icon className="h-5 w-5 text-primary" />
            </div>
            <div>
              <CardTitle className="text-lg capitalize font-semibold">
                {platform}
              </CardTitle>
              <CardDescription className="mt-1 text-xs">
                {t("download.stats.version")} {version}
              </CardDescription>
            </div>
          </div>
          <PlatformBadge platform={platform} />
        </div>
      </CardHeader>

      <CardContent className="flex-1">
        {description && (
          <p className="text-xs text-muted-foreground/90 mb-3 leading-relaxed">
            {description}
          </p>
        )}

        <div className="space-y-2 pb-3 border-b border-border/50">
          <div className="flex items-center justify-between text-xs">
            <span className="text-muted-foreground font-medium">
              {t("download.stats.file")}
            </span>
            <span className="font-mono text-xs bg-muted px-2 py-0.5 rounded">
              {fileName}
            </span>
          </div>
        </div>
      </CardContent>

      <CardFooter className="flex flex-col gap-3">
        <DownloadStats
          fileSize={fileSize}
          downloadCount={downloadCount}
          releaseDate={releaseDate}
        />

        <Button variant="outline" asChild className="w-full" size="sm">
          <a href={downloadUrl} target="_blank" rel="noopener noreferrer">
            <DownloadIcon className="h-3 w-3 mr-1.5" />
            {t("download.downloadButton")}
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}
