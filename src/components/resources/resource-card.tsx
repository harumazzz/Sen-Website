"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Cloud, HardDrive, ExternalLink } from "lucide-react";
import { useTranslation } from "@/hooks/use-translation";

interface ResourceCardProps {
  id: string;
  title: string;
  description: string;
  icon: "cloud" | "hdd";
  url: string;
  className?: string;
}

const ICON_MAP = {
  cloud: Cloud,
  hdd: HardDrive,
};

export function ResourceCard({
  id,
  title,
  description,
  icon,
  url,
  className,
}: ResourceCardProps) {
  const t = useTranslation();
  const Icon = ICON_MAP[icon];

  return (
    <div
      className={cn(
        "flex flex-col justify-between rounded-2xl",
        "bg-white/[0.04] dark:bg-white/[0.02]",
        "backdrop-blur-xl",
        "border border-white/[0.12] dark:border-white/[0.06]",
        "p-6 sm:p-8",
        "shadow-[0_8px_32px_0_rgba(0,0,0,0.03)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.25)]",
        "transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-primary/30 hover:bg-white/[0.06] dark:hover:bg-white/[0.04]",
        className
      )}
    >
      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <div className="p-3 rounded-xl border bg-primary/10 border-primary/20 text-primary transition-colors">
            <Icon className="h-6 w-6" />
          </div>
          <h3 className="text-xl font-bold tracking-tight text-foreground">{title}</h3>
        </div>
        <p className="text-sm leading-relaxed text-muted-foreground min-h-[60px]">
          {description}
        </p>
      </div>

      <div className="mt-6">
        <Button asChild className="w-full font-semibold shadow-sm" size="lg">
          <a href={url} target="_blank" rel="noopener noreferrer" className="gap-2">
            <ExternalLink className="h-4 w-4" />
            {t("resources.accessButton")}
          </a>
        </Button>
      </div>
    </div>
  );
}
