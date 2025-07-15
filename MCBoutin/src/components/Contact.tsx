import { useState } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import "../styles/global.css";

interface ContactProps {
    heading?: string;
    phone?: string;
    email?: string;
    address?: string;
    mapUrl?: string;
}

const Contact = ({
    heading = "Me contacter",
    phone = "+33 6 99 34 55 41",
    mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2708.807!2d-1.553424084711!3d47.237856179189!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4805ee8e5e5e5e5e%3A0x1234567890abcdef!2s134%20Rue%20du%20Croissant%2C%2044300%20Nantes!5e0!3m2!1sfr!2sfr!4v1625000000000!5m2!1sfr!2sfr"
}: ContactProps) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('idle');

        try {
            // SOLUTION NETLIFY FORMS - Intégré, fiable, 100 emails/mois gratuit
            // Aucun compte externe requis, tout se gère dans le dashboard Netlify
            
            const formDataToSend = new FormData();
            formDataToSend.append('form-name', 'contact-mcboutin'); // Nom du formulaire
            formDataToSend.append('name', formData.name);
            formDataToSend.append('email', formData.email);
            formDataToSend.append('subject', formData.subject);
            formDataToSend.append('message', formData.message);

            const response = await fetch('/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: new URLSearchParams(formDataToSend as any).toString()
            });

            if (response.ok) {
                setSubmitStatus('success');
                setFormData({ name: '', email: '', subject: '', message: '' });
            } else {
                setSubmitStatus('error');
            }

        } catch (error) {
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="pt-0 pb-20" style={{ scrollMarginTop: '100px' }}>
            <div className="container mx-auto px-4 lg:px-16">
                {/* Titre */}
                <div className="text-center mb-12">
                    <h2 className="text-2xl sm:text-3xl font-semibold text-black">{heading}</h2>
                    
                    {/* Paragraphe explicatif */}
                    <div className="mt-8 max-w-4xl mx-auto">
                        <p className="whoami-text text-black leading-relaxed mb-8 text-base">
                            Pour prendre rendez-vous, n'hésitez pas à me contacter soit par téléphone soit via le formulaire ci-dessous. 
                            Je suis là pour répondre à toutes vos questions et vous accompagner dans votre démarche en toute bienveillance.
                        </p>
                        
                        {/* Tarification */}
                        <div className="text-center">
                            <h3 className="whoami-text text-black font-semibold text-lg mb-4">Tarification</h3>
                            <div className="flex flex-wrap justify-center gap-8 whoami-text text-black text-base">
                                <div className="text-center">
                                    <span className="font-semibold">Thérapie individuelle :</span> 65€
                                </div>
                                <div className="text-center">
                                    <span className="font-semibold">Thérapie couple et famille :</span> 85€
                                </div>
                                <div className="text-center">
                                    <span className="font-semibold">Coaching :</span> Tarification sur devis uniquement
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Colonne gauche - Informations de contact et formulaire */}
                    <div className="space-y-8 flex flex-col">
                        {/* Téléphone */}
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#f8c8d0' }}>
                                <Phone className="w-6 h-6 text-black" />
                            </div>
                            <div>
                                <p className="whoami-text font-semibold">Téléphone</p>
                                <a 
                                    href={`tel:${phone.replace(/\s/g, '')}`}
                                    className="whoami-text text-gray-600 hover:text-black transition-colors"
                                >
                                    {phone}
                                </a>
                            </div>
                        </div>

                        {/* Formulaire de contact */}
                        <div className="bg-white/10 backdrop-blur-none border-0 rounded-lg p-6 shadow-lg flex-1">
                            <h3 className="whoami-text text-lg font-semibold mb-4">Envoyez-moi un message</h3>
                            
                            <form 
                                name="contact-mcboutin"
                                method="POST"
                                data-netlify="true"
                                data-netlify-honeypot="bot-field"
                                onSubmit={handleSubmit} 
                                className="space-y-3"
                            >
                                {/* Champ anti-spam caché */}
                                <input type="hidden" name="form-name" value="contact-mcboutin" />
                                <div style={{ display: 'none' }}>
                                    <label>Don't fill this out: <input name="bot-field" /></label>
                                </div>
                                {/* Nom */}
                                <div>
                                    <label htmlFor="name" className="whoami-text block text-sm font-medium mb-1">
                                        Nom *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-300 focus:border-transparent text-black text-sm"
                                        placeholder="Votre nom"
                                    />
                                </div>

                                {/* Email */}
                                <div>
                                    <label htmlFor="email" className="whoami-text block text-sm font-medium mb-1">
                                        Email *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-300 focus:border-transparent text-black text-sm"
                                        placeholder="votre.email@exemple.com"
                                    />
                                </div>

                                {/* Sujet */}
                                <div>
                                    <label htmlFor="subject" className="whoami-text block text-sm font-medium mb-1">
                                        Sujet *
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-300 focus:border-transparent text-black text-sm"
                                        placeholder="Objet de votre message"
                                    />
                                </div>

                                {/* Message */}
                                <div>
                                    <label htmlFor="message" className="whoami-text block text-sm font-medium mb-1">
                                        Message *
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        required
                                        rows={4}
                                        className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-300 focus:border-transparent text-black text-sm resize-vertical"
                                        placeholder="Votre message..."
                                    />
                                </div>

                                {/* Messages de statut */}
                                {submitStatus === 'success' && (
                                    <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
                                        Message envoyé avec succès ! Je vous répondrai dans les plus brefs délais.
                                    </div>
                                )}

                                {submitStatus === 'error' && (
                                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                                        Erreur lors de l'envoi. Veuillez réessayer ou me contacter directement.
                                    </div>
                                )}

                                {/* Bouton d'envoi */}
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full whoami-text inline-flex items-center justify-center gap-2 text-black px-6 py-3 rounded-lg transition-colors duration-200 text-sm font-medium hover:opacity-80 disabled:opacity-50 disabled:cursor-not-allowed"
                                    style={{ backgroundColor: '#f8c8d0' }}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                                            Envoi en cours...
                                        </>
                                    ) : (
                                        <>
                                            <Send className="w-4 h-4" />
                                            Envoyer le message
                                        </>
                                    )}
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Colonne droite - Carte alignée avec le formulaire seulement */}
                    <div className="h-full flex items-end">
                        <div className="bg-white/10 backdrop-blur-none border-0 rounded-lg overflow-hidden shadow-lg w-full flex flex-col" style={{ height: '500px' }}>
                            <div className="p-6 flex-shrink-0">
                                <h3 className="whoami-text text-lg font-semibold mb-4 flex items-center gap-2">
                                    <MapPin className="w-5 h-5" />
                                    Où me trouver
                                </h3>
                            </div>
                            <div className="relative w-full flex-1">
                                <iframe
                                    src={mapUrl}
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Localisation du cabinet"
                                    className="rounded-b-lg"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export { Contact };
