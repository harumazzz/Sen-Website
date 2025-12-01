"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Download } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTranslation } from "@/hooks/use-translation";

interface Step {
  number: string;
  title: string;
  description: string;
  isLast?: boolean;
}

export function InstallationGuide() {
  const t = useTranslation();

  const installationSteps: Step[] = [
    {
      number: "1",
      title: t("download.installation.step1.title"),
      description: t("download.installation.step1.description"),
    },
    {
      number: "2",
      title: t("download.installation.step2.title"),
      description: t("download.installation.step2.description"),
    },
    {
      number: "3",
      title: t("download.installation.step3.title"),
      description: t("download.installation.step3.description"),
    },
    {
      number: "4",
      title: t("download.installation.step4.title"),
      description: t("download.installation.step4.description"),
      isLast: true,
    },
  ];

  return (
    <Card className="border border-border/50">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg">
          <div className="p-2 rounded-lg bg-primary/10">
            <Download className="h-4 w-4 text-primary" />
          </div>
          {t("download.installation.title")}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-0">
          {installationSteps.map((step, stepIndex) => (
            <div key={step.number} className="flex gap-4">
              {/* Step Number with Connector */}
              <div className="flex flex-col items-center">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-gradient-to-br from-primary/30 to-primary/20 text-primary font-bold text-sm border border-primary/30">
                  {step.number}
                </div>
                {!step.isLast && <div className="h-16 w-0.5 bg-primary/20 my-2" />}
              </div>

              {/* Step Content */}
              <div className={cn("flex-1 pb-8", step.isLast && "pb-0")}>
                <h3 className="font-semibold text-sm text-foreground mb-1">{step.title}</h3>
                <p className="text-xs text-muted-foreground/90 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
