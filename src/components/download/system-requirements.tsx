"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Computer, Info } from "lucide-react";
import { cn } from "@/lib/utils";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useTranslation } from "@/hooks/use-translation";

type Platform = "Windows" | "Android";

interface RequirementRow {
  category: string;
  value: string;
  isHeader?: boolean;
}

export function SystemRequirements() {
  const t = useTranslation();
  const [selectedPlatform, setSelectedPlatform] = useState<Platform>("Windows");

  const windowsRequirements: RequirementRow[] = [
    { category: "OS", value: t("download.systemRequirements.windows.os"), isHeader: true },
    {
      category: t("download.systemRequirements.windows.runtime"),
      value: t("download.systemRequirements.windows.runtimeValue"),
    },
    {
      category: t("download.systemRequirements.windows.memory"),
      value: t("download.systemRequirements.windows.memoryValue"),
    },
    {
      category: t("download.systemRequirements.windows.storage"),
      value: t("download.systemRequirements.windows.storageValue"),
    },
  ];

  const androidRequirements: RequirementRow[] = [
    { category: "OS", value: t("download.systemRequirements.android.os"), isHeader: true },
    {
      category: t("download.systemRequirements.android.memory"),
      value: t("download.systemRequirements.android.memoryValue"),
    },
    {
      category: t("download.systemRequirements.android.storage"),
      value: t("download.systemRequirements.android.storageValue"),
    },
    {
      category: t("download.systemRequirements.android.permissions"),
      value: t("download.systemRequirements.android.permissionsValue"),
    },
  ];

  const requirements = selectedPlatform === "Windows" ? windowsRequirements : androidRequirements;

  return (
    <Card className="border border-border/50">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg">
          <div className="p-2 rounded-lg bg-primary/10">
            <Computer className="h-4 w-4 text-primary" />
          </div>
          {t("download.systemRequirements.title")}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Platform Tabs */}
        <div className="flex gap-2">
          <button
            onClick={() => setSelectedPlatform("Windows")}
            className={cn(
              "flex items-center gap-1.5 px-3 py-1.5 rounded-md border text-xs font-semibold transition-all duration-200",
              selectedPlatform === "Windows"
                ? "bg-primary/20 border-primary/40 text-primary dark:text-primary-foreground"
                : "border-border/50 hover:bg-muted hover:border-border"
            )}
          >
            <Computer className="h-3 w-3" />
            {t("download.platform.windows")}
          </button>
          <button
            onClick={() => setSelectedPlatform("Android")}
            className={cn(
              "flex items-center gap-1.5 px-3 py-1.5 rounded-md border text-xs font-semibold transition-all duration-200",
              selectedPlatform === "Android"
                ? "bg-primary/20 border-primary/40 text-primary dark:text-primary-foreground"
                : "border-border/50 hover:bg-muted hover:border-border"
            )}
          >
            <Computer className="h-3 w-3" />
            {t("download.platform.android")}
          </button>
        </div>

        {/* Requirements Table */}
        <div className="rounded-lg border border-border/50 overflow-hidden">
          <table className="w-full">
            <tbody>
              {requirements.map((req, index) => (
                <tr
                  key={index}
                  className={cn(
                    req.isHeader && "bg-muted/50",
                    index !== requirements.length - 1 && "border-b border-border/50"
                  )}
                >
                  <td className={cn("px-4 py-2 font-medium text-xs", req.isHeader && "font-bold")}>
                    {req.category}
                  </td>
                  <td
                    className={cn(
                      "px-4 py-2 text-foreground/90 text-xs",
                      req.isHeader && "font-bold"
                    )}
                  >
                    {req.value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Info Banner */}
        <Alert className="border-primary/20 bg-primary/10">
          <Info className="h-3 w-3 text-primary" />
          <AlertDescription className="text-foreground/80 text-xs">
            {t("download.systemRequirements.info")}
          </AlertDescription>
        </Alert>
      </CardContent>
    </Card>
  );
}
