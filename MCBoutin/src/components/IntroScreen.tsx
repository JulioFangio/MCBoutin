import { useState, useEffect } from "react";

export default function IntroScreen() {
  const [visible, setVisible] = useState(true);
  const [isFading, setIsFading] = useState(false);

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
        src="/GIFMCB.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
        draggable={false}
      />
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
