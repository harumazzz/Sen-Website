"use client";

import { Logo } from "@/components/ui/logo";
import { FadeIn, ScaleIn } from "@/components/animations/fade-in";
import { useTranslation } from "@/hooks/use-translation";

export function HeroSection() {
  const t = useTranslation();

  return (
    <section className="w-full py-4 sm:py-4 lg:py-4">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <ScaleIn delay={0.1}>
          <div className="flex justify-center mb-3 sm:mb-3">
            <div className="p-2 rounded-2xl backdrop-blur-xl bg-gradient-to-br from-white/20 to-white/10 border border-white/30 shadow-xl dark:from-white/10 dark:to-white/5 dark:border-white/20 transition-all duration-300">
              <Logo size="xl" className="w-12 h-12 sm:w-16 sm:h-16" />
            </div>
          </div>
        </ScaleIn>

        {/* Tagline */}
        <FadeIn delay={0.3} direction="up">
          <div className="text-center px-4">
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight max-w-4xl mx-auto leading-tight">
              {t("hero.tagline")}
            </h1>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
