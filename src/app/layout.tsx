import { ThemeProvider } from "@/lib/providers/theme-provider";
import { QueryProvider } from "@/lib/providers/query-provider";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import "./globals.css";
import { geistMono, geistSans } from "@/constants/fonts";
import { Metadata } from "next";
import { AppShell } from "@/components/layout/app-shell";

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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const messages = await getMessages();

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
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
      </body>
    </html>
  );
}
