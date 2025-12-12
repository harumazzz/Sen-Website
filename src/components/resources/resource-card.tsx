"use client";

import { cn } from "@/lib/utils";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Cloud, HardDrive, ExternalLink } from "lucide-react";
import { useTranslation } from "@/hooks/use-translation";

interface ResourceCardProps {
  title: string;
  description: string;
  icon: "cloud" | "hdd";
  url: string;
  color: string;
  className?: string;
}

const ICON_MAP = {
  cloud: Cloud,
  hdd: HardDrive,
};

export function ResourceCard({
  title,
  description,
  icon,
  url,
  color,
  className,
}: ResourceCardProps) {
  const t = useTranslation();
  const Icon = ICON_MAP[icon];

  return (
    <Card
      className={cn(
        "flex flex-col transition-all duration-300 hover:shadow-lg hover:border-primary/30",
        "border border-border/50",
        className
      )}
    >
      <CardHeader>
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-start gap-4 flex-1">
            <div className={cn("p-3 rounded-lg bg-gradient-to-br", color)}>
              <Icon className="h-6 w-6 text-white" />
            </div>
            <div className="flex-1">
              <CardTitle className="text-xl font-bold">{title}</CardTitle>
              <CardDescription className="mt-2 text-sm leading-relaxed">
                {description}
              </CardDescription>
            </div>
          </div>
        </div>
      </CardHeader>

      <CardContent className="flex-1 flex flex-col justify-end">
        <Button asChild className="w-full" size="lg">
          <a href={url} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="h-4 w-4 mr-2" />
            {t("resources.accessButton")}
          </a>
        </Button>
      </CardContent>
    </Card>
  );
}
