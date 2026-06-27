"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { NAVIGATION_ITEMS } from "@/lib/routes";
import { useTranslation } from "@/hooks/use-translation";

export function BottomNav() {
  const t = useTranslation();
  const pathname = usePathname();

  return (
    <div
      className={cn(
        "lg:hidden",
        "fixed bottom-0 inset-x-0 z-50",
        "pb-[calc(env(safe-area-inset-bottom)+0.75rem)] px-4",
        "pointer-events-none"
      )}
    >
      <nav
        aria-label="Mobile navigation"
        className={cn(
          "pointer-events-auto",
          "flex items-stretch h-16",
          "max-w-sm mx-auto",
          "rounded-2xl",
          "bg-background/65 dark:bg-background/55",
          "backdrop-blur-xl backdrop-saturate-150",
          "border border-border/40 dark:border-white/10",
          "shadow-lg shadow-black/10 dark:shadow-black/40",
          "overflow-hidden"
        )}
      >
        {NAVIGATION_ITEMS.map((item) => {
          const Icon = item.icon;
          const isActive =
            item.href === "/"
              ? pathname === "/" || pathname.endsWith("/")
              : pathname.includes(item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex-1 flex flex-col items-center justify-center gap-0.5 relative",
                "transition-all duration-200",
                isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
              )}
              aria-current={isActive ? "page" : undefined}
            >
              {/* Pink top-line active indicator */}
              <span
                className={cn(
                  "absolute top-0 inset-x-3 h-[2px] rounded-b-full",
                  "bg-primary transition-all duration-300",
                  isActive ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
                )}
              />

              {/* Icon */}
              <Icon
                className={cn(
                  "h-5 w-5 transition-transform duration-200",
                  isActive && "scale-110"
                )}
                strokeWidth={isActive ? 2.5 : 1.8}
              />

              {/* Label */}
              <span
                className={cn(
                  "text-[10px] font-medium leading-none",
                  isActive && "font-semibold"
                )}
              >
                {t(item.label)}
              </span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
