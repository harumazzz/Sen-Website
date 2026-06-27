"use client";

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { MessageCircle, Check } from "lucide-react";
import { useTranslation } from "@/hooks/use-translation";
import Link from "next/link";

interface ThankYouDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ThankYouDialog({ isOpen, onClose }: ThankYouDialogProps) {
  const t = useTranslation();
  const discordUrl = "https://discord.gg/DxDmVDMdrq";

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[420px] bg-white/75 dark:bg-zinc-950/80 backdrop-blur-xl border border-white/20 dark:border-zinc-900/50 shadow-2xl rounded-[32px] p-8 gap-6 overflow-hidden">
        {/* Subtle top decoration for high-end glass feel */}
        <div className="absolute -top-12 -left-12 w-28 h-28 rounded-full bg-primary/10 blur-2xl pointer-events-none" />
        
        <div className="flex flex-col items-center text-center gap-5 relative z-10">
          {/* Elegant Icon Container */}
          <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary relative overflow-hidden shadow-inner">
            <Check className="w-8 h-8 stroke-[2.5]" />
          </div>

          <DialogHeader className="gap-2">
            <DialogTitle className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 font-sans">
              {t("download.thankYou.title")}
            </DialogTitle>
            <DialogDescription className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed font-medium mt-1">
              {t("download.thankYou.description")}
            </DialogDescription>
          </DialogHeader>

          {/* Action Buttons */}
          <div className="flex flex-col gap-3 w-full mt-4">
            <Button
              asChild
              className="w-full h-11 rounded-full font-semibold text-xs tracking-wide uppercase transition-all duration-200 active:scale-[0.98] bg-[#5865F2] hover:bg-[#4752C4] text-white shadow-lg shadow-blue-500/10 gap-2 border-0"
            >
              <Link href={discordUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-4.5 w-4.5" />
                {t("download.thankYou.discordButton")}
              </Link>
            </Button>

            <Button
              variant="outline"
              onClick={onClose}
              className="w-full h-11 rounded-full font-semibold text-xs tracking-wide uppercase transition-all duration-200 active:scale-[0.98] border-zinc-200/80 dark:border-zinc-800/80 hover:bg-zinc-50 dark:hover:bg-zinc-900/50 text-zinc-600 dark:text-zinc-400"
            >
              {t("download.thankYou.closeButton")}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
