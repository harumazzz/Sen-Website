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
    <div className="w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold mb-2">{t("download.title")}</h1>
          <p className="text-muted-foreground">{t("download.subtitle")}</p>
        </div>

        <div className="space-y-8">
          <DownloadList
            assets={assets}
            version={release?.tag_name || "LTS"}
            isLoading={isLoading}
            error={error?.message}
          />
          <SystemRequirements />
          <InstallationGuide />
        </div>
      </div>
      <Footer />
    </div>
  );
}
