import { ArrowRight } from "lucide-react";
import "../styles/global.css";
import { useState } from "react";

import {
    Card,
    CardFooter,
    CardHeader,
} from "@/components/ui/card";

interface Post {
    id: string;
    title: string;
    slogan: string;
    image: string;
    content: {
        intro: string;
        question?: string;
        forWho: string[];
        objectives: string[];
    };
}

interface ActivitiesProps {
    heading?: string;
    posts?: Post[];
}

const Activities = ({
    heading = "Mes accompagnements",
    posts = [
        {
            id: "post-1",
            title: "Thérapie individuelle, relationnelle et familiale",
            slogan: "\"Du cœur à la parole.\"",
            image: "/forme1-min.png",
            content: {
                intro: "Vous traversez une période difficile, éprouvez de la difficulté à exprimer ce que vous ressentez ?",
                question: "Vous traversez un moment douloureux, vous souhaitez sortir de schémas répétitifs?",
                forWho: [
                    "Adultes, adolescents, couples ou familles",
                    "Relations conflictuelles, distantes ou coupées",
                    "Perte de sens, stress, anxiété, charge mentale",
                    "Séparation, deuil, recomposition familiale",
                    "Troubles émotionnels"
                ],
                objectives: [
                    "Retisser du lien, restaurer la communication",
                    "Se sentir écouté·e, accueilli·e dans sa singularité",
                    "Réouvrir des possibles relationnels et personnels"
                ]
            }
        },
        {
            id: "post-2",
            title: "Transition et changement de cycle de vie",
            slogan: "\"Prendre le temps de son récit.\"",
            image: "/forme2-min.png",
            content: {
                intro: "La vie nous invite parfois à nous réinventer : changement professionnel, parentalité, départ des enfants, retraite, déménagement, crise existentielle...",
                question: "Ces moments de passage peuvent être vécus comme des crises mais aussi comme des opportunités de transformation.",
                forWho: [
                    "Personnes en questionnement de milieu de vie",
                    "Parents, aidants, personnes en burn-out ou épuisement",
                    "Étapes importantes de l'existence : rupture, départ, deuil"
                ],
                objectives: [
                    "Relire son histoire, remettre du sens",
                    "Traverser l'incertitude avec soutien et clarté",
                    "Retrouver un axe personnel, une vision intérieure"
                ]
            }
        },
        {
            id: "post-3",
            title: "Coaching d'orientation et de reconversion",
            slogan: "\"Du cœur au changement ou retrouver le fil de soi\"",
            image: "/forme3-min.png",
            content: {
                intro: "Vous vous demandez : Quelle direction prendre ? Vers quoi me réorienter ? Comment faire des choix justes pour moi ?",
                forWho: [
                    "Lycéens, étudiants, jeunes adultes en quête d'orientation",
                    "Personnes en reconversion, en transition ou en quête de sens",
                    "Adultes souhaitant repositionner leur trajectoire professionnelle"
                ],
                objectives: [
                    "Explorer vos forces, motivations, valeurs",
                    "vos envies , votre potentiel",
                    "Identifier des pistes concrètes et alignées",
                    "Gagner en confiance pour faire des choix éclairés"
                ]
            }
        },
    ],
}: ActivitiesProps) => {
    const [flippedCards, setFlippedCards] = useState<string[]>([]);

    const handleCardClick = (cardId: string) => {
        setFlippedCards(prev => {
            // Si la carte cliquée est déjà retournée, on la remet à l'endroit
            if (prev.includes(cardId)) {
                return prev.filter(id => id !== cardId);
            }
            // Sinon, on retourne uniquement cette carte (ferme toutes les autres)
            return [cardId];
        });
    };

    return (
        <section id="accompagnement" className="pt-0 pb-20" style={{ scrollMarginTop: '100px' }}>
            <div className="container mx-auto flex flex-col gap-8 px-4 lg:px-16 mb-8">
                <div className="text-center">
                    <h2 className="mb-6 text-2xl sm:text-3xl font-semibold">{heading}</h2>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-8">
                    <div className="whoami-text text-sm sm:text-base leading-relaxed space-y-4">
                        <p>
                            Vous vivez une période de questionnement, de transition, de tension relationnelle ou de perte de repères ? Besoin d’y voir plus clair ? De remettre du sens à votre parcours ? De retrouver un élan personnel ou professionnel ?
                        </p>
                        <p>
                            Je vous propose un accompagnement individuel ou familial selon votre rythme et votre besoin. Ma conviction : chacun peut (re)trouver le fil de soi, renouer avec ses ressources profondes, restaurer ses liens et oser le changement.
                        </p>
                        <p className="font-semibold italic">
                            "Oser le changement, retrouver l’élan."
                        </p>
                    </div>
                    <div className="whoami-text text-sm sm:text-base leading-relaxed space-y-4">
                        <p className="font-semibold">Mon approche est intégrative et permet de :</p>

                        <ul className="list-disc list-inside marker:text-current marker:text-sm space-y-2">
                            <li>Explorer les dynamiques relationnelles, familiales, professionnelles</li>
                            <li>Accueillir les grandes questions de sens, de valeurs et de choix</li>
                            <li>Accueillir les émotions, s'en servir et retrouver du mouvement</li>
                            <li>Comprendre les héritages familiaux, les loyautés invisibles, les transmissions</li>
                            <li>Clarifier les enjeux, poser les objectifs et agir avec justesse</li>
                        </ul>
                    </div>
                </div>
                <div className="grid gap-8 sm:gap-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
                    {posts.map((post) => {
                        const isFlipped = flippedCards.includes(post.id);
                        return (
                            <div key={post.id} 
                                 className="mb-4 sm:mb-6"
                                 style={{ 
                                     perspective: '1000px', 
                                     minHeight: '400px',
                                     width: '100%'
                                 }}>
                                <div 
                                    style={{
                                        position: 'relative',
                                        width: '100%',
                                        height: 'auto',
                                        minHeight: '400px',
                                        textAlign: 'center',
                                        transition: 'transform 0.6s ease-in-out',
                                        transformStyle: 'preserve-3d',
                                        transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
                                    }}
                                >
                                    {/* Face avant */}
                                    <div style={{
                                        position: 'absolute',
                                        width: '100%',
                                        height: 'auto',
                                        minHeight: '400px',
                                        backfaceVisibility: 'hidden',
                                        borderRadius: '0.75rem',
                                        top: 0,
                                        left: 0,
                                        transform: 'rotateY(0deg)',
                                        zIndex: 2
                                    }}>
                                        <Card className="relative overflow-hidden min-h-[400px] border-0 shadow-lg bg-transparent w-full">
                                            {/* Image en background */}
                                            <div
                                                className="absolute inset-0 bg-cover bg-center bg-transparent"
                                                style={{ backgroundImage: `url(${post.image})` }}
                                            />

                                            {/* Contenu principal */}
                                            <div className="relative z-10 flex flex-col justify-between h-full min-h-[400px]">
                                                {/* Titre et slogan au milieu */}
                                                <div className="flex-1 flex items-center justify-center">
                                                    <CardHeader className="px-6">
                                                        {/* Zone de fond pour le texte */}
                                                        <div className="bg-white/2 backdrop-blur-[1px] rounded-lg p-4 shadow-none">
                                                            <h3 className="whoami-text text-lg font-semibold md:text-xl mb-2 text-black" 
                                                                style={{ textShadow: '1px 1px 2px rgba(255,255,255,0.8), -1px -1px 2px rgba(255,255,255,0.8)' }}>
                                                                {post.title}
                                                            </h3>
                                                            <p className="whoami-text text-sm italic text-black" 
                                                               style={{ textShadow: '1px 1px 2px rgba(255,255,255,0.8), -1px -1px 2px rgba(255,255,255,0.8)' }}>
                                                                {post.slogan}
                                                            </p>
                                                        </div>
                                                    </CardHeader>
                                                </div>

                                                {/* Lire plus en bas à gauche */}
                                                <CardFooter className="px-6 pb-6 justify-start">
                                                    <button 
                                                        type="button"
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            e.stopPropagation();
                                                            handleCardClick(post.id);
                                                        }}
                                                        className="whoami-text flex items-center text-black cursor-pointer hover:underline bg-transparent border-none focus:outline-none"
                                                        style={{ 
                                                            textShadow: '1px 1px 2px rgba(255,255,255,0.8), -1px -1px 2px rgba(255,255,255,0.8)',
                                                            zIndex: 10,
                                                            pointerEvents: 'auto'
                                                        }}
                                                    >
                                                        Lire plus
                                                        <ArrowRight className="ml-2 size-4" />
                                                    </button>
                                                </CardFooter>
                                            </div>
                                        </Card>
                                    </div>

                                    {/* Face arrière */}
                                    <div className="flip-card-back" style={{
                                        position: 'absolute',
                                        width: '100%',
                                        height: 'auto',
                                        minHeight: '400px',
                                        backfaceVisibility: 'hidden',
                                        borderRadius: '0.75rem',
                                        top: 0,
                                        left: 0,
                                        transform: 'rotateY(180deg)',
                                        zIndex: 1
                                    }}>
                                        <Card className="border-0 shadow-lg bg-white/10 backdrop-blur-none h-full w-full min-h-[400px]">
                                            <div className="flex flex-col h-full p-6 min-h-[400px]">
                                                {/* Contenu détaillé en haut */}
                                                <div className="flex-1 space-y-4">
                                                    <div className="whoami-text text-sm space-y-3">
                                                        <p className="leading-relaxed">{post.content.intro}</p>
                                                        {post.content.question && (
                                                            <p className="leading-relaxed">{post.content.question}</p>
                                                        )}
                                                        
                                                        <div className="space-y-2">
                                                            <h4 className="font-semibold">Pour qui ?</h4>
                                                            <ul className="list-disc list-inside space-y-1">
                                                                {post.content.forWho.map((item, index) => (
                                                                    <li key={index} className="text-sm">{item}</li>
                                                                ))}
                                                            </ul>
                                                        </div>

                                                        <div className="space-y-2">
                                                            <h4 className="font-semibold">Objectifs :</h4>
                                                            <ul className="list-disc list-inside space-y-1">
                                                                {post.content.objectives.map((item, index) => (
                                                                    <li key={index} className="text-sm">{item}</li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Bouton retour en bas à gauche */}
                                                <CardFooter className="px-0 pt-4 justify-start">
                                                    <button 
                                                        type="button"
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            e.stopPropagation();
                                                            handleCardClick(post.id);
                                                        }}
                                                        className="whoami-text flex items-center text-black cursor-pointer hover:underline bg-transparent border-none focus:outline-none"
                                                        style={{ 
                                                            zIndex: 10,
                                                            pointerEvents: 'auto'
                                                        }}
                                                    >
                                                        Retour
                                                        <ArrowRight className="ml-2 size-4 rotate-180" />
                                                    </button>
                                                </CardFooter>
                                            </div>
                                        </Card>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export { Activities };
