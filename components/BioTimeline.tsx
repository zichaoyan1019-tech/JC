import React, { useEffect, useRef, useState } from 'react';
import { BIO_EVENTS } from '../data/content';

const BioTimeline: React.FC = () => {
  const [visibleIndexes, setVisibleIndexes] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

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

    const elements = document.querySelectorAll('.bio-item');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="py-24 bg-white text-black relative">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <h2 className="text-4xl md:text-6xl font-mono font-bold mb-16 border-b-2 border-black pb-4">
          LIFE & PHILOSOPHY
        </h2>

        <div className="relative border-l border-zinc-300 ml-4 md:ml-0 space-y-16">
          {BIO_EVENTS.map((event, index) => (
            <div 
              key={index} 
              data-index={index}
              className={`bio-item pl-8 md:pl-12 transition-all duration-1000 transform ${
                visibleIndexes.includes(index) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="absolute -left-[5px] w-2.5 h-2.5 bg-black rounded-full mt-2"></div>
              <span className="font-mono text-zinc-500 text-sm tracking-widest block mb-2">
                {event.year}
              </span>
              <h3 className="text-2xl md:text-3xl font-bold mb-3 font-mono">{event.title}</h3>
              <p className="text-zinc-600 leading-relaxed text-lg max-w-xl">
                {event.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Decorative vertical text */}
      <div className="absolute top-0 right-4 h-full hidden md:flex flex-col justify-center pointer-events-none select-none overflow-hidden">
        <h1 className="text-[12rem] font-bold text-zinc-100 opacity-50 whitespace-nowrap rotate-90 origin-right">
            TIMELINE
        </h1>
      </div>
    </div>
  );
};

export default BioTimeline;