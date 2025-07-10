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
    <section className="py-8 px-8 sm:px-16 max-w-full mb-4 bg-transparent">
      {/* Titre */}
      <h2 className="mb-6 text-center text-2xl sm:text-3xl font-semibold text-balance text-[var(--white-icon)]">
        Quelques mots clés
      </h2>

      {/* Conteneur liste */}
      <div className="relative overflow-x-hidden px-8 bg-transparent">
        {/* Dégradés symétriques transparents */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 z-20"
             style={{
               background: "linear-gradient(to right, rgba(0,0,0,0.0), rgba(0,0,0,0))"
             }}
        />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 z-20"
             style={{
               background: "linear-gradient(to left, rgba(0,0,0,0.0), rgba(0,0,0,0))"
             }}
        />

        {/* Liste défilante */}
        <div className="flex animate-scroll hover:animate-paused gap-12 md:gap-20 w-max whitespace-nowrap mx-auto bg-transparent">
          {[...keywords, ...keywords, ...keywords].map((tech, idx) => (
            <span
              key={idx}
              className="text-lg font-medium text-[var(--white-icon)] bg-transparent"
            >
              {tech.charAt(0).toUpperCase() + tech.slice(1)}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
