import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Download Sen - PvZ2 Modding Tool",
  description:
    "Download the latest version of Sen for Windows and Android. Free, open-source PvZ2 modding tool with powerful features.",
  keywords: [
    "Sen download",
    "PvZ2 mod tool",
    "Plants vs Zombies 2 modding",
    "free modding tool",
    "Windows",
    "Android",
  ],
  openGraph: {
    title: "Download Sen - PvZ2 Modding Tool",
    description: "Download the latest version of Sen for Windows and Android.",
    type: "website",
  },
};

export default function DownloadLayout({ children }: { children: React.ReactNode }) {
  return children;
}
