"use client";

import { useState } from "react";
import { NAVIGATION_ITEMS } from "@/lib/routes";
import { NavItem } from "./nav-item";
import { Logo } from "@/components/ui/logo";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTranslation } from "@/hooks/use-translation";

export function NavDrawer() {
  const t = useTranslation();
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <aside
      className={cn(
        "hidden lg:flex lg:flex-col lg:fixed lg:inset-y-0 lg:border-r lg:bg-background/95 lg:backdrop-blur lg:supports-[backdrop-filter]:bg-background/60 transition-all duration-300",
        isCollapsed ? "lg:w-16" : "lg:w-64"
      )}
    >
      <div className="flex flex-col h-full">
        {/* Logo Section */}
        <div
          className={cn(
            "flex items-center gap-2 py-5 transition-all duration-300",
            isCollapsed ? "px-3 justify-center" : "px-6"
          )}
        >
          <Logo className="h-8 w-8 flex-shrink-0" />
          {!isCollapsed && <span className="font-bold text-xl">{t("common.sen")}</span>}
        </div>

        <Separator />

        {/* Navigation Items */}
        <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
          {NAVIGATION_ITEMS.map((item) => (
            <NavItem
              key={item.href}
              href={item.href}
              label={item.label}
              icon={item.icon}
              isCollapsed={isCollapsed}
            />
          ))}
        </nav>

        <Separator />

        {/* Toggle Button */}
        <div className={cn("py-2 transition-all duration-300", isCollapsed ? "px-3" : "px-6")}>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsCollapsed(!isCollapsed)}
            className={cn("transition-all duration-300", isCollapsed ? "w-full px-2" : "w-full")}
          >
            {isCollapsed ? (
              <ChevronRight className="h-4 w-4" />
            ) : (
              <>
                <ChevronLeft className="h-4 w-4 mr-2" />
                <span>{t("nav.collapse")}</span>
              </>
            )}
          </Button>
        </div>

        {/* Footer Section */}
        {!isCollapsed && (
          <div className="px-6 py-4">
            <p className="text-xs text-muted-foreground">{t("footer.copyright", { year: 2024 })}</p>
          </div>
        )}
      </div>
    </aside>
  );
}
