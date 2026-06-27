"use client";

import { ResourceDistribution } from "@/components/resources/resource-distribution";
import { Footer } from "@/components/layout/footer";
import { useTranslation } from "@/hooks/use-translation";
import { FadeIn } from "@/components/animations/fade-in";

export default function ResourcesPage() {
  const t = useTranslation();

  return (
    <div className="w-full bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        <FadeIn direction="up" delay={0.1}>
          <div className="mb-12 max-w-2xl">
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight mb-4 bg-gradient-to-r from-foreground via-foreground/90 to-foreground/75 bg-clip-text text-transparent">
              {t("resources.title") || "Worldmap Resources"}
            </h1>
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
              {t("resources.subtitle") || "Access and distribute worldmap resources for PvZ2 modding"}
            </p>
          </div>
        </FadeIn>

        <ResourceDistribution />
      </div>
      <Footer />
    </div>
  );
}
