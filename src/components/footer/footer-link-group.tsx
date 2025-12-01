"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { ExternalLink as ExternalLinkIcon } from "lucide-react";

interface FooterLink {
  label: string;
  href: string;
  external?: boolean;
}

interface FooterLinkGroupProps {
  links: FooterLink[];
  className?: string;
}

export function FooterLinkGroup({ links, className }: FooterLinkGroupProps) {
  return (
    <ul className={cn("flex flex-col gap-2", className)}>
      {links.map((link) => (
        <li key={`${link.label}-${link.href}`}>
          <Link
            href={link.href}
            target={link.external ? "_blank" : undefined}
            rel={link.external ? "noopener noreferrer" : undefined}
            className="group flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <span>{link.label}</span>
            {link.external && (
              <ExternalLinkIcon className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
            )}
          </Link>
        </li>
      ))}
    </ul>
  );
}
