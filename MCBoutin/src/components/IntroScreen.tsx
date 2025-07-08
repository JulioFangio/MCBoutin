import { useState, useEffect, useRef } from "react";

export default function IntroScreen() {
  const [visible, setVisible] = useState(true);
  const [isFading, setIsFading] = useState(false);
  const hasFaded = useRef(false);
  const scrollResetInterval = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    function onScroll() {
      if (!hasFaded.current && window.scrollY > 0) {
        hasFaded.current = true;
        setIsFading(true);

        scrollResetInterval.current = setInterval(() => {
          window.scrollTo(0, 0);
        }, 50);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (scrollResetInterval.current) {
        clearInterval(scrollResetInterval.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isFading) {
      const timeout = setTimeout(() => {
        setVisible(false);
        if (scrollResetInterval.current) {
          clearInterval(scrollResetInterval.current);
          scrollResetInterval.current = null;
        }
        window.scrollTo(0, 0); // Assure la page d'accueil reste en haut
      }, 3000); // durée du fade

      return () => clearTimeout(timeout);
    }
  }, [isFading]);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-50 bg-black transition-opacity duration-[1800ms] ${
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
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-4 text-black z-10">
        <svg
          className="w-8 h-8 animate-bounce"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          role="img"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
        <p className="text-sm select-none">Faites défiler vers le bas</p>
        <svg
          className="w-8 h-8 animate-bounce transform scale-x-[-1]"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          role="img"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
  );
}
