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
      <div className="relative overflow-x-hidden px-8 bg-transparent">
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

        <div className="flex animate-scroll hover:animate-paused gap-12 md:gap-20 w-max whitespace-nowrap mx-auto bg-transparent">
          {[...keywords, ...keywords, ...keywords].map((tech, idx) => {
            return (
              <span
                key={idx}
                className="text-md font-medium bg-transparent text-black"
              >
                {tech.charAt(0).toUpperCase() + tech.slice(1)}
              </span>
            );
          })}
        </div>
      </div>
    </section>
  );
}
