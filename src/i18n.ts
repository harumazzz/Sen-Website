import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async ({ locale }) => {
  const normalizedLocale = locale || "en";

  return {
    messages: (await import(`../public/locales/${normalizedLocale}/common.json`)).default,
    locale: normalizedLocale,
  };
});
