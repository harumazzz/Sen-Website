/**
 * GitHub API Response Types
 * These types match the GitHub REST API v3 responses and the original Flutter entities
 */

export interface GitHubRelease {
  url: string | null;
  assets_url: string | null;
  upload_url: string | null;
  html_url: string | null;
  id: number | null;
  author: GitHubAuthor | null;
  node_id: string | null;
  tag_name: string | null;
  target_commitish: string | null;
  name: string | null;
  draft: boolean | null;
  prerelease: boolean | null;
  created_at: string | null;
  published_at: string | null;
  assets: GitHubAsset[] | null;
  tarball_url: string | null;
  zipball_url: string | null;
  body: string | null;
}

export interface GitHubAsset {
  url: string | null;
  id: number | null;
  node_id: string | null;
  name: string | null;
  label: string | null;
  uploader: GitHubAuthor | null;
  content_type: string | null;
  state: string | null;
  size: number | null;
  download_count: number | null;
  created_at: string | null;
  updated_at: string | null;
  browser_download_url: string | null;
}

export interface GitHubAuthor {
  login: string | null;
  id: number | null;
  node_id: string | null;
  avatar_url: string | null;
  gravatar_id: string | null;
  url: string | null;
  html_url: string | null;
  followers_url: string | null;
  following_url: string | null;
  gists_url: string | null;
  starred_url: string | null;
  subscriptions_url: string | null;
  organizations_url: string | null;
  repos_url: string | null;
  events_url: string | null;
  received_events_url: string | null;
  type: string | null;
  user_view_type: string | null;
  site_admin: boolean | null;
}

/**
 * Parsed Download Information
 */
export interface DownloadInfo {
  id: string;
  platform: string;
  version: string;
  fileName: string;
  fileSize: number;
  downloadUrl: string;
  downloadCount: number;
  releaseDate: string;
  checksum?: string;
}

/**
 * Platform Types
 */
export type Platform = "windows" | "android" | "linux" | "macos";

/**
 * GitHub API Error Response
 */
export interface GitHubError {
  message: string;
  documentation_url?: string;
  status?: number;
}
