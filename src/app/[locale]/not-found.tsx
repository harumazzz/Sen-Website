"use client";

import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";
import { Home, ArrowLeft } from "lucide-react";
import { ROUTES } from "@/lib/routes";
import { useTranslation } from "@/hooks/use-translation";

export default function NotFound() {
  const t = useTranslation();

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <Card className="max-w-2xl w-full">
        <CardContent className="pt-12 pb-12 text-center space-y-6">
          {/* 404 Icon */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="text-9xl font-bold text-primary/10 select-none">
                404
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-6xl">🔍</div>
              </div>
            </div>
          </div>

          {/* Title */}
          <div className="space-y-2">
            <Heading level={"h1"} className="text-3xl md:text-4xl">
              {t("notFound.title")}
            </Heading>
            <p className="text-muted-foreground text-lg">
              {t("notFound.description")}
            </p>
          </div>

          {/* Suggestions */}
          <div className="pt-4 space-y-3">
            <p className="text-sm text-muted-foreground">
              {t("notFound.suggestions")}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button variant="glass" asChild size="lg" className="gap-2">
                <Link href={ROUTES.HOME}>
                  <Home className="h-4 w-4" />
                  {t("notFound.goHome")}
                </Link>
              </Button>
              <Button variant="glass" asChild size="lg" className="gap-2">
                <Link href={ROUTES.DOWNLOAD}>
                  <ArrowLeft className="h-4 w-4" />
                  {t("notFound.visitDownloads")}
                </Link>
              </Button>
            </div>
          </div>

          {/* Additional Help */}
          <div className="pt-6 border-t">
            <p className="text-sm text-muted-foreground">
              {t("notFound.helpText")}{" "}
              <Link
                href={ROUTES.ABOUT}
                className="text-primary hover:underline"
              >
                {t("notFound.aboutPage")}
              </Link>{" "}
              {t("notFound.or")}{" "}
              <Link
                href={ROUTES.CHANGELOG}
                className="text-primary hover:underline"
              >
                {t("notFound.changelogLink")}
              </Link>
              .
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
