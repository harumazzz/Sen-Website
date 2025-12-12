/**
 * Route Configuration
 * Centralized routing configuration with metadata and navigation structure
 */

import { Home, Info, Download, Puzzle, FileText, FolderOpen, LucideIcon } from "lucide-react";

/**
 * Route paths
 */
export const ROUTES = {
  HOME: "/",
  ABOUT: "/about",
  DOWNLOAD: "/download",
  RESOURCES: "/resources",
  EXTENSION: "/extension",
  CHANGELOG: "/changelog",
} as const;

export type Route = (typeof ROUTES)[keyof typeof ROUTES];

/**
 * Navigation item type
 */
export interface NavigationItem {
  label: string;
  href: Route;
  icon: LucideIcon;
  description?: string;
}

/**
 * Navigation items with icons
 * Note: Labels are translation keys, not actual text
 */
export const NAVIGATION_ITEMS: NavigationItem[] = [
  {
    label: "nav.home",
    href: ROUTES.HOME,
    icon: Home,
    description: "nav.welcomeDescription",
  },
  {
    label: "nav.about",
    href: ROUTES.ABOUT,
    icon: Info,
    description: "nav.aboutDescription",
  },
  {
    label: "nav.download",
    href: ROUTES.DOWNLOAD,
    icon: Download,
    description: "nav.downloadDescription",
  },
  {
    label: "nav.resources",
    href: ROUTES.RESOURCES,
    icon: FolderOpen,
    description: "nav.resourcesDescription",
  },
  {
    label: "nav.changelog",
    href: ROUTES.CHANGELOG,
    icon: FileText,
    description: "nav.changelogDescription",
  },
];

/**
 * Route metadata for SEO
 */
export const ROUTE_METADATA = {
  [ROUTES.HOME]: {
    title: "Sen - PvZ2 Modding Tool",
    description:
      "Sen is what you need! The all-in-one tool for modding PvZ2. It's easy to use and has a lot of features to help you create your own mods.",
  },
  [ROUTES.ABOUT]: {
    title: "About Sen | Sen - PvZ2 Modding Tool",
    description:
      "Learn about Sen, its features, supported platforms, and the technology stack that powers this powerful PvZ2 modding tool.",
  },
  [ROUTES.DOWNLOAD]: {
    title: "Download Sen | Sen - PvZ2 Modding Tool",
    description:
      "Download Sen for Windows, Android, and other platforms. Get the latest version and start modding PvZ2 today!",
  },
  [ROUTES.RESOURCES]: {
    title: "Resources | Sen - PvZ2 Modding Tool",
    description:
      "Access and distribute worldmap resources for PvZ2 modding. Download assets from Google Drive or OneDrive for your modding projects.",
  },
  [ROUTES.EXTENSION]: {
    title: "Extensions | Sen - PvZ2 Modding Tool",
    description:
      "Explore Sen extensions and mods. Enhance your modding experience with powerful extensions and community-created content.",
  },
  [ROUTES.CHANGELOG]: {
    title: "Changelog | Sen - PvZ2 Modding Tool",
    description:
      "View the complete changelog of Sen. See all updates, new features, bug fixes, and improvements across versions.",
  },
} as const;

/**
 * Utility function to get route metadata
 */
export function getRouteMetadata(path: string) {
  return ROUTE_METADATA[path as Route] || ROUTE_METADATA[ROUTES.HOME];
}

/**
 * Utility function to check if a path is active
 */
export function isActiveRoute(currentPath: string, itemPath: Route): boolean {
  if (itemPath === ROUTES.HOME) {
    return currentPath === ROUTES.HOME;
  }
  return currentPath.startsWith(itemPath);
}
