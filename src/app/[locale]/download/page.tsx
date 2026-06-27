"use client";

import { DownloadList } from "@/components/download/download-list";
import { SystemRequirements } from "@/components/download/system-requirements";
import { InstallationGuide } from "@/components/download/installation-guide";
import { Footer } from "@/components/layout/footer";
import { useDefaultRelease } from "@/hooks/use-github-releases";
import { useTranslation } from "@/hooks/use-translation";

export default function DownloadPage() {
  const t = useTranslation();
  const { data: release, isLoading, error } = useDefaultRelease();

  // Transform GitHub release data to match DownloadList props
  const assets = release?.assets
    ?.filter((asset) => asset.name && asset.browser_download_url)
    .map((asset) => ({
      name: asset.name!,
      browserDownloadUrl: asset.browser_download_url!,
      size: asset.size || 0,
      downloadCount: asset.download_count || 0,
      createdAt: asset.created_at || new Date().toISOString(),
      updatedAt: asset.updated_at || new Date().toISOString(),
    }));

  return (
    <div className="w-full min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 max-w-6xl">
        <div className="mb-10 text-center sm:text-left">
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-3 tracking-tight bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
            {t("download.title")}
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground max-w-xl">
            {t("download.subtitle")}
          </p>
        </div>

        <div className="space-y-12">
          <DownloadList
            assets={assets}
            version={release?.tag_name || "LTS"}
            isLoading={isLoading}
            error={error?.message}
          />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-6 h-full">
              <SystemRequirements />
            </div>
            <div className="lg:col-span-6 h-full">
              <InstallationGuide />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
