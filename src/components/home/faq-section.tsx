"use client";

import { useTranslation } from "@/hooks/use-translation";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { FadeIn } from "@/components/animations/fade-in";
import { HelpCircle } from "lucide-react";

export function FaqSection() {
  const t = useTranslation();

  const faqs = [
    {
      q: t("home.faq.q1"),
      a: t("home.faq.a1"),
    },
    {
      q: t("home.faq.q2"),
      a: t("home.faq.a2"),
    },
    {
      q: t("home.faq.q3"),
      a: t("home.faq.a3"),
    },
    {
      q: t("home.faq.q4"),
      a: t("home.faq.a4"),
    },
  ];

  return (
    <section className="w-full py-16 sm:py-24 border-t border-border/40 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto gap-4 mb-14">
          <div className="p-2 rounded-xl bg-primary/10 text-primary w-fit shadow-inner">
            <HelpCircle className="h-5 w-5" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground bg-gradient-to-r from-foreground via-foreground/95 to-foreground/80 bg-clip-text">
            {t("home.faq.title")}
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed max-w-xl">
            {t("home.faq.subtitle")}
          </p>
        </div>

        <FadeIn delay={0.1} className="max-w-3xl mx-auto border border-border/60 rounded-2xl bg-muted/20 p-6 sm:p-8 backdrop-blur-sm shadow-sm">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border-border/60 py-1 first:pt-0 last:pb-0">
                <AccordionTrigger className="text-base font-semibold hover:no-underline text-foreground/95 hover:text-primary transition-colors py-4">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground leading-relaxed pt-1 pb-4">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </FadeIn>
      </div>
    </section>
  );
}
