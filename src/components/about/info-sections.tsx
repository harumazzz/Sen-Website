"use client";

import { InfoCard } from "./info-card";
import { Info, Smartphone, Layers, Code } from "lucide-react";
import { StaggerContainer, StaggerItem } from "@/components/animations/fade-in";
import { useTranslation } from "@/hooks/use-translation";

export function InfoSections() {
  const t = useTranslation();

  const aboutBullets = [
    {
      id: "about-1",
      text: t("about.sections.about.description"),
    },
  ];

  const platformBullets = [
    {
      id: "platform-1",
      text: t("about.sections.platform.windows"),
      icon: Smartphone,
    },
    {
      id: "platform-2",
      text: t("about.sections.platform.windowsDescription"),
    },
    {
      id: "platform-3",
      text: t("about.sections.platform.android"),
      icon: Smartphone,
    },
    {
      id: "platform-4",
      text: t("about.sections.platform.androidDescription"),
    },
  ];

  const modulesBullets = [
    {
      id: "module-1",
      text: t("about.sections.modules.kernel"),
    },
    {
      id: "module-2",
      text: t("about.sections.modules.kernelDescription"),
    },
    {
      id: "module-3",
      text: t("about.sections.modules.shell"),
    },
    {
      id: "module-4",
      text: t("about.sections.modules.shellDescription"),
    },
    {
      id: "module-5",
      text: t("about.sections.modules.script"),
    },
    {
      id: "module-6",
      text: t("about.sections.modules.scriptDescription"),
    },
    {
      id: "module-7",
      text: t("about.sections.modules.modding"),
    },
    {
      id: "module-8",
      text: t("about.sections.modules.moddingDescription"),
    },
  ];

  const techBullets = [
    {
      id: "tech-1",
      text: t("about.sections.tech.meson"),
    },
    {
      id: "tech-2",
      text: t("about.sections.tech.mesonDescription"),
    },
    {
      id: "tech-3",
      text: t("about.sections.tech.flutter"),
    },
    {
      id: "tech-4",
      text: t("about.sections.tech.flutterDescription"),
    },
  ];

  return (
    <StaggerContainer staggerDelay={0.1} className="grid gap-4 sm:gap-5 auto-rows-max">
      <StaggerItem>
        <InfoCard title={t("about.sections.about.title")} icon={Info} bullets={aboutBullets} />
      </StaggerItem>

      <StaggerItem>
        <InfoCard
          title={t("about.sections.platform.title")}
          icon={Smartphone}
          bullets={platformBullets}
        />
      </StaggerItem>

      <StaggerItem>
        <InfoCard
          title={t("about.sections.modules.title")}
          icon={Layers}
          bullets={modulesBullets}
        />
      </StaggerItem>

      <StaggerItem>
        <InfoCard title={t("about.sections.tech.title")} icon={Code} bullets={techBullets} />
      </StaggerItem>
    </StaggerContainer>
  );
}
