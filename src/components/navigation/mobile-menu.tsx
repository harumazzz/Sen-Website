"use client";

import { useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { NAVIGATION_ITEMS } from "@/lib/routes";
import { NavItem } from "./nav-item";
import { Logo } from "@/components/ui/logo";
import { Separator } from "@/components/ui/separator";

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="glass"
          size="icon"
          className="lg:hidden"
          aria-label="Toggle menu"
        >
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-64 p-0">
        <SheetHeader className="px-6 py-5 border-b">
          <SheetTitle className="flex items-center gap-2">
            <Logo className="h-8 w-8" />
            <span className="font-bold text-xl">Sen</span>
          </SheetTitle>
        </SheetHeader>

        <nav className="px-3 py-4 space-y-1">
          {NAVIGATION_ITEMS.map((item) => (
            <NavItem
              key={item.href}
              href={item.href}
              label={item.label}
              icon={item.icon}
              onClick={() => setOpen(false)}
            />
          ))}
        </nav>

        <Separator />

        <div className="px-6 py-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Sen. All rights reserved.
          </p>
        </div>
      </SheetContent>
    </Sheet>
  );
}
