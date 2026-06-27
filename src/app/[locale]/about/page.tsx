import { HeaderSection } from "@/components/about/header-section";
import { InfoSections } from "@/components/about/info-sections";
import { Footer } from "@/components/layout/footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Sen - PvZ2 Modding Tool",
  description:
    "Discover the mission, core pillars, and design philosophy behind Sen - the visual all-in-one PvZ2 modding tool.",
  keywords: ["About Sen", "PvZ2 modding", "modding tool mission", "game modding community"],
  openGraph: {
    title: "About Sen - PvZ2 Modding Tool",
    description: "Discover the mission, core pillars, and design philosophy behind Sen.",
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
