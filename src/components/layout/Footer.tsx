import Link from "next/link";

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

function MapPinIcon({ className }: { className?: string }) {
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
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
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

function ClockIcon({ className }: { className?: string }) {
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
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function TwitterXIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/services", label: "Services" },
  { href: "/galerie", label: "Galerie" },
  { href: "/rendez-vous", label: "RDV" },
];

export default function Footer() {
  return (
    <footer className="bg-anthracite text-white" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">

          {/* Brand column */}
          <div className="flex flex-col gap-4">
            <Link
              href="/"
              className="flex items-center gap-2 group w-fit"
              aria-label="3 Coiffeurs — Accueil"
            >
              <ScissorsIcon className="w-6 h-6 text-or group-hover:text-bordeaux transition-colors duration-200" />
              <span className="font-serif font-bold text-xl text-white tracking-wide">
                3 COIFFEURS
              </span>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed">
              Barbe &amp; Cheveux · Nanterre
            </p>

            {/* Social */}
            <a
              href="https://x.com/3Nanterre"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white/50 hover:text-or transition-colors duration-200 w-fit mt-1"
              aria-label="Suivre 3 Coiffeurs sur X (Twitter)"
            >
              <TwitterXIcon className="w-4 h-4" />
              <span className="text-sm">@3Nanterre</span>
            </a>
          </div>

          {/* Nav column */}
          <div className="flex flex-col gap-4">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-or">
              Navigation
            </h2>
            <nav aria-label="Liens du footer">
              <ul className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-white/60 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Contact column */}
          <div className="flex flex-col gap-4">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-or">
              Contact &amp; Horaires
            </h2>
            <address className="not-italic flex flex-col gap-3 text-sm text-white/60">
              <div className="flex items-start gap-2.5">
                <MapPinIcon className="w-4 h-4 text-or flex-shrink-0 mt-0.5" />
                <span>3 Rue Henri Barbusse<br />92000 Nanterre</span>
              </div>
              <div className="flex items-center gap-2.5">
                <PhoneIcon className="w-4 h-4 text-or flex-shrink-0" />
                <a
                  href="tel:+33766082702"
                  className="hover:text-white transition-colors duration-200"
                >
                  07 66 08 27 02
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <ClockIcon className="w-4 h-4 text-or flex-shrink-0" />
                <span>Lun – Dim · 09:00 – 20:30</span>
              </div>
            </address>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <span>© 2026 3 Coiffeurs. Tous droits réservés.</span>
          <nav aria-label="Liens légaux" className="flex items-center gap-4">
            <Link
              href="/mentions-legales"
              className="hover:text-white/70 transition-colors duration-200"
            >
              Mentions légales
            </Link>
            <span aria-hidden="true">·</span>
            <Link
              href="/politique-confidentialite"
              className="hover:text-white/70 transition-colors duration-200"
            >
              Politique de confidentialité
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
