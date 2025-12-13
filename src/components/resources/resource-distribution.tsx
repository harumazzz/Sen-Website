"use client";

import { ASSETS } from "@/constants/assets";
import { ResourceCard } from "./resource-card";
import { useTranslation } from "@/hooks/use-translation";

export function ResourceDistribution() {
  const t = useTranslation();

  const resources = [
    {
      id: "google-drive",
      title: t("resources.googleDrive"),
      description: t("resources.googleDriveDesc"),
      icon: "cloud",
      url: ASSETS.googleDrive,
      color: "from-blue-500 to-blue-600",
    },
    {
      id: "onedrive",
      title: t("resources.oneDrive"),
      description: t("resources.oneDriveDesc"),
      icon: "hdd",
      url: ASSETS.oneDrive,
      color: "from-blue-600 to-indigo-600",
    },
  ];

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {resources.map((resource) => (
          <ResourceCard
            key={resource.id}
            title={resource.title}
            description={resource.description}
            icon={resource.icon as any}
            url={resource.url}
            color={resource.color}
          />
        ))}
      </div>

      <div className="rounded-lg backdrop-blur-xl bg-gradient-to-br from-white/20 to-white/10 border border-white/30 shadow-xl p-6 space-y-4 dark:from-white/10 dark:to-white/5 dark:border-white/20 transition-all duration-300">
        <h3 className="text-lg font-semibold">
          {t("resources.howToUse")}
        </h3>
        <ol className="space-y-3 text-sm text-muted-foreground">
          <li className="flex gap-4">
            <span className="flex-shrink-0 font-bold text-primary">1.</span>
            <span>{t("resources.stepDownload")}</span>
          </li>
          <li className="flex gap-4">
            <span className="flex-shrink-0 font-bold text-primary">2.</span>
            <span>{t("resources.stepNavigate")}</span>
          </li>
          <li className="flex gap-4">
            <span className="flex-shrink-0 font-bold text-primary">3.</span>
            <span>{t("resources.stepEnjoy")}</span>
          </li>
        </ol>
      </div>
    </div>
  );
}
