import { HeroSection } from "@/components/home/hero-section";
import { FeaturesSection } from "@/components/home/features-section";
import { ImagePreview } from "@/components/home/image-preview";
import { Footer } from "@/components/layout/footer";

export default function Home() {
  return (
    <div className="w-full">
      <HeroSection />
      <FeaturesSection />
      <ImagePreview />
      <Footer />
    </div>
  );
}
