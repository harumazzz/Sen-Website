"use client";

import { useTranslation } from "@/hooks/use-translation";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { StaggerContainer, StaggerItem } from "@/components/animations/fade-in";
import { HoverScale } from "@/components/animations/scroll-reveal";
import { Map, Sparkles, Terminal, Package, RefreshCw, Monitor } from "lucide-react";

export function FeaturesSection() {
  const t = useTranslation();

  const features = [
    {
      icon: Map,
      title: t("home.features.mapEditor.title"),
      description: t("home.features.mapEditor.description"),
      color: "from-emerald-500/20 to-teal-500/10 text-emerald-500",
    },
    {
      icon: Sparkles,
      title: t("home.features.animEditor.title"),
      description: t("home.features.animEditor.description"),
      color: "from-purple-500/20 to-indigo-500/10 text-purple-500",
    },
    {
      icon: Terminal,
      title: t("home.features.scripting.title"),
      description: t("home.features.scripting.description"),
      color: "from-blue-500/20 to-sky-500/10 text-blue-500",
    },
    {
      icon: Package,
      title: t("home.features.modManager.title"),
      description: t("home.features.modManager.description"),
      color: "from-amber-500/20 to-orange-500/10 text-amber-500",
    },
    {
      icon: RefreshCw,
      title: t("home.features.versionManager.title"),
      description: t("home.features.versionManager.description"),
      color: "from-rose-500/20 to-pink-500/10 text-rose-500",
    },
    {
      icon: Monitor,
      title: t("home.features.crossPlatform.title"),
      description: t("home.features.crossPlatform.description"),
      color: "from-cyan-500/20 to-blue-500/10 text-cyan-500",
    },
  ];

  return (
    <section className="w-full py-16 sm:py-24 border-t border-border/40 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto gap-4 mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground bg-gradient-to-r from-foreground via-foreground/95 to-foreground/80 bg-clip-text">
            {t("home.features.title")}
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed max-w-xl">
            {t("home.features.subtitle")}
          </p>
        </div>

        <StaggerContainer staggerDelay={0.08} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <StaggerItem key={i}>
                <HoverScale scale={1.02} className="h-full">
                  <Card className="h-full border border-border/50 bg-background/50 hover:bg-background/80 hover:border-primary/20 hover:shadow-md transition-all duration-300">
                    <CardHeader className="space-y-4">
                      <div className={`p-3 rounded-2xl bg-gradient-to-br ${feature.color} w-fit shrink-0 shadow-inner`}>
                        <Icon className="h-6 w-6" />
                      </div>
                      <CardTitle className="text-lg font-bold text-foreground">
                        {feature.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-sm leading-relaxed text-muted-foreground">
                        {feature.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </HoverScale>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
