"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/galerie", label: "Galerie" },
  { href: "/rendez-vous", label: "Réserver" },
];

function ScissorsIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <circle cx="6" cy="6" r="3" />
      <circle cx="6" cy="18" r="3" />
      <line x1="20" y1="4" x2="8.12" y2="15.88" />
      <line x1="14.47" y1="14.48" x2="20" y2="20" />
      <line x1="8.12" y1="8.12" x2="12" y2="12" />
    </svg>
  );
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.97a16 16 0 0 0 6.29 6.29l1.06-.97a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function MenuIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}

function CloseIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setDrawerOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (drawerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [drawerOpen]);

  const isActive = (href: string) => pathname === href;

  return (
    <>
      <header
        className={[
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-anthracite/95 backdrop-blur-sm shadow-lg"
            : "bg-transparent",
        ].join(" ")}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2 group"
              aria-label="3 Coiffeurs — Accueil"
            >
              <ScissorsIcon className="w-6 h-6 text-or group-hover:text-bordeaux transition-colors duration-200" />
              <span className="font-serif font-bold text-lg md:text-xl text-white tracking-wide leading-none">
                3 COIFFEURS
              </span>
            </Link>

            {/* Desktop nav */}
            <nav
              className="hidden md:flex items-center gap-8"
              aria-label="Navigation principale"
            >
              {navLinks.slice(0, 2).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={[
                    "text-sm font-medium tracking-wide transition-colors duration-200 relative",
                    "after:absolute after:bottom-0 after:left-0 after:h-px after:bg-or after:transition-all after:duration-200",
                    isActive(link.href)
                      ? "text-or after:w-full"
                      : "text-white/80 hover:text-white after:w-0 hover:after:w-full",
                  ].join(" ")}
                >
                  {link.label}
                </Link>
              ))}

              {/* CTA Réserver */}
              <Link
                href="/rendez-vous"
                className={[
                  "px-5 py-2.5 rounded-sm text-sm font-semibold tracking-wide transition-all duration-200",
                  "bg-bordeaux text-white hover:bg-bordeaux/80 active:scale-95",
                  isActive("/rendez-vous") ? "ring-2 ring-or ring-offset-1 ring-offset-transparent" : "",
                ].join(" ")}
              >
                Réserver
              </Link>
            </nav>

            {/* Phone CTA (desktop) */}
            <a
              href="tel:+33766082702"
              className="hidden md:flex items-center gap-2 text-sm font-medium text-white/80 hover:text-or transition-colors duration-200"
              aria-label="Appeler le 07 66 08 27 02"
            >
              <PhoneIcon className="w-4 h-4" />
              <span>07 66 08 27 02</span>
            </a>

            {/* Mobile hamburger */}
            <button
              className="md:hidden p-2 text-white rounded-sm hover:bg-white/10 transition-colors"
              onClick={() => setDrawerOpen(true)}
              aria-label="Ouvrir le menu"
              aria-expanded={drawerOpen}
              aria-controls="mobile-menu"
            >
              <MenuIcon className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {drawerOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-50 bg-black/60 md:hidden"
              onClick={() => setDrawerOpen(false)}
              aria-hidden="true"
            />

            {/* Drawer panel */}
            <motion.div
              key="drawer"
              id="mobile-menu"
              role="dialog"
              aria-modal="true"
              aria-label="Menu mobile"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.28, ease: "easeInOut" }}
              className="fixed top-0 right-0 bottom-0 z-50 w-72 bg-anthracite flex flex-col md:hidden"
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
                <Link
                  href="/"
                  className="flex items-center gap-2"
                  onClick={() => setDrawerOpen(false)}
                >
                  <ScissorsIcon className="w-5 h-5 text-or" />
                  <span className="font-serif font-bold text-white tracking-wide">
                    3 COIFFEURS
                  </span>
                </Link>
                <button
                  onClick={() => setDrawerOpen(false)}
                  className="p-1.5 text-white/60 hover:text-white transition-colors"
                  aria-label="Fermer le menu"
                >
                  <CloseIcon className="w-5 h-5" />
                </button>
              </div>

              {/* Drawer nav */}
              <nav className="flex flex-col gap-1 px-4 py-6 flex-1" aria-label="Menu mobile">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={[
                      "px-4 py-3 rounded-sm text-base font-medium transition-colors duration-200",
                      isActive(link.href)
                        ? "bg-bordeaux text-white"
                        : link.href === "/rendez-vous"
                        ? "bg-bordeaux text-white hover:bg-bordeaux/80"
                        : "text-white/80 hover:text-white hover:bg-white/5",
                    ].join(" ")}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              {/* Phone number at the bottom */}
              <div className="px-6 py-6 border-t border-white/10">
                <a
                  href="tel:+33766082702"
                  className="flex items-center gap-3 text-white/70 hover:text-or transition-colors"
                >
                  <PhoneIcon className="w-5 h-5 flex-shrink-0" />
                  <span className="text-base font-medium">07 66 08 27 02</span>
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
