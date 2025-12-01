"use client";

import { cn } from "@/lib/utils";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FeatureList } from "./feature-list";
import { LucideIcon } from "lucide-react";
import type { InfoSection } from "@/lib/types";

interface InfoCardProps {
  title: string;
  description?: string;
  icon?: LucideIcon;
  bullets?: Array<{ id: string; text: string; icon?: LucideIcon }>;
  children?: React.ReactNode;
  className?: string;
}

export function InfoCard({
  title,
  description,
  icon: Icon,
  bullets,
  children,
  className,
}: InfoCardProps) {
  return (
    <Card
      className={cn(
        "hover:shadow-lg transition-all duration-300 h-full border border-border/50",
        "hover:border-primary/20",
        className
      )}
    >
      <CardHeader>
        <div className="flex items-start gap-3">
          {Icon && (
            <div className="p-2 rounded-lg bg-gradient-to-br from-primary/15 to-primary/5 shrink-0">
              <Icon className="h-5 w-5 text-primary" />
            </div>
          )}
          <div className="flex-1 min-w-0">
            <CardTitle className="text-lg font-semibold">{title}</CardTitle>
            {description && (
              <CardDescription className="mt-1 text-sm leading-relaxed">
                {description}
              </CardDescription>
            )}
          </div>
        </div>
      </CardHeader>

      {(bullets || children) && (
        <CardContent>
          {bullets && bullets.length > 0 && <FeatureList features={bullets} />}
          {children}
        </CardContent>
      )}
    </Card>
  );
}
