"use client";

import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { fetchChangelogs, fetchChangelogByVersion } from "@/lib/api/changelog";
import type { Changelog } from "@/types";

export function useChangelogs(): UseQueryResult<Changelog[], Error> {
  return useQuery({
    queryKey: ["changelogs"],
    queryFn: fetchChangelogs,
    staleTime: 30 * 60 * 1000,
  });
}

export function useChangelogByVersion(version: string): UseQueryResult<Changelog | null, Error> {
  return useQuery({
    queryKey: ["changelog", version],
    queryFn: () => fetchChangelogByVersion(version),
    enabled: !!version,
    staleTime: 30 * 60 * 1000,
  });
}
