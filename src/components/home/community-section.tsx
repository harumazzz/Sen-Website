"use client";

import Link from "next/link";
import { useTranslation } from "@/hooks/use-translation";
import { Button } from "@/components/ui/button";
import { MessageCircle, Github } from "lucide-react";
import { SOCIAL_LINKS } from "@/lib/constants";
import { FadeIn } from "@/components/animations/fade-in";

export function CommunitySection() {
  const t = useTranslation();
  
  // Use the active Discord link from HeroSection
  const discordUrl = "https://discord.gg/DxDmVDMdrq";
  const githubUrl = SOCIAL_LINKS.GITHUB;

  return (
    <section className="w-full py-16 sm:py-24 border-t border-border/40 bg-gradient-to-br from-primary/5 via-transparent to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn delay={0.1} className="max-w-4xl mx-auto rounded-3xl border border-border/60 bg-background/40 backdrop-blur-md p-8 sm:p-12 text-center relative overflow-hidden shadow-lg">
          {/* Decorative background glow elements */}
          <div className="absolute -top-24 -left-24 w-48 h-48 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-48 h-48 rounded-full bg-primary/15 blur-3xl pointer-events-none" />

          <div className="flex flex-col items-center gap-6 relative z-10">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
              {t("home.community.title")}
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed max-w-2xl">
              {t("home.community.description")}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mt-4">
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto gap-2.5 font-semibold text-primary-foreground shadow-md hover:shadow-lg transition-all"
              >
                <Link href={discordUrl} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-5 w-5" />
                  {t("home.community.discordButton")}
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="w-full sm:w-auto gap-2.5 font-semibold border-border/80 hover:bg-muted/80 transition-all"
              >
                <Link href={githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                  {t("home.community.githubButton")}
                </Link>
              </Button>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
