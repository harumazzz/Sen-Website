export const API_ENDPOINTS = {
  GITHUB_API: "https://api.github.com",
  GITHUB_REPO: "Haruma-VN/Sen.Environment",
  DEFAULT_RELEASE_TAG: "release",
} as const;

export const SITE_CONFIG = {
  name: process.env.NEXT_PUBLIC_SITE_NAME || "Sen",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  description: "Sen - A powerful tool for your needs",
  author: "harumazzz",
} as const;

export const ROUTES = {
  HOME: "/",
  ABOUT: "/about",
  DOWNLOAD: "/download",
  EXTENSION: "/extension",
} as const;

export const NAV_ITEMS = [
  { label: "Home", href: ROUTES.HOME },
  { label: "About", href: ROUTES.ABOUT },
  { label: "Download", href: ROUTES.DOWNLOAD },
  { label: "Extension", href: ROUTES.EXTENSION },
] as const;

export const SOCIAL_LINKS = {
  GITHUB: "https://github.com/harumazzz/Sen.Environment",
  DISCORD: "#",
  TWITTER: "#",
} as const;

export const EXTERNAL_LINKS = {
  DOCUMENTATION: "#",
  ISSUES: "https://github.com/harumazzz/Sen.Environment/issues",
  RELEASES: "https://github.com/harumazzz/Sen.Environment/releases",
} as const;

export const PLATFORMS = {
  WINDOWS: "windows",
  ANDROID: "android",
  LINUX: "linux",
  MACOS: "macos",
} as const;

export type Platform = (typeof PLATFORMS)[keyof typeof PLATFORMS];

export const FILE_EXTENSIONS = {
  WINDOWS: ".exe",
  ANDROID: ".apk",
  LINUX: ".AppImage",
  MACOS: ".dmg",
} as const;

export const ANIMATION_DURATION = {
  FAST: 150,
  NORMAL: 300,
  SLOW: 500,
} as const;

export const BREAKPOINTS = {
  SM: 640,
  MD: 768,
  LG: 1024,
  XL: 1280,
  "2XL": 1536,
} as const;
