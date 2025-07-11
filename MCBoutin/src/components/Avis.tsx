import { Star, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import GooglePlacesService from "../services/googlePlaces";
import "../styles/global.css";

interface Review {
    id: string;
    author: string;
    rating: number;
    text: string;
    date: string;
    initial: string;
    profilePhoto?: string;
}

interface BusinessInfo {
    name: string;
    address: string;
    rating: number;
    totalReviews: number;
}

interface AvisProps {
    heading?: string;
    businessName?: string;
    businessAddress?: string;
    apiKey?: string;
    fallbackReviews?: Review[];
}

const Avis = ({
    heading = "Avis",
    businessName = "Thérapie individuelle et familiale - Marie-Christine BOUTIN",
    businessAddress = "134 Rue du Croissant, 44300 Nantes",
    apiKey,
    fallbackReviews = [
        {
            id: "review-1",
            author: "Sophie M.",
            rating: 5,
            text: "Un accompagnement professionnel et bienveillant. Marie-Christine m'a aidée à traverser une période difficile avec beaucoup d'écoute et de justesse. Je recommande vivement.",
            date: "Il y a 2 mois",
            initial: "S"
        },
        {
            id: "review-2", 
            author: "Jean-Pierre L.",
            rating: 5,
            text: "Excellente thérapeute, très à l'écoute. Les séances m'ont permis de mieux comprendre mes difficultés relationnelles et de retrouver confiance en moi.",
            date: "Il y a 3 mois",
            initial: "J"
        },
        {
            id: "review-3",
            author: "Marie D.",
            rating: 5,
            text: "Un accompagnement précieux lors de ma reconversion professionnelle. Approche humaine et professionnelle. Je recommande sans hésitation.",
            date: "Il y a 4 mois",
            initial: "M"
        },
        {
            id: "review-4",
            author: "Thomas R.",
            rating: 5,
            text: "Thérapeute compétente qui m'a aidé à surmonter une période de crise. Son approche bienveillante et ses conseils éclairés ont été déterminants.",
            date: "Il y a 5 mois",
            initial: "T"
        },
        {
            id: "review-5",
            author: "Claire B.",
            rating: 5,
            text: "Un vrai soutien durant ma thérapie familiale. Marie-Christine a su créer un climat de confiance qui a permis à toute la famille de s'exprimer librement.",
            date: "Il y a 6 mois",
            initial: "C"
        }
    ]
}: AvisProps) => {
    const [reviews, setReviews] = useState<Review[]>(fallbackReviews.slice(0, 3)); // Limiter à 3 avis
    const [businessInfo, setBusinessInfo] = useState<BusinessInfo>({
        name: businessName,
        address: businessAddress,
        rating: 5.0,
        totalReviews: fallbackReviews.length
    });
    const [loading, setLoading] = useState(false);
    const [useGoogleReviews, setUseGoogleReviews] = useState(false);
    const [expandedReviews, setExpandedReviews] = useState<{[key: string]: boolean}>({});

    const toggleReview = (reviewId: string) => {
        setExpandedReviews(prev => ({
            ...prev,
            [reviewId]: !prev[reviewId]
        }));
    };

    const truncateText = (text: string, maxLength: number = 150) => {
        if (text.length <= maxLength) return text;
        return text.slice(0, maxLength) + '...';
    };

    useEffect(() => {
        const loadGoogleReviews = async () => {
            setLoading(true);
            try {
                const googlePlacesService = new GooglePlacesService();
                const result = await googlePlacesService.getReviews(businessName, businessAddress);
                
                if (result && result.reviews.length > 0) {
                    // Limiter à 3 avis maximum même si Google en retourne plus
                    const limitedReviews = result.reviews.slice(0, 3);
                    setReviews(limitedReviews);
                    setBusinessInfo(result.businessInfo);
                    setUseGoogleReviews(true);
                } else {
                    // Utilisation des avis de démonstration en fallback (limités à 3)
                    setReviews(fallbackReviews.slice(0, 3));
                }
            } catch (error) {
                // Utilisation des avis de démonstration en cas d'erreur (limités à 3)
                setReviews(fallbackReviews.slice(0, 3));
            } finally {
                setLoading(false);
            }
        };

        loadGoogleReviews();
    }, [businessName, businessAddress]);
    const renderStars = (rating: number) => {
        return Array.from({ length: 5 }, (_, index) => (
            <Star
                key={index}
                className={`w-4 h-4 ${
                    index < rating 
                        ? "fill-yellow-400 text-yellow-400" 
                        : "text-gray-300"
                }`}
            />
        ));
    };

    return (
        <section id="avis" className="pt-0 pb-20" style={{ scrollMarginTop: '100px' }}>
            <div className="container mx-auto flex flex-col gap-8 px-4 lg:px-16">
                <div className="text-center">
                    <h2 className="mb-6 text-2xl sm:text-3xl font-semibold">{heading}</h2>
                </div>

                {loading && (
                    <div className="text-center">
                        <p className="whoami-text">Chargement des avis...</p>
                    </div>
                )}

                {/* Informations entreprise et note globale */}
                <div className="text-center mb-4">
                    <div className="flex items-center justify-center gap-2 mb-2">
                        {renderStars(Math.round(businessInfo.rating))}
                        <span className="whoami-text font-semibold text-lg ml-2">{businessInfo.rating.toFixed(1)}</span>
                        <span className="whoami-text text-sm text-gray-600">({businessInfo.totalReviews} avis)</span>
                    </div>
                    <p className="whoami-text text-sm text-gray-600">
                        {useGoogleReviews ? "Avis Google" : "Avis clients"}
                    </p>
                </div>

                {/* Grille des avis */}
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {reviews.map((review) => (
                        <div 
                            key={review.id}
                            className="bg-white/10 backdrop-blur-none border-0 rounded-lg p-6 shadow-lg flex flex-col"
                            style={{ 
                                minHeight: '280px',
                                alignSelf: 'start' // Empêche l'étirement vertical dans la grille
                            }}
                        >
                            {/* Header avec avatar et nom */}
                            <div className="flex items-center gap-3 mb-4">
                                {review.profilePhoto ? (
                                    <img 
                                        src={review.profilePhoto} 
                                        alt={review.author}
                                        className="w-10 h-10 rounded-full object-cover"
                                    />
                                ) : (
                                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
                                        {review.initial}
                                    </div>
                                )}
                                <div>
                                    <h4 className="whoami-text font-semibold text-sm">{review.author}</h4>
                                    <p className="whoami-text text-xs text-gray-600">{review.date}</p>
                                </div>
                            </div>

                            {/* Étoiles */}
                            <div className="flex gap-1 mb-3">
                                {renderStars(review.rating)}
                            </div>

                            {/* Texte de l'avis - avec hauteur flexible */}
                            <div className="whoami-text text-sm leading-relaxed flex-1">
                                {review.text.length > 150 ? (
                                    <div>
                                        <p>
                                            {expandedReviews[review.id] 
                                                ? review.text 
                                                : truncateText(review.text, 150)
                                            }
                                        </p>
                                        <button
                                            onClick={() => toggleReview(review.id)}
                                            className="whoami-text flex items-center text-black cursor-pointer hover:underline bg-transparent border-none focus:outline-none text-xs font-medium mt-2 transition-colors duration-200"
                                            style={{ 
                                                textShadow: '1px 1px 2px rgba(255,255,255,0.8), -1px -1px 2px rgba(255,255,255,0.8)',
                                                zIndex: 10,
                                                pointerEvents: 'auto'
                                            }}
                                        >
                                            {expandedReviews[review.id] ? 'Lire moins' : 'Lire plus'}
                                            <ArrowRight className={`ml-2 size-4 ${expandedReviews[review.id] ? 'rotate-180' : ''}`} />
                                        </button>
                                    </div>
                                ) : (
                                    <p>{review.text}</p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Call to action */}
                <div className="text-center mt-8">
                    <p className="whoami-text text-sm text-gray-600 mb-4">
                        Vous souhaitez laisser un avis sur votre expérience ?
                    </p>
                    <a 
                        href="https://www.google.com/search?q=Th%C3%A9rapie+individuelle+et+familiale+-+Marie-Christine+BOUTIN+134+Rue+du+Croissant+44300+Nantes"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="whoami-text inline-flex items-center gap-2 text-black px-6 py-3 rounded-lg transition-colors duration-200 text-sm font-medium hover:opacity-80"
                        style={{ backgroundColor: '#f8c8d0' }}
                    >
                        Laisser un avis Google
                    </a>
                </div>
            </div>
        </section>
    );
};

export { Avis };
