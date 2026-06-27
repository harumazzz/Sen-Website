"use client";

import Link from "next/link";
import { Download, MessageCircle } from "lucide-react";
import { Logo } from "@/components/ui/logo";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/hooks/use-translation";
import { Float } from "@/components/animations/scroll-reveal";

export function HeroSection() {
  const t = useTranslation();

  const handleDiscordClick = () => {
    window.open("https://discord.gg/DxDmVDMdrq", "_blank", "noopener,noreferrer");
  };

  return (
    <section className="relative w-full pt-16 pb-12 sm:pt-24 sm:pb-16 overflow-hidden">
      {/* Premium radial glow behind hero */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] rounded-full bg-primary/10 blur-[80px] sm:blur-[120px] pointer-events-none -z-10" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto gap-6">

          {/* Logo — floating glassmorphism */}
          <Float duration={4} offset={6}>
            <div className="p-3.5 rounded-2xl bg-background/40 backdrop-blur-md border border-primary/20 shadow-xl shadow-primary/5 hover:border-primary/40 transition-colors duration-300">
              <Logo size="xl" className="w-14 h-14 sm:w-16 sm:h-16" />
            </div>
          </Float>

          {/* Headline with premium gradient */}
          <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold tracking-tight leading-[1.2] text-foreground bg-gradient-to-r from-foreground via-foreground/95 to-primary/80 bg-clip-text text-transparent">
            {t("hero.tagline")}
          </h1>

          {/* Description */}
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-lg">
            {t("hero.description")}
          </p>

          {/* CTA Buttons — full-width on mobile, auto on desktop, equal height */}
          <div className="w-full flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 pt-2">
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto gap-2.5 font-semibold shadow-md shadow-primary/10 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
            >
              <Link href="/download">
                <Download className="h-4 w-4" />
                {t("hero.downloadButton")}
              </Link>
            </Button>

            <Button
              variant="outline"
              size="lg"
              onClick={handleDiscordClick}
              className="w-full sm:w-auto gap-2.5 font-semibold bg-background/30 backdrop-blur-sm border-border/80 hover:bg-muted/80 transition-all"
            >
              <MessageCircle className="h-4 w-4" />
              {t("hero.discordButton")}
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
}

