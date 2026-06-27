"use client";

import { Download } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTranslation } from "@/hooks/use-translation";

interface Step {
  number: string;
  title: string;
  description: string;
  isLast?: boolean;
}

export function InstallationGuide() {
  const t = useTranslation();

  const installationSteps: Step[] = [
    {
      number: "1",
      title: t("download.installation.step1.title"),
      description: t("download.installation.step1.description"),
    },
    {
      number: "2",
      title: t("download.installation.step2.title"),
      description: t("download.installation.step2.description"),
    },
    {
      number: "3",
      title: t("download.installation.step3.title"),
      description: t("download.installation.step3.description"),
    },
    {
      number: "4",
      title: t("download.installation.step4.title"),
      description: t("download.installation.step4.description"),
      isLast: true,
    },
  ];

  return (
    <div
      className={cn(
        "flex flex-col rounded-2xl border border-white/20 dark:border-white/10",
        "bg-white/45 dark:bg-zinc-900/35 backdrop-blur-xl p-5 sm:p-6 gap-6",
        "shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.15)]",
        "h-full"
      )}
    >
      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="p-2 rounded-xl border border-white/40 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur-xs text-primary shadow-xs">
          <Download className="h-4.5 w-4.5" />
        </div>
        <h2 className="text-base font-bold tracking-tight text-foreground">
          {t("download.installation.title")}
        </h2>
      </div>

      {/* Steps List */}
      <div className="flex flex-col justify-between flex-1">
        {installationSteps.map((step) => (
          <div key={step.number} className="flex gap-4 group/step flex-1">
            {/* Step Number with Connector */}
            <div className="flex flex-col items-center">
              <div
                className={cn(
                  "flex h-7 w-7 shrink-0 items-center justify-center rounded-full border text-xs font-bold transition-all duration-300 shadow-xs",
                  "bg-white/60 dark:bg-white/5 border-white/40 dark:border-white/10 text-primary",
                  "group-hover/step:bg-primary group-hover/step:text-primary-foreground group-hover/step:border-transparent"
                )}
              >
                {step.number}
              </div>
              {!step.isLast && (
                <div className="w-[1.5px] bg-gradient-to-b from-primary/30 via-primary/10 to-transparent flex-1 my-1.5 min-h-[2.5rem]" />
              )}
            </div>

            {/* Step Content */}
            <div className={cn("flex-1 pb-6", step.isLast && "pb-0")}>
              <h3 className="font-bold text-xs sm:text-sm text-foreground mb-1 leading-snug transition-colors duration-200 group-hover/step:text-primary">
                {step.title}
              </h3>
              <p className="text-[11px] sm:text-xs text-muted-foreground/90 leading-relaxed">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
