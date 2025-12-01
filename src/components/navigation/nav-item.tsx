"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { useTranslation } from "@/hooks/use-translation";

interface NavItemProps {
  href: string;
  label: string;
  icon?: LucideIcon;
  onClick?: () => void;
  className?: string;
  isCollapsed?: boolean;
}

export function NavItem({
  href,
  label,
  icon: Icon,
  onClick,
  className,
  isCollapsed,
}: NavItemProps) {
  const t = useTranslation();
  const pathname = usePathname();
  const isActive = pathname === href;

  // Translate the label
  const translatedLabel = t(label);

  const content = (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        "flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200",
        "hover:bg-accent hover:text-accent-foreground",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        isActive && "bg-accent text-accent-foreground font-medium",
        isCollapsed && "justify-center px-2",
        className
      )}
    >
      {Icon && <Icon className="h-5 w-5 flex-shrink-0" />}
      {!isCollapsed && <span>{translatedLabel}</span>}
    </Link>
  );

  if (isCollapsed) {
    return (
      <TooltipProvider delayDuration={0}>
        <Tooltip>
          <TooltipTrigger asChild>{content}</TooltipTrigger>
          <TooltipContent side="right">
            <p>{translatedLabel}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
  }

  return content;
}
