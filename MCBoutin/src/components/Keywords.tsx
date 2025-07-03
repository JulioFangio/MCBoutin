const keywords = [
  "Émotion",
  "Mouvement",
  "Traversée",
  "Profondeur",
  "Singularité",
  "Geste",
  "Transmission",
  "Écoute",
  "Transformation",
  "Accompagnement",
  "Changement",
  "Secret professionnel",
  "Confiance",
];

export default function Keywords() {
  return (
    <section className="py-8 px-8 sm:px-16 max-w-full">
      {/* Titre */}
      <h2 className="mb-6 text-center text-2xl sm:text-3xl font-semibold text-balance">
        Quelques mots clés
      </h2>

      {/* Conteneur liste avec padding pour ne pas coller aux bords */}
      <div className="relative overflow-x-hidden px-8">
        {/* Dégradés symétriques à gauche et droite */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[var(--background)] to-transparent z-20" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[var(--background)] to-transparent z-20" />

        {/* Liste défilante */}
        <div className="flex animate-scroll hover:animate-paused gap-12 md:gap-20 w-max whitespace-nowrap mx-auto">
          {[...keywords, ...keywords, ...keywords].map((tech, idx) => (
            <span
              key={idx}
              className="text-lg font-medium text-[var(--white-icon)]"
            >
              {tech.charAt(0).toUpperCase() + tech.slice(1)}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
