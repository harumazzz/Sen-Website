"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";

const desktopDarkImages = [
  "/assets/dark/home.webp",
  "/assets/dark/launcher.webp",
  "/assets/dark/anim.webp",
  "/assets/dark/map.webp",
];

const desktopLightImages = [
  "/assets/light/home.webp",
  "/assets/light/launcher.webp",
  "/assets/light/anim.webp",
  "/assets/light/map.webp",
];

const mobileDarkImages = ["/assets/dark/phone.webp"];
const mobileLightImages = ["/assets/light/phone.webp"];

export function ImagePreview() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { theme, resolvedTheme } = useTheme();
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch by only rendering theme-dependent content after mount
  useEffect(() => {
    setMounted(true);
  }, []);

  // Detect mobile on client side
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 600);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Use default light theme images before mounting to prevent hydration mismatch
  const currentTheme = mounted ? (theme === "system" ? resolvedTheme : theme) : "light";
  const isDark = currentTheme === "dark";
  const images = isMobile
    ? isDark
      ? mobileDarkImages
      : mobileLightImages
    : isDark
      ? desktopDarkImages
      : desktopLightImages;

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev < images.length - 1 ? prev + 1 : prev));
  };

  return (
    <section className="w-full py-6 sm:py-8 lg:py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div
            className={cn(
              "relative rounded-xl overflow-hidden shadow-lg border border-border/20",
              isMobile ? "aspect-[9/16]" : "aspect-[16/9]"
            )}
          >
            {/* Main Image */}
            <div className="relative w-full h-full bg-muted">
              <Image
                src={images[currentIndex]}
                alt={`Screenshot ${currentIndex + 1}`}
                fill
                className="object-cover"
                priority={currentIndex === 0}
              />
            </div>

            {/* Navigation Buttons */}
            {images.length > 1 && (
              <>
                <Button
                  variant="ghost"
                  size="icon"
                  className={cn(
                    "absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 h-9 w-9 sm:h-10 sm:w-10 rounded-full bg-black/40 backdrop-blur-sm text-white hover:bg-black/60 transition-all duration-200 border border-white/20",
                    currentIndex === 0 && "opacity-30 cursor-not-allowed hover:bg-black/40"
                  )}
                  onClick={goToPrevious}
                  disabled={currentIndex === 0}
                >
                  <ChevronLeft className="h-6 w-6 sm:h-7 sm:w-7" />
                  <span className="sr-only">Previous image</span>
                </Button>

                <Button
                  variant="ghost"
                  size="icon"
                  className={cn(
                    "absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 h-9 w-9 sm:h-10 sm:w-10 rounded-full bg-black/40 backdrop-blur-sm text-white hover:bg-black/60 transition-all duration-200 border border-white/20",
                    currentIndex === images.length - 1 &&
                      "opacity-30 cursor-not-allowed hover:bg-black/40"
                  )}
                  onClick={goToNext}
                  disabled={currentIndex === images.length - 1}
                >
                  <ChevronRight className="h-6 w-6 sm:h-7 sm:w-7" />
                  <span className="sr-only">Next image</span>
                </Button>
              </>
            )}

            {/* Indicators */}
            {images.length > 1 && (
              <div className="absolute bottom-4 sm:bottom-5 left-1/2 -translate-x-1/2 flex gap-1.5 px-2.5 py-1.5 rounded-full bg-black/40 backdrop-blur-sm border border-white/20">
                {images.map((_, index) => (
                  <button
                    key={index}
                    className={cn(
                      "h-2 w-2 rounded-full transition-all duration-300",
                      index === currentIndex ? "bg-white w-6" : "bg-white/50 hover:bg-white/70"
                    )}
                    onClick={() => setCurrentIndex(index)}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
