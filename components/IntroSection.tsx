
import React, { useEffect, useState, useRef } from 'react';
import { BIO_EVENTS, INTRO_SUMMARY, BIO_TEXT, GALLERY_IMAGES } from '../data/content';

const IntroSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [visibleIndexes, setVisibleIndexes] = useState<number[]>([]);
  const [musicalBackground, setMusicalBackground] = useState<React.ReactNode>(null);
  
  // Refs for navigation
  const introRef = useRef<HTMLElement>(null);
  const bioRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLElement>(null);

  // Gallery Slideshow Timer
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % GALLERY_IMAGES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  // Generate Abstract Musical Background
  useEffect(() => {
    const symbols = ['𝄢', '𝄡', '♩', '♪', '♫', '♬', '♭', '♮', '♯', '𝄪'];
    const elements = Array.from({ length: 30 }).map((_, i) => (
      <div
        key={i}
        className="absolute text-zinc-500 font-serif select-none pointer-events-none mix-blend-overlay"
        style={{
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          fontSize: `${Math.random() * 12 + 4}rem`, // Giant notes
          opacity: Math.random() * 0.1 + 0.02,
          transform: `rotate(${Math.random() * 60 - 30}deg) scale(${Math.random() * 0.5 + 0.5})`,
          filter: `blur(${Math.random() * 6}px)`
        }}
      >
        {symbols[Math.floor(Math.random() * symbols.length)]}
      </div>
    ));
    setMusicalBackground(elements);
  }, []);

  // Timeline Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-index'));
            setVisibleIndexes((prev) => (prev.includes(index) ? prev : [...prev, index]));
          }
        });
      },
      { threshold: 0.2 } 
    );

    document.querySelectorAll('.timeline-item').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-zinc-50 text-zinc-900 relative">
      
      {/* Right Side In-Page Navigation */}
      <div className="hidden md:flex flex-col fixed right-6 top-1/2 -translate-y-1/2 z-40 gap-6 mix-blend-difference text-zinc-500">
        <NavAnchor label="Intro" onClick={() => scrollToSection(introRef)} />
        <NavAnchor label="Bio" onClick={() => scrollToSection(bioRef)} />
        <NavAnchor label="Time" onClick={() => scrollToSection(timelineRef)} />
      </div>

      {/* 1. Manifesto / Summary (Full Width) */}
      <section ref={introRef} className="px-6 py-32 max-w-5xl mx-auto text-center scroll-mt-24">
        <div className="inline-block border-b-2 border-black pb-8 mb-8">
            <span className="font-mono text-xs uppercase tracking-[0.4em] text-zinc-400">Introduction</span>
        </div>
        <p className="text-2xl md:text-4xl leading-relaxed font-serif font-light text-zinc-900 antialiased">
          {INTRO_SUMMARY}
        </p>
      </section>

      {/* 2. Split Layout: Sticky Gallery (Left) + Biography (Right) */}
      <section ref={bioRef} className="w-full max-w-7xl mx-auto px-4 md:px-8 border-t border-zinc-200 scroll-mt-24">
        <div className="flex flex-col md:flex-row">
            
            {/* Left Column: Sticky Gallery */}
            <div className="md:w-1/2 md:h-screen md:sticky md:top-16 flex items-center justify-center p-6 md:p-12 md:border-r border-zinc-200 bg-zinc-100 overflow-hidden">
                <div className="relative w-full aspect-[3/4] md:aspect-square bg-zinc-200 shadow-xl p-4 md:p-8 transform rotate-1 transition-transform hover:rotate-0 duration-700">
                    {/* Frame visuals */}
                    <div className="absolute top-4 left-4 right-4 bottom-4 border border-zinc-300 pointer-events-none z-20"></div>
                    
                    {GALLERY_IMAGES.map((imgSrc, index) => (
                        <div 
                            key={`img-${index}`}
                            className={`absolute inset-0 p-8 md:p-12 transition-all duration-1000 ease-in-out bg-zinc-100 ${
                                index === currentSlide ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-95 z-0'
                            }`}
                        >
                            <img 
                                src={imgSrc} 
                                alt={`John Cage ${index}`} 
                                className="w-full h-full object-contain grayscale contrast-125"
                                onError={(e) => {
                                    (e.target as HTMLImageElement).style.display = 'none'; 
                                }}
                            />
                        </div>
                    ))}
                    
                    <div className="absolute bottom-6 right-6 z-30 font-mono text-[10px] text-zinc-400 uppercase tracking-widest bg-zinc-100 px-2">
                        Fig. {currentSlide + 1}
                    </div>
                </div>
            </div>

            {/* Right Column: Scrolling Biography */}
            <div className="md:w-1/2 p-6 md:p-24 bg-white">
                <div className="mb-12">
                    <span className="text-xs font-mono uppercase tracking-widest text-zinc-500 block mb-4">
                        Biography
                    </span>
                    <h2 className="text-5xl md:text-7xl font-bold font-mono leading-none tracking-tighter mb-6 break-words">
                        {BIO_TEXT.title}
                    </h2>
                    <p className="text-xl italic text-zinc-500 font-serif border-l-4 border-black pl-6">
                        {BIO_TEXT.subtitle}
                    </p>
                </div>
                
                <div className="space-y-8 text-lg md:text-xl text-zinc-800 leading-loose font-light font-sans">
                    {BIO_TEXT.paragraphs.map((para, i) => (
                        <p key={i}>
                            {/* Improved Drop Cap: float-left, reasonable text size, properly adjusted margins */}
                            <span className="float-left text-4xl md:text-5xl font-bold font-mono mr-3 mt-[-6px] leading-none">
                                {para.charAt(0)}
                            </span>
                            {para.slice(1)}
                        </p>
                    ))}
                </div>
                
                <div className="mt-24 pt-12 border-t border-dashed border-zinc-300">
                    <p className="font-mono text-xs uppercase tracking-widest text-zinc-400 text-center">
                        End of Biography
                    </p>
                </div>
            </div>
        </div>
      </section>

      {/* 3. Staggered Timeline (The "Score") */}
      <section ref={timelineRef} className="py-32 bg-zinc-900 text-zinc-100 overflow-hidden relative scroll-mt-0">
         
         {/* --- Musical Background --- */}
         <div className="absolute inset-0 pointer-events-none">
             {/* Staves: Groups of 5 lines, repeated */}
             <div className="absolute inset-0 opacity-10 flex flex-col gap-48 pt-20">
                 {[...Array(6)].map((_, groupIndex) => (
                     <div key={groupIndex} className="flex flex-col gap-3 w-full transform -rotate-2 scale-110 origin-left">
                         {[...Array(5)].map((_, lineIndex) => (
                             <div key={lineIndex} className="w-full h-px bg-zinc-400"></div>
                         ))}
                     </div>
                 ))}
             </div>
             
             {/* Random Notes */}
             {musicalBackground}
         </div>

        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <h2 className="text-center font-mono font-bold text-4xl md:text-6xl mb-24 tracking-tighter mix-blend-difference">
              CHRONOLOGY
          </h2>
          
          <div className="relative">
            {/* Central Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-zinc-700 md:-ml-px"></div>

            {BIO_EVENTS.map((event, index) => (
              <div 
                key={index} 
                data-index={index}
                className={`timeline-item relative mb-24 flex flex-col md:flex-row items-center transition-all duration-1000 ease-out ${
                   visibleIndexes.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                } ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                
                {/* 50% Empty Space */}
                <div className="hidden md:block w-1/2"></div>
                
                {/* Center Node */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-zinc-900 border-2 border-white rounded-full md:-ml-2 z-20"></div>
                
                {/* Content Block */}
                <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-12">
                   <div className="bg-zinc-800/90 backdrop-blur-sm p-8 border border-zinc-700 shadow-2xl relative group hover:border-zinc-500 transition-colors">
                       {/* Connecting Line (Horizontal) */}
                       <div className={`hidden md:block absolute top-1/2 w-12 h-px bg-zinc-700 ${index % 2 === 0 ? '-right-12' : '-left-12'}`}></div>
                       
                       {/* Background Date Watermark - Using YEAR only */}
                       <span className={`absolute -top-6 left-6 font-bold font-mono text-zinc-700 opacity-50 z-0 group-hover:text-zinc-600 transition-colors whitespace-nowrap overflow-hidden max-w-full ${event.year.length > 5 ? 'text-4xl md:text-5xl top-[-1.5rem]' : 'text-6xl md:text-8xl'}`}>
                           {event.year}
                       </span>
                       
                       <div className="relative z-10 pt-6">
                           {/* Main Title is now the Event Title */}
                           <h3 className="text-xl md:text-2xl font-bold font-mono mb-3 text-white">{event.title}</h3>
                           <p className="text-zinc-400 leading-relaxed font-light">{event.description}</p>
                       </div>
                   </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

// Mini Navigation Component
const NavAnchor: React.FC<{ label: string; onClick: () => void }> = ({ label, onClick }) => (
  <button 
    onClick={onClick}
    className="group flex flex-row-reverse items-center gap-3 outline-none"
  >
    <div className="w-1.5 h-1.5 bg-zinc-400 rounded-full group-hover:bg-zinc-900 transition-colors"></div>
    <span className="text-[10px] font-mono uppercase tracking-widest opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300">
      {label}
    </span>
  </button>
);

export default IntroSection;
