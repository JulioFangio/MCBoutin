import { useState, useEffect } from "react";

export default function IntroScreen() {
  const [visible, setVisible] = useState(true);
  const [isFading, setIsFading] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [slowConnection, setSlowConnection] = useState(false);

  function handleStart() {
    setIsFading(true);
  }

  useEffect(() => {
    if (isFading) {
      const timeout = setTimeout(() => {
        setVisible(false);
      }, 1000); // durée du fade (1s)

      return () => clearTimeout(timeout);
    }
  }, [isFading]);

  // Préchargement intelligent de la vidéo
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowVideo(true);
    }, 100); // Délai minimal pour l'affichage du poster

    // Détection de connexion lente - si la vidéo ne charge pas dans 3 secondes
    const slowTimer = setTimeout(() => {
      if (!videoLoaded) {
        setSlowConnection(true);
      }
    }, 3000);

    return () => {
      clearTimeout(timer);
      clearTimeout(slowTimer);
    };
  }, [videoLoaded]);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-50 bg-black transition-opacity duration-1000 ${
        isFading ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Image poster immédiate */}
      <picture>
        <source srcSet="/video-poster.webp" type="image/webp" />
        <img
          src="/video-poster.jpg"
          alt="Introduction"
          className="absolute top-0 left-0 w-full h-full object-cover"
          draggable={false}
        />
      </picture>

      {/* Vidéo qui se charge après */}
      {showVideo && !slowConnection && (
        <video
          src="/GIFMCB-optimized.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 ${
            videoLoaded ? "opacity-100" : "opacity-0"
          }`}
          style={{ 
            animationPlayState: 'running',
            // Ralentit la vidéo à 40% de la vitesse normale pour un effet plus zen
            transform: 'scale(1)',
            filter: 'none'
          }}
          draggable={false}
          onCanPlay={() => {
            setVideoLoaded(true);
          }}
          onLoadedData={(e) => {
            // Ralentit la vitesse de lecture à 0.4 (40% de la vitesse normale)
            const video = e.target as HTMLVideoElement;
            video.playbackRate = 0.4;
          }}
          onLoadStart={() => {
            // Début du chargement vidéo
          }}
        />
      )}
      
      {/* Message pour connexion lente */}
      {slowConnection && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6 mx-4 max-w-md text-center">
            <h3 className="text-lg font-semibold mb-2">Connexion détectée comme lente</h3>
            <p className="text-gray-600 mb-4">
              Nous avons détecté une connexion plus lente. Vous pouvez continuer à attendre ou accéder directement au site.
            </p>
            <button
              onClick={handleStart}
              className="px-6 py-2 bg-[#f8c8d0] text-black font-semibold rounded-md hover:bg-[#e4a9bb] transition-colors"
            >
              Accéder au site maintenant
            </button>
          </div>
        </div>
      )}
      
      {/* Indicateur de chargement amélioré */}
      {showVideo && !videoLoaded && !slowConnection && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
          <div className="flex flex-col items-center space-y-4">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#f8c8d0]"></div>
            <div className="text-white text-sm opacity-80">Préparation de l'expérience...</div>
          </div>
        </div>
      )}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center space-y-3">
        <button
          onClick={handleStart}
          className="px-8 py-3 bg-[#f8c8d0] text-black font-semibold rounded-md shadow-md hover:bg-[#e4a9bb] transition-colors"
        >
          Entrer sur le site
        </button>
        
        {/* Bouton discret pour passer l'intro */}
        <button
          onClick={handleStart}
          className="text-white/60 hover:text-white/80 text-sm underline transition-colors"
        >
          Passer l'introduction
        </button>
      </div>
    </div>
  );
}
