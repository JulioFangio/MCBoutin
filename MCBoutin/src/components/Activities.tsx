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
            title: "Getting Started with shadcn/ui Components",
            summary:
                "Learn how to quickly integrate and customize shadcn/ui components in your Next.js projects. We'll cover installation, theming, and best practices for building modern interfaces.",
            label: "Tutorial",
            author: "Sarah Chen",
            published: "1 Jan 2024",
            url: "https://shadcnblocks.com",
            image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg",
        },
        {
            id: "post-2",
            title: "Building Accessible Web Applications",
            summary:
                "Explore how to create inclusive web experiences using shadcn/ui's accessible components. Discover practical tips for implementing ARIA labels, keyboard navigation, and semantic HTML.",
            label: "Accessibility",
            author: "Marcus Rodriguez",
            published: "1 Jan 2024",
            url: "https://shadcnblocks.com",
            image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg",
        },
        {
            id: "post-3",
            title: "Modern Design Systems with Tailwind CSS",
            summary:
                "Dive into creating scalable design systems using Tailwind CSS and shadcn/ui. Learn how to maintain consistency while building flexible and maintainable component libraries.",
            label: "Design Systems",
            author: "Emma Thompson",
            published: "1 Jan 2024",
            url: "https://shadcnblocks.com",
            image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg",
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
                        <Card key={post.id} className="grid grid-rows-[auto_auto_1fr_auto] pt-0">
                            <div className="aspect-16/9 w-full">
                                <a
                                    href={post.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="transition-opacity duration-200 fade-in hover:opacity-70"
                                >
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="h-full w-full object-cover object-center"
                                    />
                                </a>
                            </div>
                            <CardHeader>
                                <h3 className="text-lg font-semibold hover:underline md:text-xl">
                                    <a href={post.url} target="_blank" rel="noopener noreferrer">
                                        {post.title}
                                    </a>
                                </h3>
                            </CardHeader>
                            <CardContent>
                                <p className="">{post.summary}</p>
                            </CardContent>
                            <CardFooter>
                                <a
                                    href={post.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center text-foreground hover:underline"
                                >
                                    Read more
                                    <ArrowRight className="ml-2 size-4" />
                                </a>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export { Activities };
