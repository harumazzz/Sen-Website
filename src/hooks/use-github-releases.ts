/**
 * GitHub Releases Hook
 * Custom hook for fetching GitHub release data using React Query
 * Matches the original Flutter app's download functionality
 */

"use client";

import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { fetchDefaultRelease, fetchReleaseByTag, fetchLatestRelease } from "@/lib/api/github";
import type { GitHubRelease } from "@/types";

export function useDefaultRelease(): UseQueryResult<GitHubRelease, Error> {
  return useQuery({
    queryKey: ["github-release", "default"],
    queryFn: fetchDefaultRelease,
    staleTime: 60 * 60 * 1000,
  });
}

export function useReleaseByTag(tag: string): UseQueryResult<GitHubRelease, Error> {
  return useQuery({
    queryKey: ["github-release", tag],
    queryFn: () => fetchReleaseByTag(tag),
    enabled: !!tag,
    staleTime: 60 * 60 * 1000,
  });
}

export function useLatestRelease(): UseQueryResult<GitHubRelease, Error> {
  return useQuery({
    queryKey: ["github-release", "latest"],
    queryFn: fetchLatestRelease,
    staleTime: 60 * 60 * 1000,
  });
}
