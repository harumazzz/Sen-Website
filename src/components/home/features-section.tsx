"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations/fade-in";
import { useTranslation } from "@/hooks/use-translation";

export function FeaturesSection() {
  const t = useTranslation();

  const handleDiscordClick = () => {
    window.open("https://discord.gg/DxDmVDMdrq", "_blank", "noopener,noreferrer");
  };

  return (
    <section className="w-full py-6 sm:py-8 lg:py-7">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto space-y-3 sm:space-y-4">
          {/* Description */}
          <FadeIn delay={0.4}>
            <div className="text-center px-4">
              <p className="text-sm sm:text-base lg:text-lg font-medium text-muted-foreground/90 leading-relaxed max-w-2xl mx-auto">
                {t("hero.description")}
              </p>
            </div>
          </FadeIn>

          {/* CTA Buttons */}
          <StaggerContainer staggerDelay={0.15}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 px-4">
              <StaggerItem>
                <Button
                  asChild
                  size="sm"
                  className="w-full sm:w-auto px-6 py-2 text-sm font-semibold"
                >
                  <Link href="/download">{t("hero.downloadButton")}</Link>
                </Button>
              </StaggerItem>
              <StaggerItem>
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={handleDiscordClick}
                  className="w-full sm:w-auto px-6 py-2 text-sm font-semibold"
                >
                  {t("hero.discordButton")}
                </Button>
              </StaggerItem>
            </div>
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
