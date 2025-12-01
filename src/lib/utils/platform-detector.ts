/**
 * Platform Detection Utilities
 */

export type Platform = "windows" | "android" | "linux" | "macos" | "unknown";

/**
 * Detects platform from file name
 */
export function detectPlatformFromFileName(fileName: string | null | undefined): Platform {
  if (!fileName) return "unknown";

  const lowerName = fileName.toLowerCase();

  if (lowerName.includes(".exe") || lowerName.includes("windows") || lowerName.includes("win")) {
    return "windows";
  }
  if (lowerName.includes(".apk") || lowerName.includes("android")) {
    return "android";
  }
  if (lowerName.includes(".appimage") || lowerName.includes("linux")) {
    return "linux";
  }
  if (lowerName.includes(".dmg") || lowerName.includes("macos") || lowerName.includes("mac")) {
    return "macos";
  }

  return "unknown";
}

/**
 * Gets platform display name
 */
export function getPlatformDisplayName(platform: Platform): string {
  const names: Record<Platform, string> = {
    windows: "Windows",
    android: "Android",
    linux: "Linux",
    macos: "macOS",
    unknown: "Unknown",
  };

  return names[platform] || "Unknown";
}

/**
 * Gets platform icon name (for lucide-react or custom icons)
 */
export function getPlatformIcon(platform: Platform): string {
  const icons: Record<Platform, string> = {
    windows: "monitor",
    android: "smartphone",
    linux: "terminal",
    macos: "laptop",
    unknown: "download",
  };

  return icons[platform] || "download";
}

/**
 * Detects user's current platform (client-side only)
 */
export function detectUserPlatform(): Platform {
  if (typeof window === "undefined") return "unknown";

  const userAgent = window.navigator.userAgent.toLowerCase();
  const platform = window.navigator.platform.toLowerCase();

  if (platform.includes("win") || userAgent.includes("windows")) {
    return "windows";
  }
  if (platform.includes("mac") || userAgent.includes("macintosh")) {
    return "macos";
  }
  if (platform.includes("linux") && !userAgent.includes("android")) {
    return "linux";
  }
  if (userAgent.includes("android")) {
    return "android";
  }

  return "unknown";
}
