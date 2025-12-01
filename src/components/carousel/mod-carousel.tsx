"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { CarouselIndicators } from "./carousel-indicators";
import type { ModInfo } from "@/lib/types";

interface ModCarouselProps {
  mods: ModInfo[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
  className?: string;
}

export function ModCarousel({
  mods,
  autoPlay = true,
  autoPlayInterval = 5000,
  className,
}: ModCarouselProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Update current slide when carousel scrolls
  useEffect(() => {
    if (!api) return;

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  // Auto-play functionality
  useEffect(() => {
    if (!api || !autoPlay || isPaused) return;

    const interval = setInterval(() => {
      if (api.canScrollNext()) {
        api.scrollNext();
      } else {
        api.scrollTo(0);
      }
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [api, autoPlay, autoPlayInterval, isPaused]);

  const handleIndicatorClick = useCallback(
    (index: number) => {
      api?.scrollTo(index);
    },
    [api]
  );

  if (mods.length === 0) {
    return null;
  }

  return (
    <div
      className={cn("w-full", className)}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {mods.map((mod) => (
            <CarouselItem key={mod.id} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <CardContent className="p-0">
                    <div className="aspect-video relative overflow-hidden bg-muted">
                      {mod.imageUrl ? (
                        <Image
                          src={mod.imageUrl}
                          alt={mod.name}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="object-cover transition-transform duration-500 hover:scale-110"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                          No Image
                        </div>
                      )}
                      {mod.featured && (
                        <div className="absolute top-2 right-2 bg-primary text-primary-foreground text-xs font-medium px-2 py-1 rounded-full">
                          Featured
                        </div>
                      )}
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-lg mb-1">{mod.name}</h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {mod.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {mods.length > 1 && (
          <>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </>
        )}
      </Carousel>

      {mods.length > 1 && (
        <CarouselIndicators
          total={mods.length}
          current={current}
          onSelect={handleIndicatorClick}
          className="mt-6"
        />
      )}
    </div>
  );
}
