"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { GitBranch } from "lucide-react";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/ui/logo";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { NAVIGATION_ITEMS } from "@/lib/routes";
import { useTranslation } from "@/hooks/use-translation";

export function AppBar() {
  const t = useTranslation();
  const pathname = usePathname();

  return (
    <div className="hidden lg:block fixed top-0 inset-x-0 z-50 pt-3 px-4 pointer-events-none">
      <header
        className={cn(
          "pointer-events-auto",
          "flex items-center h-14 px-5",
          "max-w-4xl mx-auto",
          "rounded-2xl",
          "bg-background/60 dark:bg-background/50",
          "backdrop-blur-xl backdrop-saturate-150",
          "border border-border/40 dark:border-white/10",
          "shadow-lg shadow-black/8 dark:shadow-black/30",
          "transition-all duration-300"
        )}
      >
        {/* ── Left: Logo + Brand ── */}
        <Link
          href="/"
          className="flex items-center gap-2.5 shrink-0 group"
          aria-label="Sen home"
        >
          <Logo size="sm" className="h-8 w-8 transition-transform duration-200 group-hover:scale-105" />
          <span className="font-bold text-lg tracking-tight text-foreground">Sen</span>
        </Link>

        {/* ── Center: Nav links ── */}
        <nav className="flex-1 flex items-center justify-center gap-1" aria-label="Main navigation">
          {NAVIGATION_ITEMS.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/" || pathname.endsWith("/")
                : pathname.includes(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium",
                  "transition-all duration-200",
                  isActive
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent/60"
                )}
              >
                {t(item.label)}
                {/* Active dot indicator */}
                {isActive && (
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* ── Right: GitHub + Theme Toggle ── */}
        <div className="flex items-center gap-1 shrink-0">
          <Button
            variant="subtle"
            size="icon"
            className="h-9 w-9"
            asChild
            aria-label="GitHub repository"
          >
            <a
              href="https://github.com/harumazzz/Sen.Environment"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitBranch className="h-4 w-4" />
            </a>
          </Button>
          <ThemeToggle />
        </div>
      </header>
    </div>
  );
}
