
import React, { useState, useEffect } from 'react';
import { PIANO_ARCHIVE } from '../data/content';
import { PianoWork } from '../types';

const MusicExhibition: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [highlightedId, setHighlightedId] = useState<string | null>(null);
  
  // Group by decade helper
  const groupedWorks = PIANO_ARCHIVE.reduce((acc, work) => {
    if (!acc[work.decade]) {
      acc[work.decade] = [];
    }
    acc[work.decade].push(work);
    return acc;
  }, {} as Record<string, PianoWork[]>);

  // Default state: all expanded
  const [expandedDecades, setExpandedDecades] = useState<Record<string, boolean>>(
    Object.keys(groupedWorks).reduce((acc, key) => ({ ...acc, [key]: true }), {})
  );

  const toggleDecade = (decade: string) => {
    setExpandedDecades(prev => ({ ...prev, [decade]: !prev[decade] }));
  };

  const handleRandomSelect = () => {
    const randomWork = PIANO_ARCHIVE[Math.floor(Math.random() * PIANO_ARCHIVE.length)];
    setHighlightedId(randomWork.id);
    setSearchTerm(''); // Clear search so we can see it
    
    // Ensure the decade is expanded
    setExpandedDecades(prev => ({ ...prev, [randomWork.decade]: true }));

    // Scroll into view logic
    setTimeout(() => {
        const el = document.getElementById(`work-${randomWork.id}`);
        el?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 100);
  };

  // Filter logic
  const filteredGroups = Object.keys(groupedWorks).reduce((acc, decade) => {
    const works = groupedWorks[decade].filter(w => 
      w.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      w.year.includes(searchTerm) ||
      (w.note && w.note.toLowerCase().includes(searchTerm.toLowerCase()))
    );
    if (works.length > 0) {
      acc[decade] = works;
    }
    return acc;
  }, {} as Record<string, PianoWork[]>);

  return (
    <div className="bg-black min-h-screen pt-24 pb-24 px-4 md:px-8 font-mono text-zinc-300">
      
      {/* Header Area */}
      <div className="max-w-6xl mx-auto mb-12 border-b border-zinc-800 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
           <h2 className="text-4xl md:text-6xl font-bold text-white mb-2 tracking-tighter">
             THE PIANO ARCHIVE
           </h2>
           <p className="text-xs text-zinc-500 uppercase tracking-widest">
             Cataloging silence, noise, and prepared strings (1933–1992)
           </p>
        </div>

        {/* Search Input */}
        <div className="w-full md:w-auto relative">
           <input 
             type="text" 
             placeholder="SEARCH ARCHIVE..." 
             value={searchTerm}
             onChange={(e) => setSearchTerm(e.target.value)}
             className="bg-zinc-900 border border-zinc-700 text-white px-4 py-2 w-full md:w-64 focus:outline-none focus:border-white transition-colors uppercase text-sm placeholder-zinc-600"
           />
           {searchTerm && (
             <button 
               onClick={() => setSearchTerm('')}
               className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-white"
             >
               ✕
             </button>
           )}
        </div>
      </div>

      {/* Archive List */}
      <div className="max-w-6xl mx-auto space-y-8 animate-fade-in">
        {Object.keys(filteredGroups).length === 0 ? (
           <div className="text-center py-24 text-zinc-600 border border-zinc-800 border-dashed">
              NO RECORDS FOUND IN THE ARCHIVE.
           </div>
        ) : (
          Object.keys(filteredGroups).map((decade) => (
            <div key={decade} className="border border-zinc-800 bg-zinc-950/50">
              
              {/* Decade Header */}
              <button 
                onClick={() => toggleDecade(decade)}
                className="w-full flex justify-between items-center p-4 bg-zinc-900/80 hover:bg-zinc-800 transition-colors text-left border-b border-zinc-800"
              >
                 <span className="text-xl md:text-2xl font-bold text-white tracking-tight">
                    {decade}
                 </span>
                 <span className="text-xs text-zinc-500 uppercase tracking-widest">
                    [{expandedDecades[decade] ? 'COLLAPSE' : 'EXPAND'}]
                 </span>
              </button>

              {/* Works List */}
              {expandedDecades[decade] && (
                <div className="divide-y divide-zinc-900">
                   {filteredGroups[decade].map((work) => (
                     <div 
                       id={`work-${work.id}`}
                       key={work.id}
                       className={`
                         grid grid-cols-1 md:grid-cols-12 gap-4 p-4 md:p-6 transition-all duration-500
                         ${highlightedId === work.id 
                            ? 'bg-white text-black shadow-[0_0_30px_rgba(255,255,255,0.2)] scale-[1.01] border-l-4 border-black' 
                            : 'hover:bg-zinc-900 text-zinc-400 hover:text-zinc-200 border-l-4 border-transparent'
                         }
                       `}
                     >
                        {/* Year */}
                        <div className="md:col-span-2 font-bold opacity-70">
                           {work.year}
                        </div>
                        
                        {/* Title */}
                        <div className="md:col-span-6 font-bold text-lg leading-tight">
                           {work.title}
                        </div>
                        
                        {/* Notes */}
                        <div className="md:col-span-4 text-sm md:text-right opacity-60 italic">
                           {work.note}
                        </div>
                     </div>
                   ))}
                </div>
              )}
            </div>
          ))
        )}
      </div>

      {/* "Chance Operation" Floating Button */}
      <button
        onClick={handleRandomSelect}
        className="fixed bottom-8 right-8 z-50 bg-white text-black w-16 h-16 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 group"
        title="Chance Operation (Random Selection)"
      >
         <span className="text-2xl font-serif group-hover:rotate-180 transition-transform duration-700">⚄</span>
      </button>

    </div>
  );
};

export default MusicExhibition;
