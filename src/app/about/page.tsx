import { HeaderSection } from "@/components/about/header-section";
import { InfoSections } from "@/components/about/info-sections";
import { Footer } from "@/components/layout/footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Sen - PvZ2 Modding Tool",
  description:
    "Learn about Sen, the all-in-one PvZ2 modding tool. Discover our features, supported modules, technology stack, and platform availability.",
  keywords: ["Sen about", "PvZ2 modding", "modding tool features", "game modding", "open source"],
  openGraph: {
    title: "About Sen - PvZ2 Modding Tool",
    description: "Learn about Sen, the all-in-one PvZ2 modding tool with powerful features.",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <div className="w-full min-h-screen flex flex-col">
      <div className="flex-1">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-12 lg:py-12">
          <HeaderSection />
          <div className="mt-2 sm:mt-2">
            <InfoSections />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
