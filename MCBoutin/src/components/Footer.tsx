import React from 'react';

const Footer = () => {
    return (
        <footer className="w-full bg-[#f8c8d0] py-12 mt-16">
            <div className="max-w-screen-2xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    {/* Première partie - Développeur */}
                    <div className="flex flex-col items-center space-y-3">
                        <img
                            src="/Logo-Noir-JDG.png"
                            alt="Logo Jules Duval-Girard"
                            className="h-24 w-auto object-contain"
                        />
                        <div className="space-y-1">
                            <h3 className="text-lg font-semibold text-black">
                                Jules Duval-Girard
                            </h3>
                            <p className="text-sm font-medium text-black/80">
                                Développeur & Software Engineer
                            </p>
                            <p className="text-xs text-black/70">
                                Conception & architecture du site
                            </p>
                        </div>
                    </div>

                    {/* Deuxième partie - Cliente */}
                    <div className="flex flex-col items-center space-y-3">
                        <img
                            src="/logo_mariechristineBOUTIN.png"
                            alt="Logo Marie-Christine Boutin"
                            className="h-16 w-auto object-contain"
                        />
                        <div className="space-y-1">
                            <h3 className="text-lg font-semibold text-black">
                                Marie-Christine Boutin
                            </h3>
                            <p className="text-sm font-medium text-black/80">
                                Thérapeute & Coach
                            </p>
                        </div>
                    </div>

                    {/* Troisième partie - Graphisme */}
                    <div className="flex flex-col items-center space-y-3">
                        <img
                            src="/logoYouka.png"
                            alt="Logo Youka"
                            className="h-16 w-auto object-contain"
                        />
                        <div className="space-y-1">
                            <img
                                src="/logoTypoYouka.png"
                                alt="logoTypoYouka"
                                className="h-8 w-auto object-contain mx-auto"
                            />
                            <h3 className="text-lg font-semibold text-black">
                                Clara Lauga
                            </h3>
                            <p className="text-sm font-medium text-black/80">
                                Graphisme Illustration Édition
                            </p>
                            <p className="text-xs text-black/70">
                                Direction graphique & identité visuelle
                            </p>
                        </div>
                    </div>
                </div>

                {/* Ligne décorative */}
                <div className="w-full flex justify-center mt-8 mb-4">
                    <img
                        src="/trait1_rose.png"
                        alt="Ligne de séparation"
                        style={{ height: "10px", width: "auto", maxWidth: "200px" }}
                        className="opacity-70"
                    />
                </div>

                {/* Copyright */}
                <div className="text-center">
                    <p className="text-xs text-black/60">
                        © 2025 Marie-Christine Boutin - Tous droits réservés
                    </p>
                </div>
            </div>
        </footer>
    );
};

export { Footer };
