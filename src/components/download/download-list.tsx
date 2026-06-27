"use client";

import { useState } from "react";
import { DownloadCard } from "./download-card";
import { ThankYouDialog } from "./thank-you-dialog";
import { AlertCircle } from "lucide-react";
import LoadingIndicator from "../ui/loading-indicator";
import { useTranslation } from "@/hooks/use-translation";

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

type PlatformKey = "android" | "windows" | "linux" | "macos" | "other";

export function WindowsIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <rect x="3" y="3" width="8.25" height="8.25" />
      <rect x="12.75" y="3" width="8.25" height="8.25" />
      <rect x="3" y="12.75" width="8.25" height="8.25" />
      <rect x="12.75" y="12.75" width="8.25" height="8.25" />
    </svg>
  );
}

export function AndroidIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M6 18c0 .55.45 1 1 1h1v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h2v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h1c.55 0 1-.45 1-1V8H6v10zM3.5 8C2.67 8 2 8.67 2 9.5v6c0 .83.67 1.5 1.5 1.5S5 16.33 5 15.5v-6C5 8.67 4.33 8 3.5 8zm17 0c-.83 0-1.5.67-1.5 1.5v6c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-6c0-.83-.67-1.5-1.5-1.5zM15.97 4.18l1.41-2.45c.16-.28.07-.64-.21-.8a.53.53 0 00-.73.21l-1.45 2.5C13.88 3.23 12.96 3 12 3c-.96 0-1.88.23-2.99.64L7.56 1.14a.53.53 0 00-.73-.21c-.28.16-.37.52-.21.8l1.41 2.45C5.46 5.86 3.65 8.7 3.5 12h17c-.15-3.3-1.96-6.14-4.53-7.82zM8 7.5a1.25 1.25 0 112.5 0 1.25 1.25 0 01-2.5 0zm5.5 0a1.25 1.25 0 112.5 0 1.25 1.25 0 01-2.5 0z" />
    </svg>
  );
}

export function MacOSIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.17c.66-.81 1.11-1.93.99-3.06-.96.04-2.13.64-2.82 1.45-.6.7-1.13 1.84-1.01 2.95.81.06 1.9-.38 2.84-1.34z" />
    </svg>
  );
}

export function LinuxIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M21.3 18c-.2-1.3-.9-2.9-1.9-4.2-.6-.8-1.3-1.5-2-2-.3-.2-.5-.5-.7-.8.5-1.1.8-2.3.8-3.5 0-3.3-2.5-6-5.5-6S6.5 4.2 6.5 7.5c0 1.2.3 2.4.8 3.5-.2.3-.4.6-.7.8-1.1.9-2.2 2.2-2.7 3.5-.6 1.3-.9 2.8-.7 4.2.1.8.6 1.5 1.3 1.8 1.9.8 4.2 1.2 6.5 1.2 2.3 0 4.6-.4 6.5-1.2.7-.3 1.2-1 1.3-1.8zm-9.3-13c1.7 0 3 1.3 3 3s-1.3 3-3 3-3-1.3-3-3 1.3-3 3-3z"/>
    </svg>
  );
}

const PLATFORM_CONFIG: Record<
  PlatformKey,
  { label: string; icon: React.ElementType; color: string; bg: string; border: string }
> = {
  android: {
    label: "Android",
    icon: AndroidIcon,
    color: "text-emerald-500 dark:text-emerald-400",
    bg: "bg-emerald-500/5 dark:bg-emerald-400/5",
    border: "border-emerald-500/10 dark:border-emerald-400/10",
  },
  windows: {
    label: "Windows",
    icon: WindowsIcon,
    color: "text-blue-500 dark:text-blue-400",
    bg: "bg-blue-500/5 dark:bg-blue-400/5",
    border: "border-blue-500/10 dark:border-blue-400/10",
  },
  linux: {
    label: "Linux",
    icon: LinuxIcon,
    color: "text-amber-500 dark:text-amber-400",
    bg: "bg-amber-500/5 dark:bg-amber-400/5",
    border: "border-amber-500/10 dark:border-amber-400/10",
  },
  macos: {
    label: "macOS",
    icon: MacOSIcon,
    color: "text-zinc-500 dark:text-zinc-400",
    bg: "bg-zinc-500/5 dark:bg-zinc-400/5",
    border: "border-zinc-500/10 dark:border-zinc-400/10",
  },
  other: {
    label: "Other",
    icon: WindowsIcon,
    color: "text-muted-foreground",
    bg: "bg-muted/5",
    border: "border-border/30",
  },
};

