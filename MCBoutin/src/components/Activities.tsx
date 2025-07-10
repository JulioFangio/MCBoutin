import { ArrowRight } from "lucide-react";
import "../styles/global.css";

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
}

interface ActivitiesProps {
    heading: string;
    posts: Post[];
}

const Activities = ({
    heading = "Mon activité",
    posts = [
        {
            id: "post-1",
            title: "Thérapie individuelle, relationnelle et familiale",
            slogan: "\"Du cœur à la parole.\"",
            image: "/forme1-min.png",
        },
        {
            id: "post-2",
            title: "Transition et changement de cycle de vie",
            slogan: "\"Prendre le temps de son récit.\"",
            image: "/forme2-min.png",
        },
        {
            id: "post-3",
            title: "Coaching d'orientation et de reconversion",
            slogan: "\"Du cœur au changement ou retrouver le fil de soi\"",
            image: "/forme3-min.png",
        },
    ],
}: ActivitiesProps) => {
    return (
        <section id="activities" className="pt-20 pb-20">
            <div className="container mx-auto flex flex-col gap-16 px-4 lg:px-16">
                <div className="text-center">
                    <h2 className="mb-6 text-2xl sm:text-3xl font-semibold">{heading}</h2>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    <div className="whoami-text text-sm sm:text-base leading-relaxed space-y-4">
                        <p>
                            Vous vivez une période de questionnement, de transition, de tension relationnelle ou de perte de repères ? Besoin d’y voir plus clair ? De remettre du sens à votre parcours ? De retrouver un élan personnel ou professionnel ?
                        </p>
                        <p>
                            Je vous propose un accompagnement individuel ou familial selon votre rythme et votre besoin. Ma conviction : chacun peut (re)trouver le fil de soi, renouer avec ses ressources profondes, restaurer ses liens et oser le changement.
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
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
                    {posts.map((post) => (
                        <Card key={post.id} className="relative overflow-hidden h-[400px] border-0 shadow-lg bg-transparent">
                            {/* Image en background */}
                            <div
                                className="absolute inset-0 bg-cover bg-center bg-transparent"
                                style={{ backgroundImage: `url(${post.image})` }}
                            />

                            {/* Contenu principal */}
                            <div className="relative z-10 flex flex-col justify-between h-full">
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
                                    <span className="whoami-text flex items-center text-black"
                                          style={{ textShadow: '1px 1px 2px rgba(255,255,255,0.8), -1px -1px 2px rgba(255,255,255,0.8)' }}>
                                        Lire plus
                                        <ArrowRight className="ml-2 size-4" />
                                    </span>
                                </CardFooter>
                            </div>
                        </Card>

                    ))}
                </div>
            </div>
        </section>
    );
};

export { Activities };
