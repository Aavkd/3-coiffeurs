import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Mentions légales — 3 Coiffeurs",
  robots: {
    index: false,
    follow: false,
  },
};

export default function MentionsLegalesPage() {
  return (
    <>
      <Header />

      <section className="bg-anthracite pt-28 pb-14 px-4">
        <div className="max-w-7xl mx-auto">
          <nav aria-label="Fil d'Ariane" className="mb-4">
            <ol className="flex items-center gap-2 text-sm text-white/50">
              <li>
                <Link href="/" className="hover:text-white/80 transition-colors">
                  Accueil
                </Link>
              </li>
              <li aria-hidden="true" className="text-white/30">/</li>
              <li className="text-white/80" aria-current="page">
                Mentions légales
              </li>
            </ol>
          </nav>
          <h1 className="font-serif font-black text-3xl sm:text-4xl text-white">
            Mentions légales
          </h1>
        </div>
      </section>

      <main id="main-content" className="bg-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <article className="prose prose-gray max-w-none">

            <section aria-labelledby="editeur-heading" className="mb-10">
              <h2
                id="editeur-heading"
                className="font-serif font-bold text-xl text-anthracite mb-4 pb-2 border-b border-gray-100"
              >
                Éditeur du site
              </h2>
              <dl className="space-y-2 text-gray-700 text-sm">
                <div className="flex gap-2">
                  <dt className="font-semibold text-anthracite w-48 shrink-0">Raison sociale :</dt>
                  <dd>3 Coiffeurs</dd>
                </div>
                <div className="flex gap-2">
                  <dt className="font-semibold text-anthracite w-48 shrink-0">Forme juridique :</dt>
                  <dd className="text-bordeaux">[FORME_JURIDIQUE] <span className="text-gray-400 italic">(ex : Entreprise individuelle)</span></dd>
                </div>
                <div className="flex gap-2">
                  <dt className="font-semibold text-anthracite w-48 shrink-0">SIRET :</dt>
                  <dd className="text-bordeaux">[SIRET_SALON]</dd>
                </div>
                <div className="flex gap-2">
                  <dt className="font-semibold text-anthracite w-48 shrink-0">Adresse :</dt>
                  <dd>3 Rue Henri Barbusse, 92000 Nanterre</dd>
                </div>
                <div className="flex gap-2">
                  <dt className="font-semibold text-anthracite w-48 shrink-0">Téléphone :</dt>
                  <dd>
                    <a href="tel:+33766082702" className="text-bordeaux hover:underline">
                      07 66 08 27 02
                    </a>
                  </dd>
                </div>
                <div className="flex gap-2">
                  <dt className="font-semibold text-anthracite w-48 shrink-0">Email :</dt>
                  <dd className="text-bordeaux">[EMAIL_SALON]</dd>
                </div>
                <div className="flex gap-2">
                  <dt className="font-semibold text-anthracite w-48 shrink-0">Directeur de publication :</dt>
                  <dd className="text-bordeaux">[NOM_GERANT]</dd>
                </div>
              </dl>
            </section>

            <section aria-labelledby="hebergeur-heading" className="mb-10">
              <h2
                id="hebergeur-heading"
                className="font-serif font-bold text-xl text-anthracite mb-4 pb-2 border-b border-gray-100"
              >
                Hébergeur
              </h2>
              <dl className="space-y-2 text-gray-700 text-sm">
                <div className="flex gap-2">
                  <dt className="font-semibold text-anthracite w-48 shrink-0">Société :</dt>
                  <dd>Vercel Inc.</dd>
                </div>
                <div className="flex gap-2">
                  <dt className="font-semibold text-anthracite w-48 shrink-0">Adresse :</dt>
                  <dd>440 N Barranca Ave #4133, Covina, CA 91723, USA</dd>
                </div>
                <div className="flex gap-2">
                  <dt className="font-semibold text-anthracite w-48 shrink-0">Site :</dt>
                  <dd>
                    <a
                      href="https://vercel.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-bordeaux hover:underline"
                    >
                      https://vercel.com
                    </a>
                  </dd>
                </div>
              </dl>
            </section>

            <section aria-labelledby="propriete-heading" className="mb-10">
              <h2
                id="propriete-heading"
                className="font-serif font-bold text-xl text-anthracite mb-4 pb-2 border-b border-gray-100"
              >
                Propriété intellectuelle
              </h2>
              <p className="text-gray-700 text-sm leading-relaxed">
                L&apos;ensemble du contenu de ce site (textes, images, graphismes) est la propriété
                exclusive de 3 Coiffeurs, sauf mention contraire. Toute reproduction, même partielle,
                est interdite sans autorisation préalable.
              </p>
            </section>

            <section aria-labelledby="responsabilite-heading" className="mb-10">
              <h2
                id="responsabilite-heading"
                className="font-serif font-bold text-xl text-anthracite mb-4 pb-2 border-b border-gray-100"
              >
                Limitation de responsabilité
              </h2>
              <p className="text-gray-700 text-sm leading-relaxed">
                3 Coiffeurs s&apos;efforce de maintenir les informations de ce site à jour. Toutefois,
                la société ne saurait être tenue responsable des erreurs ou omissions dans le contenu,
                ni des dommages résultant de l&apos;utilisation du site.
              </p>
            </section>

            <section aria-labelledby="loi-heading" className="mb-10">
              <h2
                id="loi-heading"
                className="font-serif font-bold text-xl text-anthracite mb-4 pb-2 border-b border-gray-100"
              >
                Loi applicable
              </h2>
              <p className="text-gray-700 text-sm leading-relaxed">
                Le présent site est soumis à la loi française. En cas de litige, les tribunaux
                français seront seuls compétents.
              </p>
            </section>

          </article>
        </div>
      </main>

      <Footer />
    </>
  );
}
