"use client";

import { ASSETS } from "@/constants/assets";
import { ResourceCard } from "./resource-card";
import { useTranslation } from "@/hooks/use-translation";
import { StaggerContainer, StaggerItem } from "@/components/animations/fade-in";

export function ResourceDistribution() {
  const t = useTranslation();

  const resources = [
    {
      id: "google-drive",
      title: t("resources.googleDrive"),
      description: t("resources.googleDriveDesc"),
      icon: "cloud" as const,
      url: ASSETS.googleDrive,
    },
    {
      id: "onedrive",
      title: t("resources.oneDrive"),
      description: t("resources.oneDriveDesc"),
      icon: "hdd" as const,
      url: ASSETS.oneDrive,
    },
  ];

  const steps = [
    { desc: t("resources.stepDownload") },
    { desc: t("resources.stepNavigate") },
    { desc: t("resources.stepEnjoy") },
  ];

  return (
    <div className="space-y-10">
      {/* Resources Cards Grid */}
      <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {resources.map((resource) => (
          <StaggerItem key={resource.id}>
            <ResourceCard
              id={resource.id}
              title={resource.title}
              description={resource.description}
              icon={resource.icon}
              url={resource.url}
            />
          </StaggerItem>
        ))}
      </StaggerContainer>

      {/* Guide Section */}
      <StaggerContainer className="rounded-2xl bg-white/[0.04] dark:bg-white/[0.02] backdrop-blur-xl border border-white/[0.12] dark:border-white/[0.06] p-6 sm:p-8 shadow-[0_8px_32px_0_rgba(0,0,0,0.03)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.25)]">
        <h3 className="text-lg font-bold mb-6 text-foreground">
          {t("resources.howToUse")}
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <StaggerItem key={index} className="w-full">
              <div className="flex flex-col items-start p-5 h-full rounded-xl bg-white/[0.03] dark:bg-white/[0.01] backdrop-blur-md border border-white/[0.08] dark:border-white/[0.03] shadow-sm hover:border-primary/20 hover:bg-white/[0.06] dark:hover:bg-white/[0.02] transition-all duration-300 ease-out">
                <span className="text-3xl font-extrabold text-primary/40 mb-2 font-mono">
                  0{index + 1}
                </span>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {step.desc}
                </p>
              </div>
            </StaggerItem>
          ))}
        </div>
      </StaggerContainer>
    </div>
  );
}
