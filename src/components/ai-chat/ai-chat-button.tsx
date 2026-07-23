"use client";

import { useState, useEffect } from "react";
import { MessageSquare, X } from "lucide-react";
import { motion } from "framer-motion";
import { AIChatDialog } from "./ai-chat-dialog";

export function AIChatButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      {/* Floating Action Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-24 lg:bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-lg hover:shadow-xl cursor-pointer select-none transition-shadow duration-300 outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Toggle AI Chat"
      >
        <motion.div
          animate={{ rotate: isOpen ? 90 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex items-center justify-center"
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <div className="relative">
              <MessageSquare className="w-6 h-6" />
              <span className="absolute -top-1 -right-1 flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
              </span>
            </div>
          )}
        </motion.div>
      </motion.button>

      {/* AI Chat Dialog */}
      <AIChatDialog isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
