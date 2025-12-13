"use client";

import { FooterSection } from "@/components/footer/footer-section";
import { FooterLinkGroup } from "@/components/footer/footer-link-group";
import { SocialLinks } from "@/components/footer/social-links";
import { ModCarousel } from "@/components/carousel/mod-carousel";
import { useTranslation } from "@/hooks/use-translation";

export function Footer() {
  const t = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full">
      {/* Links and Social Media Section */}
      <div className="w-full backdrop-blur-xl bg-gradient-to-b from-white/10 via-white/5 to-transparent dark:from-white/5 dark:via-white/2 dark:to-transparent border-t border-white/20 shadow-2xl">
        <div className="container mx-auto px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          {/* Footer Links Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mb-8">
            {/* Quick Links */}
            <FooterSection title={t("footer.quickLinks")}>
              <FooterLinkGroup
                links={[
                  { label: t("footer.links.home"), href: "/" },
                  { label: t("footer.links.download"), href: "/download" },
                  { label: t("footer.links.resources"), href: "/resources" },
                  { label: t("footer.links.changelog"), href: "/changelog" },
                  { label: t("footer.links.contact"), href: "/about" },
                ]}
              />
            </FooterSection>

            {/* Resources */}
            <FooterSection title={t("footer.resources")}>
              <FooterLinkGroup
                links={[
                  {
                    label: t("footer.links.documentation"),
                    href: "https://github.com/harumazzz/Sen",
                  },
                  { label: t("footer.links.support"), href: "https://discord.gg/DxDmVDMdrq" },
                  { label: t("footer.links.community"), href: "https://discord.gg/DxDmVDMdrq" },
                  { label: t("footer.links.faq"), href: "/about" },
                ]}
              />
            </FooterSection>

            {/* Social Media */}
            <FooterSection title={t("footer.followUs")}>
              <SocialLinks />
            </FooterSection>
          </div>

          {/* Divider */}
          <div className="my-8">
            <hr className="border-white/20" />
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-sm text-white/70">{t("footer.copyright", { year: currentYear })}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
