"use client";

import { cn } from "@/lib/utils";
import { DetailBullet } from "./detail-bullet";
import { LucideIcon } from "lucide-react";

interface Feature {
  id: string;
  text: string;
  icon?: LucideIcon;
}

interface FeatureListProps {
  features: Feature[];
  className?: string;
}

export function FeatureList({ features, className }: FeatureListProps) {
  return (
    <ul className={cn("space-y-2", className)}>
      {features.map((feature) => (
        <DetailBullet key={feature.id} text={feature.text} icon={feature.icon} />
      ))}
    </ul>
  );
}
