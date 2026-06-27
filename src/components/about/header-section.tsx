"use client";

import { Logo } from "@/components/ui/logo";
import { useTranslation } from "@/hooks/use-translation";

export function HeaderSection() {
  const t = useTranslation();

  return (
    <section className="w-full pt-4 pb-6 max-w-6xl mx-auto px-4 mb-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="space-y-1.5 text-left">
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-2 tracking-tight bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
            {t("about.mainTitle")}
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground max-w-xl leading-relaxed">
            {t("about.subtitle")}
          </p>
        </div>

        {/* Sleek glassmorphic logo container */}
        <div className="p-2 rounded-2xl border border-white/20 dark:border-white/10 bg-white/45 dark:bg-zinc-900/35 backdrop-blur-md shadow-xs w-fit shrink-0">
          <Logo size="lg" className="w-10 h-10" />
        </div>
      </div>
    </section>
  );
}
