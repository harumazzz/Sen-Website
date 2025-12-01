import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["en", "vi", "es", "ru", "pl", "nl", "de", "zh", "hi", "fr", "ms", "id"],
  defaultLocale: "en",
  localePrefix: "never",
  localeDetection: true,
});

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
