import { ArrowRight } from "lucide-react";
import "../styles/global.css";

import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "@/components/ui/card";

interface Post {
    id: string;
    title: string;
    summary: string;
    label: string;
    author: string;
    published: string;
    url: string;
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
            title: "Accompagnement individuel",
            summary: "Un espace de parole bienveillant pour explorer vos questionnements personnels et retrouver votre chemin.",
            label: "Individuel",
            author: "Marie-Christine Boutin",
            published: "1 Jan 2024",
            url: "#contact",
            image: "/forme1-min.png",
        },
        {
            id: "post-2",
            title: "Thérapie familiale",
            summary: "Accompagnement des familles pour améliorer la communication et résoudre les conflits relationnels.",
            label: "Familial",
            author: "Marie-Christine Boutin",
            published: "1 Jan 2024",
            url: "#contact",
            image: "/forme2-min.png",
        },
        {
            id: "post-3",
            title: "Guidance parentale",
            summary: "Soutien aux parents dans leur rôle éducatif et dans la compréhension des besoins de leurs enfants.",
            label: "Parental",
            author: "Marie-Christine Boutin",
            published: "1 Jan 2024",
            url: "#contact",
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
                        <Card key={post.id} className="relative overflow-hidden h-[400px] text-white border-0 shadow-lg">
                            {/* Image en background */}
                            <div
                                className="absolute inset-0 bg-cover bg-center bg-gray-300"
                                style={{ backgroundImage: `url(${post.image})` }}
                            />

                            {/* Overlay pour améliorer la lisibilité */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                            {/* Contenu principal */}
                            <div className="relative z-10 flex flex-col justify-end h-full">
                                <CardHeader className="px-6 pb-2">
                                    <h3 className="text-lg font-semibold hover:underline md:text-xl drop-shadow-lg">
                                        <a href={post.url} target="_blank" rel="noopener noreferrer">
                                            {post.title}
                                        </a>
                                    </h3>
                                </CardHeader>

                                <CardContent className="pb-2">
                                    <p className="text-sm drop-shadow-md">{post.summary}</p>
                                </CardContent>

                                <CardFooter className="pt-2">
                                    <a
                                        href={post.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center text-white hover:underline drop-shadow-md"
                                    >
                                        Lire plus
                                        <ArrowRight className="ml-2 size-4" />
                                    </a>
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
