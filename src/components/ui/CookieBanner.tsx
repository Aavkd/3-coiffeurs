"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";

const STORAGE_KEY = "cookies-accepted";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const acceptRef = useRef<HTMLButtonElement>(null);
  const refuseRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === null) {
        setVisible(true);
      }
    } catch {
      /* localStorage unavailable */
    }
  }, []);

  const dismiss = useCallback((value: "true" | "false") => {
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch {
      /* noop */
    }
    setVisible(false);
  }, []);

  /* Focus trap */
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Escape") {
        dismiss("false");
        return;
      }
      if (e.key === "Tab") {
        const focusable = [acceptRef.current, refuseRef.current].filter(
          Boolean
        ) as HTMLElement[];
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey) {
          if (document.activeElement === first) {
            e.preventDefault();
            last?.focus();
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault();
            first?.focus();
          }
        }
      }
    },
    [dismiss]
  );

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          role="dialog"
          aria-modal="false"
          aria-label="Préférences de cookies"
          onKeyDown={handleKeyDown}
          className="fixed bottom-0 left-0 right-0 z-50 bg-anthracite border-t border-white/10 px-4 py-4 sm:py-5"
        >
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8">
            <p className="flex-1 text-sm text-white/80 leading-relaxed">
              Ce site utilise uniquement des cookies essentiels à son bon
              fonctionnement. Aucun cookie publicitaire ou de suivi n&apos;est
              déposé sans votre consentement.{" "}
              <a
                href="/politique-confidentialite"
                className="text-or underline hover:text-or/75 transition-colors"
              >
                En savoir plus
              </a>
            </p>
            <div className="flex items-center gap-3 shrink-0">
              <button
                ref={refuseRef}
                type="button"
                onClick={() => dismiss("false")}
                className="px-4 py-2 text-sm text-white/60 hover:text-white border border-white/20 hover:border-white/40 rounded-sm transition-colors focus-visible:outline-2 focus-visible:outline-white"
              >
                Refuser
              </button>
              <button
                ref={acceptRef}
                type="button"
                onClick={() => dismiss("true")}
                className="px-5 py-2 text-sm font-semibold bg-or text-anthracite hover:bg-or/85 rounded-sm transition-colors focus-visible:outline-2 focus-visible:outline-white"
              >
                Accepter
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
