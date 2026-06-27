"use client";

import Link from "next/link";
import { useTranslation } from "@/hooks/use-translation";
import { Button } from "@/components/ui/button";
import { Map, Eye, Terminal, MessageCircle, AlertCircle } from "lucide-react";
import { EXTERNAL_LINKS } from "@/lib/constants";
import { WindowsIcon, AndroidIcon } from "../download/download-list";
import { cn } from "@/lib/utils";

export function InfoSections() {
  const t = useTranslation();

  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 items-start">
        {/* Left Column: Sticky Metadata Sidebar (4 columns) */}
        <div className="md:col-span-4 md:sticky md:top-24 space-y-6">
          <div
            className={cn(
              "flex flex-col rounded-2xl border border-white/20 dark:border-white/10",
              "bg-white/45 dark:bg-zinc-900/35 backdrop-blur-xl p-5 sm:p-6 gap-6",
              "shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.15)]"
            )}
          >
            {/* Title */}
            <div>
              <h2 className="text-[10px] font-semibold text-muted-foreground/75 uppercase tracking-wider leading-none">
                {t("about.details.title")}
              </h2>
            </div>

            {/* Spec details block */}
            <div className="rounded-xl border border-white/10 dark:border-white/5 bg-white/20 dark:bg-zinc-800/10 overflow-hidden divide-y divide-white/10 dark:divide-white/5">
              {/* Version row */}
              <div className="flex items-center justify-between px-4 py-3.5 transition-colors duration-150 hover:bg-white/10 dark:hover:bg-white/5">
                <span className="text-xs font-semibold text-foreground">
                  {t("about.details.release")}
                </span>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-foreground">v4.0.0</span>
                  <span className="inline-flex items-center rounded-full bg-primary/10 dark:bg-primary/20 px-2 py-0.5 text-[9px] font-semibold text-primary">
                    {t("about.details.stable")}
                  </span>
                </div>
              </div>

              {/* Compatibility row */}
              <div className="flex items-center justify-between px-4 py-3.5 transition-colors duration-150 hover:bg-white/10 dark:hover:bg-white/5">
                <span className="text-xs font-semibold text-foreground">
                  {t("about.details.compatibility")}
                </span>
                <div className="flex gap-2">
                  <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-muted-foreground bg-white/40 dark:bg-white/5 border border-white/10 rounded-full px-2 py-0.5">
                    <WindowsIcon className="h-3 w-3" />
                    Win
                  </span>
                  <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-muted-foreground bg-white/40 dark:bg-white/5 border border-white/10 rounded-full px-2 py-0.5">
                    <AndroidIcon className="h-3 w-3" />
                    And
                  </span>
                </div>
              </div>
            </div>

            {/* Support Actions */}
            <div className="flex flex-col gap-2.5 pt-4 border-t border-white/10 dark:border-white/5">
              <span className="text-[10px] font-semibold text-muted-foreground/75 uppercase tracking-wider leading-none mb-1.5 block">
                {t("about.support.title")}
              </span>
              <div className="flex flex-col gap-2.5">
                <Button
                  asChild
                  className="w-full gap-2 rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5 active:translate-y-0 text-xs"
                  size="sm"
                >
                  <Link
                    href="https://discord.gg/DxDmVDMdrq"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="h-4 w-4" />
                    {t("about.support.discordButton")}
                  </Link>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  className="w-full gap-2 rounded-full border border-white/20 dark:border-white/10 bg-white/40 dark:bg-zinc-900/35 backdrop-blur-md font-medium text-foreground transition-all duration-300 hover:bg-white/60 dark:hover:bg-zinc-900/45 hover:-translate-y-0.5 active:translate-y-0 text-xs shadow-xs"
                  size="sm"
                >
                  <Link href={EXTERNAL_LINKS.ISSUES} target="_blank" rel="noopener noreferrer">
                    <AlertCircle className="h-4 w-4" />
                    {t("about.support.issuesButton")}
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Project Overview and Features (8 columns) */}
        <div className="md:col-span-8 flex flex-col gap-6">
          {/* Project Overview Card */}
          <div
            className={cn(
              "flex flex-col rounded-2xl border border-white/20 dark:border-white/10",
              "bg-white/45 dark:bg-zinc-900/35 backdrop-blur-xl p-5 sm:p-6 gap-4",
              "shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.15)]"
            )}
          >
            <h2 className="text-base font-bold tracking-tight text-foreground">
              {t("about.overview.title")}
            </h2>
            <div className="space-y-4 text-xs sm:text-sm text-muted-foreground/90 leading-relaxed font-normal">
              <p>{t("about.overview.p1")}</p>
              <p>{t("about.overview.p2")}</p>
            </div>
          </div>

          {/* Core Features Card */}
          <div
            className={cn(
              "flex flex-col rounded-2xl border border-white/20 dark:border-white/10",
              "bg-white/45 dark:bg-zinc-900/35 backdrop-blur-xl p-5 sm:p-6 gap-6",
              "shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.15)]"
            )}
          >
            <h2 className="text-base font-bold tracking-tight text-foreground">
              {t("about.features.title")}
            </h2>

            <div className="flex flex-col gap-3">
              {/* Feature 1 */}
              <div className="flex gap-4 p-3.5 rounded-xl border border-white/10 dark:border-white/5 bg-white/20 dark:bg-zinc-800/10 hover:bg-white/40 dark:hover:bg-zinc-800/20 transition-all duration-250">
                <div className="p-2 rounded-xl border border-white/40 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur-xs text-primary shadow-xs shrink-0 h-9 w-9 flex items-center justify-center">
                  <Map className="h-4.5 w-4.5" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-bold text-xs sm:text-sm text-foreground">
                    {t("about.features.mapEditor.title")}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-muted-foreground/95 leading-normal">
                    {t("about.features.mapEditor.desc")}
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex gap-4 p-3.5 rounded-xl border border-white/10 dark:border-white/5 bg-white/20 dark:bg-zinc-800/10 hover:bg-white/40 dark:hover:bg-zinc-800/20 transition-all duration-250">
                <div className="p-2 rounded-xl border border-white/40 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur-xs text-primary shadow-xs shrink-0 h-9 w-9 flex items-center justify-center">
                  <Eye className="h-4.5 w-4.5" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-bold text-xs sm:text-sm text-foreground">
                    {t("about.features.assets.title")}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-muted-foreground/95 leading-normal">
                    {t("about.features.assets.desc")}
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex gap-4 p-3.5 rounded-xl border border-white/10 dark:border-white/5 bg-white/20 dark:bg-zinc-800/10 hover:bg-white/40 dark:hover:bg-zinc-800/20 transition-all duration-250">
                <div className="p-2 rounded-xl border border-white/40 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur-xs text-primary shadow-xs shrink-0 h-9 w-9 flex items-center justify-center">
                  <Terminal className="h-4.5 w-4.5" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-bold text-xs sm:text-sm text-foreground">
                    {t("about.features.automation.title")}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-muted-foreground/95 leading-normal">
                    {t("about.features.automation.desc")}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Feedback & Support Banner */}
          <div className="flex items-start gap-3 p-4 rounded-xl border border-white/10 dark:border-white/5 bg-white/20 dark:bg-zinc-800/10 backdrop-blur-sm shadow-xs">
            <MessageCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
            <div className="space-y-1">
              <h3 className="font-bold text-xs sm:text-sm text-foreground leading-none">
                {t("about.support.title")}
              </h3>
              <p className="text-[11px] sm:text-xs text-muted-foreground/95 leading-normal">
                {t("about.support.text")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
