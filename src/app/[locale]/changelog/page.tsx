"use client";

import { ChangelogList } from "@/components/changelog/changelog-list";
import { Footer } from "@/components/layout/footer";
import { useChangelogs } from "@/hooks/use-changelog";
import { useTranslation } from "@/hooks/use-translation";

export default function ChangelogPage() {
  const t = useTranslation();
  const { data: entries, isLoading, error, refetch } = useChangelogs();

  return (
    <div className="w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold mb-2">{t("changelog.title")}</h1>
          <p className="text-muted-foreground">{t("changelog.subtitle")}</p>
        </div>

        <ChangelogList
          entries={entries}
          isLoading={isLoading}
          error={error?.message}
          onRetry={() => refetch()}
        />
      </div>
      <Footer />
    </div>
  );
}
