import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";
import { existsSync } from "fs";
import { resolve } from "path";

// Determine the correct path for the i18n config based on the current working directory
const i18nConfigPath = existsSync(resolve("./i18n/request.ts")) 
  ? "./i18n/request.ts" 
  : "./src/i18n/request.ts";

const withNextIntl = createNextIntlPlugin(i18nConfigPath);

const nextConfig: NextConfig = {
  // Image optimization for Vercel
  images: {
    unoptimized: false,
  },

  // Performance optimizations
  experimental: {
    optimizePackageImports: ["lucide-react", "@radix-ui/react-icons"],
  },
};

export default withNextIntl(nextConfig);
