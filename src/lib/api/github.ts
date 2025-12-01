import { API_ENDPOINTS } from "@/lib/constants";
import type { GitHubRelease } from "@/types";

export async function fetchReleaseByTag(tag: string): Promise<GitHubRelease> {
  const url = `${API_ENDPOINTS.GITHUB_API}/repos/${API_ENDPOINTS.GITHUB_REPO}/releases/tags/${tag}`;

  try {
    const response = await fetch(url, {
      headers: {
        Accept: "application/vnd.github+json",
        "X-GitHub-Api-Version": "2022-11-28",
      },
      next: {
        revalidate: 3600,
      },
    });
    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status} ${response.statusText}`);
    }
    const data = await response.json();
    return data as GitHubRelease;
  } catch (error) {
    console.error(`Error fetching release ${tag}:`, error);
    throw error;
  }
}

export async function fetchDefaultRelease(): Promise<GitHubRelease> {
  return fetchReleaseByTag("release");
}

export async function fetchLatestRelease(): Promise<GitHubRelease> {
  const url = `${API_ENDPOINTS.GITHUB_API}/repos/${API_ENDPOINTS.GITHUB_REPO}/releases/latest`;

  try {
    const response = await fetch(url, {
      headers: {
        Accept: "application/vnd.github+json",
        "X-GitHub-Api-Version": "2022-11-28",
      },
      next: {
        revalidate: 3600,
      },
    });

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return data as GitHubRelease;
  } catch (error) {
    console.error("Error fetching latest release:", error);
    throw error;
  }
}

export function getTotalDownloadCount(release: GitHubRelease): number {
  if (!release.assets) return 0;
  return release.assets.reduce((total, asset) => total + (asset?.download_count || 0), 0);
}
