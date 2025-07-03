import Keywords from "./Keywords";
import "../styles/global.css";

interface WhoAmIProps {
  title?: string;
  imageSrc?: string;
  imageAlt?: string;
}

const WhoAmI = ({
  title = "Mon parcours",
  imageSrc = "../../public/pexels-alex-green-5699431.jpg",
  imageAlt = "placeholder hero",
}: WhoAmIProps) => {
  return (
    <section className="pt-30 pb-20">
      <div
        className="
          mx-auto
          px-4
          sm:px-6
          md:px-8
          lg:px-12
          xl:px-16
          max-w-full
          sm:max-w-2xl
          md:max-w-4xl
          lg:max-w-6xl
          xl:max-w-[80rem]
          2xl:max-w-[100rem]
        "
      >
        {/* Titre */}
        <h1 className="whoami-title mb-12 text-3xl sm:text-4xl font-semibold text-center lg:text-left">
          {title}
        </h1>

        {/* Grille alignée avec espacement horizontal accru */}
        <div className="grid gap-y-8 lg:grid-cols-2 lg:gap-x-20 xl:gap-x-28 lg:items-center">
          {/* Texte */}
          <div className="text-muted-foreground whoami-text text-justify text-sm sm:text-base leading-relaxed space-y-4">
            <p>
              J’ai débuté en 2003 en tant que <strong>Graphologue</strong>, accompagnant les jeunes à leur projet professionnel avec l’analyse graphologique caractérologique comme outil principal.
            </p>
            <p>
              Au fil du temps, l’expérience et les formations ont enrichi mon approche puis changé ma pratique.
            </p>
            <p>
              Aujourd’hui, l’accompagnement se fait principalement en <strong>coaching</strong> et/ou en <strong>thérapie</strong>, car il favorise une meilleure compréhension de soi avec la considération émotionnelle. Il motive les changements et les réalisations, permet la récolte des petites victoires sur soi et des avancées concrètes.
            </p>
            <p>
              Cela au profit du <strong>sens</strong> trouvé à son parcours, personnel et professionnel. Chaque parcours est unique et mérite d’être envisagé avec <strong>authenticité</strong> et <strong>audace</strong>.
            </p>
            <p>
              Que vous soyez en pleine réflexion, à un tournant de votre vie ou en quête d’un nouvel équilibre, je vous ouvre un espace d’écoute et de changement.
            </p>
            <p>
              Ensemble, nous clarifierons vos aspirations, ouvrirons le champ des possibles pour construire un avenir qui vous ressemble.
            </p>
          </div>

          {/* Image centrée */}
          <div className="flex justify-center items-center">
            <img
              src={imageSrc}
              alt={imageAlt}
              className="whoami-image w-full max-w-md md:max-w-lg lg:max-w-full max-h-[440px] object-cover rounded-md"
            />
          </div>
        </div>
      </div>
      <Keywords />
    </section>
  );
};

export { WhoAmI };
