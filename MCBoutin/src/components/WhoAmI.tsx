import Keywords from "./Keywords";

import "../styles/global.css";

interface WhoAmIProps {
  title?: string;
  imageSrc?: string;
  imageAlt?: string;
}

const WhoAmI = ({
  title = "Histoire",
  imageSrc = "/pexels-alex-green-5699431.jpg",
  imageAlt = "placeholder hero",
}: WhoAmIProps) => {
  return (
    <section id="acceuil" className="pt-30 pb-20" style={{ scrollMarginTop: '100px' }}>
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
          mb-2
        "
      >
        {/* Grille avec Titre + Texte + Image */}
        <div className="grid gap-y-8 lg:grid-cols-2 lg:gap-x-20 xl:gap-x-28 lg:items-start mt-10 mb-12">
          {/* Colonne texte */}
          <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
            <h1 className="whoami-title text-3xl sm:text-4xl font-semibold text-center lg:text-left mb-6">
              {title}
            </h1>
            <div className="whoami-text text-sm sm:text-base leading-relaxed space-y-4">
              <p>
                Installée depuis 2003, j'accompagne celles et ceux qui traversent des périodes de transition, de questionnement ou de bouleversement, dans leur vie personnelle, relationnelle ou professionnelle.
              </p>
              <p>
                Mon parcours s'est construit à la croisée de plusieurs univers et formations : la graphologie, la graphothérapie, le coaching d'orientation, le coaching stratégique et la thérapie systémique.
              </p>
              <p>
                Je crois profondément que chacun peut retrouver l'accès à ses ressources intérieures, renouer avec la confiance, restaurer les liens essentiels, et oser une transformation respectueuse de soi.
              </p>
              <p>
                Au cœur de ma démarche : l'écoute attentive, l'accueil des émotions, la parole libérée et le dialogue comme leviers de transformation.
              </p>
            </div>
          </div>

          {/* Colonne image */}
          <div className="flex justify-center items-center">
            <img
              src={imageSrc}
              alt={imageAlt}
              loading="lazy"
              decoding="async"
              className="whoami-image w-full max-w-md md:max-w-lg lg:max-w-full max-h-[440px] object-cover rounded-md"
            />
          </div>
        </div>
        <Keywords />
      </div>
    </section>
  );
};

export { WhoAmI };
