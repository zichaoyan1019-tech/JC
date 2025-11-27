
import React, { useState, useEffect } from 'react';
import { QUOTES } from '../data/content';

const Hero: React.FC = () => {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [fade, setFade] = useState(true);

  // Mouse parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (window.innerWidth / 2 - e.clientX) / 30;
      const y = (window.innerHeight / 2 - e.clientY) / 30;
      setOffset({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Quote rotation logic
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // Start fade out
      setTimeout(() => {
        setCurrentQuoteIndex((prev) => (prev + 1) % QUOTES.length);
        setFade(true); // Start fade in
      }, 500); // Wait for fade out to complete
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-screen flex flex-col items-center justify-center relative overflow-hidden bg-zinc-950 border-b border-zinc-800">
      
      {/* Background Image Layer (Blurred) */}
      <div className="absolute inset-0 z-0">
          <img 
            src="/JC/images/slide1.jpg" 
            alt="Atmospheric Background" 
            className="w-full h-full object-cover opacity-30 blur-sm scale-105"
          />
          {/* Gradient Overlay to ensure text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/80 via-zinc-950/50 to-zinc-950"></div>
          <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Background Grid */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none transition-transform duration-75 ease-out z-0"
        style={{
          backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          transform: `translate(${offset.x}px, ${offset.y}px)`
        }}
      />
      
      <div className="z-10 text-center p-4 w-full max-w-4xl px-8">
        <div className="mb-4 text-xs font-mono text-zinc-400 tracking-[0.3em] uppercase">
          John Cage Exhibition
        </div>
        <h1 
          className="text-7xl md:text-[10rem] leading-none font-bold font-mono tracking-tighter text-white mix-blend-difference mb-8 select-none"
          style={{ 
            textShadow: `${offset.x}px ${offset.y}px 0px rgba(255,255,255,0.1)` 
          }}
        >
          JOHN<br/>CAGE
        </h1>
        
        {/* Dynamic Quote Carousel */}
        <div className="h-24 md:h-16 flex items-center justify-center">
            <p 
                className={`text-lg md:text-xl text-zinc-300 font-light tracking-widest uppercase transition-opacity duration-500 ease-in-out ${fade ? 'opacity-100' : 'opacity-0'}`}
                style={{ textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}
            >
                "{QUOTES[currentQuoteIndex]}"
            </p>
        </div>
      </div>
      
      <div className="absolute bottom-12 text-zinc-500 font-mono text-xs uppercase tracking-widest animate-pulse z-10">
        Scroll to read biography
      </div>
    </div>
  );
};

export default Hero;