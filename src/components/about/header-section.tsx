"use client";

import { Logo } from "@/components/ui/logo";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { useTranslation } from "@/hooks/use-translation";

export function HeaderSection() {
  const t = useTranslation();
  const { theme, resolvedTheme } = useTheme();
  const currentTheme = theme === "system" ? resolvedTheme : theme;
  const isDark = currentTheme === "dark";

  return (
    <section className="w-full py-8 sm:py-10 lg:py-12">
      <div className="flex flex-col items-center justify-center text-center space-y-3 sm:space-y-4">
        {/* Logo */}
        <div className="flex justify-center">
          <div className="p-3 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 backdrop-blur-sm">
            <Logo size="xl" className="w-16 h-16 sm:w-20 sm:h-20" />
          </div>
        </div>

        {/* Title */}
        <div className="space-y-2 max-w-3xl px-4">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">
            {t("about.mainTitle")}
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
            {t("about.subtitle")}
          </p>
        </div>
      </div>
    </section>
  );
}