function detectPlatform(name: string): PlatformKey {
  const lower = name.toLowerCase();
  if (lower.includes("android")) return "android";
  if (lower.includes("win")) return "windows";
  if (lower.includes("linux")) return "linux";
  if (lower.includes("mac") || lower.includes("darwin")) return "macos";
  return "other";
}

export function DownloadList({ assets, version = "LTS", isLoading, error }: DownloadListProps) {
  const [isThankYouOpen, setIsThankYouOpen] = useState(false);
  const t = useTranslation();

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center py-16 gap-3 text-center">
        <div className="p-3 rounded-full bg-destructive/10">
          <AlertCircle className="h-6 w-6 text-destructive" />
        </div>
        <p className="text-sm text-muted-foreground">{t("download.failedToLoad", { error })}</p>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-24">
        <LoadingIndicator size={36} />
      </div>
    );
  }

  if (!assets || assets.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 gap-3 text-center">
        <p className="text-muted-foreground">{t("download.noDownloads")}</p>
      </div>
    );
  }
  const grouped = assets.reduce<Record<string, Asset[]>>((acc, asset) => {
    const platform = detectPlatform(asset.name);
    if (!acc[platform]) acc[platform] = [];
    acc[platform].push(asset);
    return acc;
  }, {});

  const platformOrder: PlatformKey[] = ["android", "windows", "linux", "macos", "other"];
  const orderedPlatforms = platformOrder.filter((p) => grouped[p]?.length);

  return (
    <>
      <div className="space-y-12">
        {orderedPlatforms.map((platformKey) => {
          const config = PLATFORM_CONFIG[platformKey];
          const Icon = config.icon;
          const platformAssets = [...grouped[platformKey]].sort((a, b) => {
            const getOrder = (name: string) => {
              const lower = name.toLowerCase();
              if (lower.includes("scg")) return 2;
              if (lower.includes("modding")) return 1;
              return 0;
            };
            return getOrder(a.name) - getOrder(b.name);
          });

          return (
            <section key={platformKey} className="space-y-6">
              {/* Section header */}
              <div className="flex items-center gap-3">
                <div
                  className={`p-2 rounded-xl ${config.bg} ${config.border} border backdrop-blur-xs`}
                >
                  <Icon className={`h-4.5 w-4.5 ${config.color}`} />
                </div>
                <h2 className="text-base font-bold tracking-tight text-foreground">{config.label}</h2>
                <span className="text-[11px] font-semibold text-muted-foreground/80 bg-white/40 dark:bg-zinc-800/40 border border-white/20 dark:border-white/5 px-2 py-0.5 rounded-full">
                  {platformAssets.length} {platformAssets.length === 1 ? t("download.file") : t("download.files")}
                </span>
                <div className="flex-1 h-px bg-border/40" />
              </div>

              {/* Asset cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {platformAssets.map((asset) => (
                  <DownloadCard
                    key={asset.name}
                    platform={platformKey}
                    version={version}
                    fileName={asset.name}
                    fileSize={asset.size}
                    downloadUrl={asset.browserDownloadUrl}
                    downloadCount={asset.downloadCount}
                    releaseDate={asset.createdAt}
                    onDownload={() => setIsThankYouOpen(true)}
                  />
                ))}
              </div>
            </section>
          );
        })}
      </div>
      <ThankYouDialog isOpen={isThankYouOpen} onClose={() => setIsThankYouOpen(false)} />
    </>
  );
}
