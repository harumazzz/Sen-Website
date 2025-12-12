import { ThemeProvider } from "@/lib/providers/theme-provider";
import { QueryProvider } from "@/lib/providers/query-provider";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Metadata } from "next";
import { AppShell } from "@/components/layout/app-shell";
import { notFound } from "next/navigation";

const locales = [
  "en",
  "vi",
  "es",
  "ru",
  "pl",
  "nl",
  "de",
  "zh",
  "hi",
  "fr",
  "ms",
  "id",
];

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export const metadata: Metadata = {
  title: "Sen - PvZ2 Modding Tool",
  description:
    "Sen is what you need! The all-in-one tool for modding PvZ2. It's easy to use and has a lot of features to help you create your own mods.",
  keywords: ["Sen", "PvZ2", "modding", "Plants vs Zombies 2", "game modding"],
  authors: [{ name: "harumazzz" }],
  creator: "harumazzz",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Sen - PvZ2 Modding Tool",
    description: "Sen is what you need! The all-in-one tool for modding PvZ2.",
    siteName: "Sen",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sen - PvZ2 Modding Tool",
    description: "Sen is what you need! The all-in-one tool for modding PvZ2.",
  },
};

export default async function LocaleLayout({ children, params }: Props) {
  // Await the params since they're a Promise in Next.js 15
  const { locale } = await params;

  // Ensure that the incoming `locale` is valid
  if (!locales.includes(locale)) {
    notFound();
  }

  const messages = await getMessages({ locale });

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <NextIntlClientProvider messages={messages}>
        <QueryProvider>
          <AppShell>{children}</AppShell>
        </QueryProvider>
      </NextIntlClientProvider>
    </ThemeProvider>
  );
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}
