import Keywords from "./Keywords";

import "../styles/global.css";

interface WhoAmIProps {
  title?: string;
  imageSrc?: string;
  imageAlt?: string;
}

const WhoAmI = ({
  title = "Qui je suis",
  imageSrc = "/PhotoCouleur.jpg",
  imageAlt = "/ImageIntro.jpg",
}: WhoAmIProps) => {
  return (
    <section id="acceuil" className="pt-17 pb-20" style={{ scrollMarginTop: '100px' }}>
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
        <div className="grid gap-y-8 lg:grid-cols-2 lg:gap-x-10 xl:gap-x-12 lg:items-start mt-10 mb-12">
          {/* Colonne texte */}
          <div className="px-2 sm:px-4 md:px-6 lg:px-4 relative flex flex-col justify-between">
            <div>
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
            
            {/* Image forme4 sous le texte, alignée avec le bas de l'image */}
            <div className="flex justify-center mt-8 lg:mt-auto lg:mb-0">
              <img
                src="/forme4-min.png"
                alt="Forme décorative"
                className="opacity-70"
                style={{ 
                  width: 'clamp(200px, 25vw, 300px)',
                  height: 'clamp(150px, 18vw, 220px)',
                  transform: 'rotate(-5deg)',
                  transformOrigin: 'center'
                }}
              />
            </div>
          </div>

          {/* Colonne image */}
          <div className="flex justify-center lg:justify-center px-1 lg:px-2 relative">
            <div className="relative">
              <img
                src={imageSrc}
                alt={imageAlt}
                loading="lazy"
                decoding="async"
                className="whoami-image w-full object-cover rounded-md max-w-[320px] sm:max-w-[360px] md:max-w-[400px] lg:max-w-[440px] xl:max-w-[360px] 2xl:max-w-[440px]"
              />
            </div>
          </div>
        </div>
        <Keywords />
      </div>
    </section>
  );
};

export { WhoAmI };
