/**
 * File Size Utilities
 * Matches the Flutter extension: GitHubExtension.fileSize()
 */

/**
 * Formats bytes to human-readable file size
 * @param bytes - Size in bytes
 * @returns Formatted string (e.g., "1.50MB")
 */
export function formatFileSize(bytes: number | null | undefined): string {
  if (!bytes || bytes === 0) return "0B";

  const suffixes = ["B", "KB", "MB", "GB", "TB"];
  const i = Math.floor(Math.log(bytes) / Math.log(1024));
  const size = (bytes / Math.pow(1024, i)).toFixed(2);

  return `${size}${suffixes[i]}`;
}

/**
 * Converts bytes to megabytes
 */
export function bytesToMB(bytes: number): number {
  return bytes / (1024 * 1024);
}

/**
 * Converts bytes to gigabytes
 */
export function bytesToGB(bytes: number): number {
  return bytes / (1024 * 1024 * 1024);
}
