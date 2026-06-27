"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { useTranslation } from "@/hooks/use-translation";

interface NavItemProps {
  href: string;
  label: string;
  icon?: LucideIcon;
  onClick?: () => void;
  className?: string;
}

export function NavItem({ href, label, icon: Icon, onClick, className }: NavItemProps) {
  const t = useTranslation();
  const pathname = usePathname();
  const isActive =
    href === "/" ? pathname === "/" || pathname.endsWith("/") : pathname.includes(href);

  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        "flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200",
        "hover:bg-primary/10 hover:text-primary",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        isActive && "bg-primary/12 text-primary font-semibold",
        className
      )}
    >
      {Icon && <Icon className="h-5 w-5 flex-shrink-0" />}
      <span>{t(label)}</span>
    </Link>
  );
}
