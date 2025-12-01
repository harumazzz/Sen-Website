"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { Github, Twitter, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SOCIAL_LINKS } from "@/lib/constants";

const SOCIAL_ICONS = {
  github: Github,
  twitter: Twitter,
  discord: MessageCircle,
} as const;

interface SocialLink {
  name: keyof typeof SOCIAL_ICONS;
  href: string;
  label: string;
}

const SOCIAL_LIST: SocialLink[] = [
  { name: "github", href: SOCIAL_LINKS.GITHUB, label: "GitHub" },
  { name: "discord", href: SOCIAL_LINKS.DISCORD, label: "Discord" },
  { name: "twitter", href: SOCIAL_LINKS.TWITTER, label: "Twitter" },
];

interface SocialLinksProps {
  className?: string;
}

export function SocialLinks({ className }: SocialLinksProps) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      {SOCIAL_LIST.map((social) => {
        const Icon = SOCIAL_ICONS[social.name];
        return (
          <Button
            key={social.name}
            variant="ghost"
            size="icon"
            asChild
            className="h-9 w-9 hover:bg-accent"
          >
            <Link
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
            >
              <Icon className="h-5 w-5" />
            </Link>
          </Button>
        );
      })}
    </div>
  );
}
