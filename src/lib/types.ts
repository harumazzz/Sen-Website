/**
 * GitHub API Types
 */

export interface GitHubRelease {
  id: number;
  tag_name: string;
  name: string;
  body: string;
  draft: boolean;
  prerelease: boolean;
  created_at: string;
  published_at: string;
  assets: GitHubAsset[];
  author: GitHubAuthor;
  html_url: string;
}

export interface GitHubAsset {
  id: number;
  name: string;
  label: string | null;
  content_type: string;
  size: number;
  download_count: number;
  created_at: string;
  updated_at: string;
  browser_download_url: string;
  uploader: GitHubAuthor;
}

export interface GitHubAuthor {
  login: string;
  id: number;
  avatar_url: string;
  html_url: string;
}

/**
 * Changelog Types
 */

export interface Changelog {
  id: string;
  version: string;
  date: string;
  changes: ChangeItem[];
  title?: string;
  description?: string;
}

export interface ChangeItem {
  id: string;
  type: ChangeType;
  description: string;
}

export type ChangeType = "feature" | "fix" | "improvement" | "breaking" | "deprecated";

/**
 * Download Types
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
 * About/Info Types
 */

export interface InfoSection {
  id: string;
  title: string;
  description: string;
  bullets?: BulletPoint[];
  icon?: string;
}

export interface BulletPoint {
  id: string;
  text: string;
  icon?: string;
}

/**
 * Mod/Feature Types
 */

export interface ModInfo {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  featured?: boolean;
}

/**
 * Navigation Types
 */

export interface NavItem {
  label: string;
  href: string;
  icon?: string;
  external?: boolean;
}

/**
 * API Response Types
 */

export interface ApiResponse<T> {
  data: T;
  error?: ApiError;
  meta?: {
    page?: number;
    perPage?: number;
    total?: number;
  };
}

export interface ApiError {
  message: string;
  code?: string;
  status?: number;
}

/**
 * Component Props Types
 */

export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
}

/**
 * Theme Types
 */

export type Theme = "light" | "dark" | "system";

/**
 * Loading State Types
 */

export type LoadingState = "idle" | "loading" | "success" | "error";

/**
 * Utility Types
 */

export type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };
export type XOR<T, U> = T | U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : T | U;
