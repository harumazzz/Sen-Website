import "./globals.css";
import { geistMono, geistSans } from "@/constants/fonts";

interface RootLayoutProps {
  children: React.ReactNode;
  params?: { locale?: string };
}

export default function RootLayout({
  children,
}: Readonly<RootLayoutProps>) {
  return (
    <html suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
