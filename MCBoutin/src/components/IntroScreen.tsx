import { useState, useEffect } from "react";

export default function IntroScreen() {
  const [visible, setVisible] = useState(true);
  const [isFading, setIsFading] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);

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

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-50 bg-black transition-opacity duration-1000 ${
        isFading ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <video
        src="/GIFMCB-optimized.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        className="absolute top-0 left-0 w-full h-full object-cover"
        draggable={false}
        onLoadStart={() => console.log('Video loading started')}
        onCanPlay={() => {
          console.log('Video can start playing');
          setVideoLoaded(true);
        }}
      />
      
      {/* Indicateur de chargement */}
      {!videoLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-black">
          <div className="text-white text-lg">Chargement...</div>
        </div>
      )}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <button
          onClick={handleStart}
          className="px-8 py-3 bg-[#f8c8d0] text-black font-semibold rounded-md shadow-md hover:bg-[#e4a9bb] transition-colors"
        >
          Entrer sur le site
        </button>
      </div>
    </div>
  );
}
