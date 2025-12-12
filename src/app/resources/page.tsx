"use client";

import { ResourceDistribution } from "@/components/resources/resource-distribution";
import { Footer } from "@/components/layout/footer";
import { useTranslation } from "@/hooks/use-translation";

export default function ResourcesPage() {
  const t = useTranslation();

  return (
    <div className="w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-2">
            {t("resources.title") || "Worldmap Resources"}
          </h1>
          <p className="text-muted-foreground text-base sm:text-lg">
            {t("resources.subtitle") || "Access and distribute worldmap resources for PvZ2 modding"}
          </p>
        </div>

        <ResourceDistribution />
      </div>
      <Footer />
    </div>
  );
}
