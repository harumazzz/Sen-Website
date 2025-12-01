"use client";

import { cn } from "@/lib/utils";

interface CarouselIndicatorsProps {
  total: number;
  current: number;
  onSelect?: (index: number) => void;
  className?: string;
}

export function CarouselIndicators({
  total,
  current,
  onSelect,
  className,
}: CarouselIndicatorsProps) {
  return (
    <div className={cn("flex items-center justify-center gap-2", className)}>
      {Array.from({ length: total }).map((_, index) => (
        <button
          key={index}
          onClick={() => onSelect?.(index)}
          aria-label={`Go to slide ${index + 1}`}
          className={cn(
            "h-2 rounded-full transition-all duration-300",
            current === index
              ? "w-6 bg-primary"
              : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
          )}
        />
      ))}
    </div>
  );
}
