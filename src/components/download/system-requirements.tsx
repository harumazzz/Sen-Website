"use client";

import { useState } from "react";
import { Cpu, HardDrive, ShieldCheck, Layers, Info, Laptop } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTranslation } from "@/hooks/use-translation";

type Platform = "Windows" | "Android";

interface RequirementRow {
  category: string;
  value: string;
  isHeader?: boolean;
}

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

function getReqIcon(category: string, platform: Platform) {
  const cat = category.toLowerCase();
  if (cat.includes("os") || cat.includes("system") || cat.includes("operating")) {
    return platform === "Windows" ? WindowsIcon : AndroidIcon;
  }
  if (cat.includes("memory") || cat.includes("ram")) return Cpu;
  if (cat.includes("storage") || cat.includes("space") || cat.includes("disk")) return HardDrive;
  if (cat.includes("permission")) return ShieldCheck;
  return Layers;
}

export function SystemRequirements() {
  const t = useTranslation();
  const [selectedPlatform, setSelectedPlatform] = useState<Platform>("Windows");

  const windowsRequirements: RequirementRow[] = [
    { category: "OS", value: t("download.systemRequirements.windows.os"), isHeader: true },
    {
      category: t("download.systemRequirements.windows.runtime"),
      value: t("download.systemRequirements.windows.runtimeValue"),
    },
    {
      category: t("download.systemRequirements.windows.memory"),
      value: t("download.systemRequirements.windows.memoryValue"),
    },
    {
      category: t("download.systemRequirements.windows.storage"),
      value: t("download.systemRequirements.windows.storageValue"),
    },
  ];

  const androidRequirements: RequirementRow[] = [
    { category: "OS", value: t("download.systemRequirements.android.os"), isHeader: true },
    {
      category: t("download.systemRequirements.android.memory"),
      value: t("download.systemRequirements.android.memoryValue"),
    },
    {
      category: t("download.systemRequirements.android.storage"),
      value: t("download.systemRequirements.android.storageValue"),
    },
    {
      category: t("download.systemRequirements.android.permissions"),
      value: t("download.systemRequirements.android.permissionsValue"),
    },
  ];

  const requirements = selectedPlatform === "Windows" ? windowsRequirements : androidRequirements;

  return (
    <div
      className={cn(
        "flex flex-col rounded-2xl border border-white/20 dark:border-white/10",
        "bg-white/45 dark:bg-zinc-900/35 backdrop-blur-xl p-5 sm:p-6 gap-6",
        "shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.15)]",
        "h-full"
      )}
    >
      <div className="flex flex-col gap-6 flex-1">
        {/* Header */}
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl border border-white/40 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur-xs text-primary shadow-xs">
            <Laptop className="h-4.5 w-4.5" />
          </div>
          <h2 className="text-base font-bold tracking-tight text-foreground">
            {t("download.systemRequirements.title")}
          </h2>
        </div>

        {/* Platform Switcher (iOS Segmented Control Style) */}
        <div className="grid grid-cols-2 p-1 gap-1 rounded-full bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 backdrop-blur-md">
          <button
            onClick={() => setSelectedPlatform("Windows")}
            className={cn(
              "flex items-center justify-center gap-2 py-2 text-xs font-semibold rounded-full transition-all duration-300 cursor-pointer",
              selectedPlatform === "Windows"
                ? "bg-white dark:bg-zinc-800 text-foreground shadow-[0_2px_8px_rgba(0,0,0,0.08)]"
                : "text-muted-foreground/80 hover:text-foreground"
            )}
          >
            <WindowsIcon className="h-3.5 w-3.5" />
            {t("download.platform.windows")}
          </button>
          <button
            onClick={() => setSelectedPlatform("Android")}
            className={cn(
              "flex items-center justify-center gap-2 py-2 text-xs font-semibold rounded-full transition-all duration-300 cursor-pointer",
              selectedPlatform === "Android"
                ? "bg-white dark:bg-zinc-800 text-foreground shadow-[0_2px_8px_rgba(0,0,0,0.08)]"
                : "text-muted-foreground/80 hover:text-foreground"
            )}
          >
            <AndroidIcon className="h-3.5 w-3.5" />
            {t("download.platform.android")}
          </button>
        </div>

        {/* Requirements List */}
        <div className="rounded-xl border border-white/10 dark:border-white/5 bg-white/20 dark:bg-zinc-800/10 overflow-hidden divide-y divide-white/10 dark:divide-white/5">
          {requirements.map((req, index) => {
            const Icon = getReqIcon(req.isHeader ? "OS" : req.category, selectedPlatform);
            return (
              <div
                key={index}
                className="flex items-center justify-between px-4 py-3.5 transition-colors duration-150 hover:bg-white/10 dark:hover:bg-white/5"
              >
                <div className="flex items-center gap-2.5">
                  <Icon className="h-4 w-4 text-muted-foreground/80" />
                  <span className="text-xs font-semibold text-foreground">
                    {req.isHeader ? "OS" : req.category}
                  </span>
                </div>
                <span className="text-xs font-medium text-muted-foreground/90 max-w-[60%] text-right">
                  {req.value}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Info Banner */}
      <div className="flex items-start gap-3 p-3.5 rounded-xl border border-white/10 dark:border-white/5 bg-white/10 dark:bg-white/5 backdrop-blur-sm">
        <Info className="h-4 w-4 text-muted-foreground/80 shrink-0 mt-0.5" />
        <p className="text-[11px] text-muted-foreground/90 leading-normal">
          {t("download.systemRequirements.info")}
        </p>
      </div>
    </div>
  );
}
