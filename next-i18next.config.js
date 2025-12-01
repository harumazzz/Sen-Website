module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'vi', 'es', 'ru', 'pl', 'nl', 'de', 'zh', 'hi', 'fr', 'ms', 'id'],
    localeDetection: true,
  },
  localePath: typeof window === 'undefined'
    ? require('path').resolve('./public/locales')
    : '/locales',
  reloadOnPrerender: process.env.NODE_ENV === 'development',
};
