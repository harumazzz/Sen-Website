"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Download as DownloadIcon, HardDrive, Clock, ArrowDown } from "lucide-react";
import { useTranslation } from "@/hooks/use-translation";
import { formatFileSize } from "@/lib/formatters";

// Platform SVG Icons (extracted locally to avoid circular dependencies with download-list.tsx)
function WindowsIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <rect x="3" y="3" width="8.25" height="8.25" />
      <rect x="12.75" y="3" width="8.25" height="8.25" />
      <rect x="3" y="12.75" width="8.25" height="8.25" />
      <rect x="12.75" y="12.75" width="8.25" height="8.25" />
    </svg>
  );
}

function AndroidIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M6 18c0 .55.45 1 1 1h1v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h2v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h1c.55 0 1-.45 1-1V8H6v10zM3.5 8C2.67 8 2 8.67 2 9.5v6c0 .83.67 1.5 1.5 1.5S5 16.33 5 15.5v-6C5 8.67 4.33 8 3.5 8zm17 0c-.83 0-1.5.67-1.5 1.5v6c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-6c0-.83-.67-1.5-1.5-1.5zM15.97 4.18l1.41-2.45c.16-.28.07-.64-.21-.8a.53.53 0 00-.73.21l-1.45 2.5C13.88 3.23 12.96 3 12 3c-.96 0-1.88.23-2.99.64L7.56 1.14a.53.53 0 00-.73-.21c-.28.16-.37.52-.21.8l1.41 2.45C5.46 5.86 3.65 8.7 3.5 12h17c-.15-3.3-1.96-6.14-4.53-7.82zM8 7.5a1.25 1.25 0 112.5 0 1.25 1.25 0 01-2.5 0zm5.5 0a1.25 1.25 0 112.5 0 1.25 1.25 0 01-2.5 0z" />
    </svg>
  );
}

function MacOSIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.17c.66-.81 1.11-1.93.99-3.06-.96.04-2.13.64-2.82 1.45-.6.7-1.13 1.84-1.01 2.95.81.06 1.9-.38 2.84-1.34z" />
    </svg>
  );
}

function LinuxIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M21.3 18c-.2-1.3-.9-2.9-1.9-4.2-.6-.8-1.3-1.5-2-2-.3-.2-.5-.5-.7-.8.5-1.1.8-2.3.8-3.5 0-3.3-2.5-6-5.5-6S6.5 4.2 6.5 7.5c0 1.2.3 2.4.8 3.5-.2.3-.4.6-.7.8-1.1.9-2.2 2.2-2.7 3.5-.6 1.3-.9 2.8-.7 4.2.1.8.6 1.5 1.3 1.8 1.9.8 4.2 1.2 6.5 1.2 2.3 0 4.6-.4 6.5-1.2.7-.3 1.2-1 1.3-1.8zm-9.3-13c1.7 0 3 1.3 3 3s-1.3 3-3 3-3-1.3-3-3 1.3-3 3-3z"/>
    </svg>
  );
}

const PLATFORM_META: Record<
  string,
  {
    icon: React.ComponentType<{ className?: string }>;
    bgGradient: string;
    iconColor: string;
  }
> = {
  android: {
    icon: AndroidIcon,
    bgGradient: "bg-emerald-50 dark:bg-emerald-950/20 border-emerald-100/30 dark:border-emerald-900/20",
    iconColor: "text-emerald-500 dark:text-emerald-400",
  },
  windows: {
    icon: WindowsIcon,
    bgGradient: "bg-blue-50 dark:bg-blue-950/20 border-blue-100/30 dark:border-blue-900/20",
    iconColor: "text-blue-500 dark:text-blue-400",
  },
  macos: {
    icon: MacOSIcon,
    bgGradient: "bg-zinc-50 dark:bg-zinc-800/40 border-zinc-150/30 dark:border-zinc-700/20",
    iconColor: "text-zinc-600 dark:text-zinc-300",
  },
  linux: {
    icon: LinuxIcon,
    bgGradient: "bg-amber-50 dark:bg-amber-950/20 border-amber-100/30 dark:border-amber-900/20",
    iconColor: "text-amber-500 dark:text-amber-400",
  },
  other: {
    icon: HardDrive,
    bgGradient: "bg-zinc-50 dark:bg-zinc-800/40 border-zinc-150/30 dark:border-zinc-700/20",
    iconColor: "text-zinc-500 dark:text-zinc-400",
  },
};

