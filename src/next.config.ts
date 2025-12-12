import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./i18n.ts");

const nextConfig: NextConfig = {
  // React Compiler
  reactCompiler: true,

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
