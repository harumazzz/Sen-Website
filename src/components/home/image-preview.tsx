"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
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
  const [selectedIndex, setSelectedIndex] = useState(0);
  const { resolvedTheme } = useTheme();
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    dragFree: false,
    align: "center",
  });

  // Single mount effect — matchMedia instead of resize listener
  useEffect(() => {
    setMounted(true);
    const mq = window.matchMedia("(max-width: 599px)");
    setIsMobile(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  // Keep selectedIndex in sync with Embla
  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((i: number) => emblaApi?.scrollTo(i), [emblaApi]);

  const isDark = mounted ? resolvedTheme === "dark" : false;
  const images = isMobile
    ? isDark ? mobileDarkImages : mobileLightImages
    : isDark ? desktopDarkImages : desktopLightImages;

  // Reinitialize Embla when image list changes
  useEffect(() => {
    emblaApi?.reInit();
  }, [emblaApi, images]);

  const canPrev = selectedIndex > 0;
  const canNext = selectedIndex < images.length - 1;
  const showNav = images.length > 1;

  return (
    <section className="relative w-full py-8 sm:py-12 lg:py-16 overflow-hidden">
      {/* Dynamic backlighting glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[600px] lg:w-[800px] h-[200px] sm:h-[300px] lg:h-[400px] rounded-full bg-primary/10 blur-[80px] lg:blur-[120px] pointer-events-none -z-10 scale-95" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Glassmorphic border container */}
          <div className="relative rounded-2xl p-1.5 sm:p-2.5 bg-background/30 backdrop-blur-md border border-border/80 shadow-2xl shadow-primary/5">
            <div
              className={cn(
                "relative rounded-xl overflow-hidden border border-border/40 bg-muted",
                isMobile ? "aspect-[9/16]" : "aspect-[16/9]"
              )}
            >
              {/* Embla viewport */}
              <div ref={emblaRef} className="absolute inset-0 overflow-hidden">
                <div className="flex h-full">
                  {images.map((src, i) => (
                    <div key={src} className="relative flex-[0_0_100%] h-full">
                      <Image
                        src={src}
                        alt={`Screenshot ${i + 1}`}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1024px"
                        className="object-cover"
                        priority={i === 0}
                        draggable={false}
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Prev button — frosted glass */}
              {showNav && (
                <button
                  onClick={scrollPrev}
                  disabled={!canPrev}
                  aria-label="Previous image"
                  className={cn(
                    "absolute left-4 top-1/2 -translate-y-1/2 z-10",
                    "flex items-center justify-center h-10 w-10 rounded-full",
                    "bg-background/40 backdrop-blur-md border border-primary/20",
                    "text-foreground shadow-lg transition-all duration-200",
                    "hover:bg-background/80 hover:border-primary/40 hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                    !canPrev ? "opacity-20 cursor-not-allowed" : "opacity-100"
                  )}
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
              )}

              {/* Next button — frosted glass */}
              {showNav && (
                <button
                  onClick={scrollNext}
                  disabled={!canNext}
                  aria-label="Next image"
                  className={cn(
                    "absolute right-4 top-1/2 -translate-y-1/2 z-10",
                    "flex items-center justify-center h-10 w-10 rounded-full",
                    "bg-background/40 backdrop-blur-md border border-primary/20",
                    "text-foreground shadow-lg transition-all duration-200",
                    "hover:bg-background/80 hover:border-primary/40 hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                    !canNext ? "opacity-20 cursor-not-allowed" : "opacity-100"
                  )}
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              )}

              {/* Dot indicators */}
              {showNav && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex items-center gap-1.5 bg-background/30 backdrop-blur-sm px-3 py-1.5 rounded-full border border-border/20">
                  {images.map((_, i) => (
                    <button
                      key={i}
                      aria-label={`Go to screenshot ${i + 1}`}
                      onClick={() => scrollTo(i)}
                      className={cn(
                        "h-1.5 rounded-full transition-all duration-200",
                        i === selectedIndex
                          ? "w-5 bg-foreground"
                          : "w-1.5 bg-foreground/40 hover:bg-foreground/75"
                      )}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
