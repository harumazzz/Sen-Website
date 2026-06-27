import { HeroSection } from "@/components/home/hero-section";
import { ImagePreview } from "@/components/home/image-preview";
import { FeaturesSection } from "@/components/home/features-section";
import { FaqSection } from "@/components/home/faq-section";
import { CommunitySection } from "@/components/home/community-section";
import { Footer } from "@/components/layout/footer";

export default function Home() {
  return (
    <div className="w-full">
      <HeroSection />
      <ImagePreview />
      <FeaturesSection />
      <FaqSection />
      <CommunitySection />
      <Footer />
    </div>
  );
}