interface DownloadCardProps {
  platform: string;
  version: string;
  fileName: string;
  fileSize: number;
  downloadUrl: string;
  downloadCount: number;
  releaseDate: string;
  className?: string;
  onDownload?: () => void;
}

export function DownloadCard({
  platform,
  version,
  fileName,
  fileSize,
  downloadUrl,
  downloadCount,
  releaseDate,
  className,
  onDownload,
}: DownloadCardProps) {
  const t = useTranslation();

  const lowerFileName = fileName.toLowerCase();
  const assetKey = lowerFileName.includes("scg")
    ? "scg"
    : lowerFileName.includes("modding")
    ? "modding"
    : "main";

  const displayTitle = t(`download.assets.${assetKey}.title`);
  const displayDescription = t(`download.assets.${assetKey}.description`);

  const formattedDate = new Date(releaseDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  const meta = PLATFORM_META[platform.toLowerCase()] || PLATFORM_META.other;
  const PlatformIcon = meta.icon;

  return (
    <div
      className={cn(
        "group relative flex flex-col justify-between rounded-[22px] border border-zinc-100 dark:border-zinc-800/80",
        "bg-white dark:bg-zinc-900/90",
        "shadow-[0_2px_8px_rgba(0,0,0,0.02)] dark:shadow-[0_2px_12px_rgba(0,0,0,0.15)]",
        "p-5 transition-all duration-200 hover:bg-zinc-50/50 dark:hover:bg-zinc-800/30",
        className
      )}
    >
      <div className="flex flex-col gap-4 flex-1">
        {/* Header Row: Platform Icon & Name/Version */}
        <div className="flex items-start gap-4">
          <div
            className={cn(
              "w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-[13px] border",
              meta.bgGradient
            )}
          >
            <PlatformIcon className={cn("h-6 w-6", meta.iconColor)} />
          </div>
          <div className="flex-1 min-w-0 flex flex-col justify-center">
            <h3 className="font-sans text-[15px] font-semibold text-zinc-900 dark:text-zinc-50 leading-tight break-all group-hover:text-primary transition-colors duration-200">
              {displayTitle}
            </h3>
            <p className="text-[12px] font-medium text-zinc-400 dark:text-zinc-500 leading-none mt-1.5 truncate" title={fileName}>
              v{version} • {formatFileSize(fileSize)} • {fileName}
            </p>
          </div>
        </div>

        {/* Description */}
        <p className="text-[13px] text-zinc-500 dark:text-zinc-400/90 leading-relaxed flex-1">
          {displayDescription}
        </p>

        {/* Metadata: Downloads & Release Date */}
        <div className="flex items-center gap-4 text-[11px] font-medium text-zinc-400 dark:text-zinc-500 pt-2">
          <span className="flex items-center gap-1">
            <ArrowDown className="h-3.5 w-3.5" />
            {downloadCount.toLocaleString()} downloads
          </span>
          <span className="h-3 w-px bg-zinc-200 dark:bg-zinc-800" />
          <span className="flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" />
            {formattedDate}
          </span>
        </div>
      </div>

      {/* CTA Button */}
      <div className="mt-5">
        <Button
          asChild
          className="w-full h-10 rounded-full font-semibold text-xs tracking-wide uppercase transition-all duration-200 active:scale-[0.98] bg-primary text-primary-foreground hover:bg-primary/90"
          size="sm"
        >
          <a
            href={downloadUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => onDownload?.()}
          >
            <DownloadIcon className="h-3.5 w-3.5" />
            {t("download.downloadButton")}
          </a>
        </Button>
      </div>
    </div>
  );
}
