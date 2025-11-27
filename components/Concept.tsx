
import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

// ==========================================
// DATA: Interactive Works Detail
// ==========================================
interface WorkDetail {
  id: string;
  title: string;
  year: string;
  desc: string;
  videoId: string; // YouTube ID
  scoreUrl?: string; // URL for direct image or link
  scoreIsWebPage?: boolean; // If true, we treat it as a link wrapper rather than a direct image
}

const INTERACTIVE_WORKS: Record<string, WorkDetail> = {
  "Sonatas and Interludes": {
    id: "sonatas",
    title: "Sonatas and Interludes",
    year: "1946–48",
    desc: "Sonatas and Interludes (1946–48) represents John Cage’s mature development of the prepared piano, inspired by Indian aesthetic theory of rasa — the eight “permanent emotions.” About 45 notes are prepared with screws, bolts, and other objects inserted between the strings, transforming the piano into a percussive ensemble. The cycle of sixteen sonatas and four interludes explores subtle modulations of timbre and proportion rather than dramatic contrasts, marking a turning point in Cage’s compositional voice.",
    videoId: "N6Sl5wmy9t4", 
    scoreUrl: "https://pages.dlib.indiana.edu/concern/scanned_resources/dv405sk331",
    scoreIsWebPage: true
  },
  "Music of Changes": {
    id: "changes",
    title: "Music of Changes",
    year: "1951",
    desc: "A groundbreaking work composed entirely using the I Ching (Book of Changes). Cage flipped coins to determine pitch, duration, and dynamics, effectively removing his personal taste from the creative process.",
    videoId: "B_8KqiNgmKQ",
    scoreUrl: "https://upload.wikimedia.org/wikipedia/commons/e/ea/Music_of_Changes_notation.png"
  },
  "4′33″": {
    id: "433",
    title: "4′33″",
    year: "1952",
    desc: "Cage's most famous and controversial work. The performer sits at the instrument and plays nothing for four minutes and thirty-three seconds. The piece is not silence, but the ambient sounds of the environment surrounding the audience.",
    videoId: "JTEFKFiXSx4",
    scoreUrl: "https://upload.wikimedia.org/wikipedia/en/d/d4/433_score.jpg"
  },
  "Concert for Piano and Orchestra": {
    id: "concert",
    title: "Concert for Piano and Orchestra",
    year: "1957–58",
    desc: "A seminal indeterminate work. The piano part consists of 84 different types of composition to be played in any order. The orchestra parts are graphic scores without a fixed master score.",
    videoId: "pGq86g66ZYE",
    scoreUrl: "https://media.moma.org/s/ge/collection_ge/35/35036195-20d0-482a-a92c-687f87a8636a_pred.jpg"
  },
  "Cheap Imitation": {
    id: "cheap",
    title: "Cheap Imitation",
    year: "1969",
    desc: "A 'chance-derived' arrangement of Erik Satie's 'Socrate'. Cage kept the rhythmic structure but used chance operations to alter the pitches, resulting in a haunting, modal melody.",
    videoId: "YtD5wXn4t1E",
    scoreUrl: "https://i.pinimg.com/736x/2a/1f/22/2a1f2249764585863333337351664421.jpg"
  },
  "Etudes Australes": {
    id: "australes",
    title: "Etudes Australes",
    year: "1974–75",
    desc: "A monumental cycle of 32 etudes based on star charts (Atlas Eclipticalis). The difficulty is extreme, requiring the pianist to play independent layers for each hand.",
    videoId: "q4l7uT_3C-M",
    scoreUrl: "https://i.pinimg.com/originals/c9/76/9a/c9769a53165241065181752d50848135.jpg"
  }
};

const CONCEPT_TIMELINE = [
  {
    period: "1938–1948",
    title: "Timbral Design & Prepared Piano",
    desc: "The piano becomes a percussion orchestra — sound as structure.",
    works: [
      { year: "1940", title: "Bacchanale" },
      { year: "1943", title: "Amores" },
      { year: "1946–48", title: "Sonatas and Interludes" } // Interactive
    ]
  },
  {
    period: "1951–1962",
    title: "Chance, Silence & Indeterminacy",
    desc: "Composing with chance and listening to silence as music itself.",
    works: [
      { year: "1951", title: "Music of Changes" }, // Interactive
      { year: "1952", title: "4′33″" }, // Interactive
      { year: "1957–58", title: "Concert for Piano and Orchestra" } // Interactive
    ]
  },
  {
    period: "1969–1992",
    title: "Time-Brackets & Ecology of Listening",
    desc: "Open temporal structures and an ecological approach to sound.",
    works: [
      { year: "1969", title: "Cheap Imitation" }, // Interactive
      { year: "1974–75", title: "Etudes Australes" }, // Interactive
      { year: "1987–92", title: "Number Pieces" }
    ]
  }
];

// ==========================================
// MODAL COMPONENT (Widened & Grid Layout using PORTAL)
// ==========================================
const WorkDetailModal: React.FC<{ workTitle: string; onClose: () => void }> = ({ workTitle, onClose }) => {
  const work = INTERACTIVE_WORKS[workTitle];
  
  if (!work) return null;

  // Using createPortal to attach the modal to document.body
  // This bypasses any parent transform/overflow issues, ensuring fixed positioning works relative to the viewport.
  return createPortal(
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-8 bg-black/95 backdrop-blur-md animate-fade-in">
      {/* Increased max-width to 7xl for theater mode */}
      <div className="bg-zinc-900 border border-amber-500/20 w-full max-w-7xl max-h-[90vh] overflow-y-auto rounded-xl shadow-2xl relative flex flex-col">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="fixed md:absolute top-6 right-6 text-zinc-400 hover:text-white z-50 p-2 bg-black/50 rounded-full transition-transform hover:scale-110 border border-white/10 hover:border-white"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
        </button>

        <div className="p-8 md:p-12">
            
            <div className="mb-8">
               <span className="font-mono text-amber-500 text-sm uppercase tracking-widest mb-2 block">
                 {work.year}
               </span>
               <h2 className="text-4xl md:text-6xl font-bold text-white leading-none tracking-tight">{work.title}</h2>
            </div>

            {/* Grid Layout: Text on Left, Media on Right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                
                {/* Column 1: Overview */}
                <div className="space-y-8">
                   <div className="bg-black/40 p-8 rounded-lg border border-white/5">
                      <h3 className="text-zinc-500 text-xs uppercase tracking-widest mb-4 font-mono">Overview</h3>
                      <p className="text-zinc-300 leading-loose font-light text-lg md:text-xl">
                        {work.desc}
                      </p>
                   </div>
                </div>

                {/* Column 2: Media (Score & Video) */}
                <div className="space-y-8">
                    
                    {/* Score Section */}
                    <div>
                        <div className="flex items-center justify-between mb-3">
                            <h3 className="text-amber-500 text-xs uppercase tracking-widest font-mono">Score</h3>
                            {work.scoreUrl && (
                                <a 
                                    href={work.scoreUrl} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="bg-white text-black text-[10px] md:text-xs px-3 py-1.5 rounded font-bold hover:bg-zinc-200 transition-colors uppercase tracking-wide"
                                >
                                    Open External Link ↗
                                </a>
                            )}
                        </div>
                        
                        <div className="w-full bg-zinc-950 border border-zinc-800 rounded-lg overflow-hidden relative group">
                            {work.scoreIsWebPage ? (
                                <div className="w-full h-[300px] relative bg-zinc-900 flex flex-col items-center justify-center">
                                    <p className="text-zinc-500 mb-4 px-4 text-center text-sm">
                                        Library Preview<br/>
                                        <span className="text-xs opacity-50">(Click button above if blank)</span>
                                    </p>
                                    <iframe 
                                        src={work.scoreUrl} 
                                        className="w-full h-full absolute inset-0 opacity-100 z-10 bg-white"
                                        title="Score Preview"
                                    />
                                </div>
                            ) : (
                                <div className="w-full bg-black/20 flex items-center justify-center h-[300px] md:h-[400px]">
                                    <img 
                                        src={work.scoreUrl} 
                                        alt="Score" 
                                        className="w-full h-full object-contain p-2" 
                                        onError={(e) => (e.target as HTMLImageElement).style.display = 'none'}
                                    />
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Video Section */}
                    <div>
                         <div className="flex items-center justify-between mb-3">
                            <h3 className="text-amber-500 text-xs uppercase tracking-widest font-mono">Recording</h3>
                            <a 
                                href={`https://www.youtube.com/watch?v=${work.videoId}`} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="bg-white text-black text-[10px] md:text-xs px-3 py-1.5 rounded font-bold hover:bg-zinc-200 transition-colors uppercase tracking-wide"
                            >
                                Open YouTube ↗
                            </a>
                        </div>
                        <div className="w-full aspect-video bg-black rounded-lg overflow-hidden border border-zinc-800 shadow-xl">
                           <iframe 
                             className="w-full h-full"
                             src={`https://www.youtube.com/embed/${work.videoId}`} 
                             title={work.title}
                             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                             allowFullScreen
                           ></iframe>
                        </div>
                    </div>

                </div>
            </div>

        </div>

      </div>
    </div>,
    document.body
  );
};

// ==========================================
// WIDGET 1: Prepared Piano (Improved Sound + Scale)
// ==========================================
const PREPARATIONS = ['Normal', 'Screw', 'Rubber', 'Metal', 'Coin'];
const KEYS = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];

// Map keys to semitone offsets from C (Diatonic Major Scale)
const NOTE_OFFSETS: Record<string, number> = {
  'C': 0, 'D': 2, 'E': 4, 'F': 5, 'G': 7, 'A': 9, 'B': 11
};

const PreparedPianoWidget: React.FC = () => {
  const [material, setMaterial] = useState('Normal');
  const [activeKey, setActiveKey] = useState<string | null>(null);
  const [visualizerHeight, setVisualizerHeight] = useState(0);

  const playSound = (note: string) => {
    setActiveKey(note);
    setVisualizerHeight(100); 
    setTimeout(() => setActiveKey(null), 200);

    const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
    if (!AudioContext) return;
    const ctx = new AudioContext();
    const t = ctx.currentTime;
    
    // Calculate Frequency based on Whole Steps/Half Steps (Major Scale)
    const semitones = NOTE_OFFSETS[note];
    // Base C4 = 261.63 Hz
    const baseFreq = 261.63 * Math.pow(2, semitones / 12); 

    const gain = ctx.createGain();
    const masterGain = ctx.createGain();
    masterGain.connect(ctx.destination);
    gain.connect(masterGain);
    
    const osc1 = ctx.createOscillator();
    const osc2 = ctx.createOscillator(); 
    const filter = ctx.createBiquadFilter();

    osc1.connect(filter);
    osc2.connect(filter);
    filter.connect(gain);

    // Advanced Synthesis Logic for softer/piano-like sounds
    switch (material) {
      case 'Normal':
        masterGain.gain.value = 0.5;
        osc1.type = 'triangle';
        osc2.type = 'sine';
        osc1.frequency.value = baseFreq;
        osc2.frequency.value = baseFreq * 2; 
        
        filter.type = 'lowpass';
        filter.frequency.value = 1200;
        filter.Q.value = 0.5;

        gain.gain.setValueAtTime(0, t);
        gain.gain.linearRampToValueAtTime(1, t + 0.01); 
        gain.gain.exponentialRampToValueAtTime(0.01, t + 2.0); 
        break;
      
      case 'Screw':
        masterGain.gain.value = 0.4;
        osc1.type = 'triangle';
        osc2.type = 'square';
        osc1.frequency.value = baseFreq;
        osc2.frequency.value = baseFreq + 4; 
        
        filter.type = 'bandpass';
        filter.frequency.value = 1500;
        filter.Q.value = 2;

        gain.gain.setValueAtTime(0, t);
        gain.gain.linearRampToValueAtTime(0.8, t + 0.01);
        gain.gain.exponentialRampToValueAtTime(0.01, t + 0.6); 
        break;
      
      case 'Rubber':
        masterGain.gain.value = 0.6;
        osc1.type = 'sine';
        osc2.type = 'sine';
        osc1.frequency.value = baseFreq;
        osc2.frequency.value = baseFreq * 0.5; 
        
        filter.type = 'lowpass';
        filter.frequency.value = 250; 

        gain.gain.setValueAtTime(0, t);
        gain.gain.linearRampToValueAtTime(1, t + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.01, t + 0.4); 
        break;

      case 'Metal':
        masterGain.gain.value = 0.3;
        osc1.type = 'sine';
        osc2.type = 'sawtooth';
        osc1.frequency.value = baseFreq;
        osc2.frequency.value = baseFreq * 2.4; 
        
        filter.type = 'highpass';
        filter.frequency.value = 800;

        gain.gain.setValueAtTime(0, t);
        gain.gain.linearRampToValueAtTime(0.5, t + 0.01);
        gain.gain.exponentialRampToValueAtTime(0.01, t + 3.0); 
        break;
        
      case 'Coin':
        masterGain.gain.value = 0.4;
        osc1.type = 'sawtooth';
        osc1.frequency.value = baseFreq;
        osc2.type = 'square';
        osc2.frequency.value = baseFreq + 15; 
        
        filter.type = 'peaking';
        filter.frequency.value = 600;
        filter.gain.value = 10;

        gain.gain.setValueAtTime(0, t);
        gain.gain.linearRampToValueAtTime(0.6, t + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.01, t + 0.8);
        break;

      default:
        osc1.type = 'sine';
        gain.gain.value = 0.5;
    }

    osc1.start(t);
    osc2.start(t);
    osc1.stop(t + 4.0);
    osc2.stop(t + 4.0);
  };

  useEffect(() => {
    if (visualizerHeight > 0) {
        const id = requestAnimationFrame(() => setVisualizerHeight(h => Math.max(0, h - 2)));
        return () => cancelAnimationFrame(id);
    }
  }, [visualizerHeight]);

  return (
    <div className="bg-zinc-900/50 backdrop-blur-sm rounded-xl p-8 shadow-2xl border border-white/10 relative overflow-hidden group h-[500px] flex flex-col justify-between hover:border-amber-500/30 transition-colors duration-500">
      <div className={`absolute inset-0 bg-gradient-to-br from-amber-900/10 via-transparent to-transparent transition-opacity duration-1000`}></div>
      <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent transition-opacity duration-100 ${visualizerHeight > 0 ? 'opacity-100' : 'opacity-20'}`}></div>

      <div className="flex justify-between items-start mb-6 relative z-10">
        <div>
          <h3 className="text-3xl font-bold text-white mb-2 tracking-tight">Prepared Piano</h3>
          <p className="text-zinc-400 font-mono text-sm">Select material. Alter timbre. (Diatonic Scale)</p>
        </div>
      </div>

      <div className="flex gap-3 mb-8 flex-wrap relative z-10 justify-center">
        {PREPARATIONS.map(prep => (
          <button
            key={prep}
            onClick={() => setMaterial(prep)}
            className={`px-5 py-2 rounded-full text-xs font-mono uppercase tracking-widest transition-all border ${
              material === prep 
                ? 'bg-amber-500 text-black border-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.4)]' 
                : 'bg-zinc-800 text-zinc-400 border-zinc-700 hover:bg-zinc-700 hover:text-white'
            }`}
          >
            {prep}
          </button>
        ))}
      </div>

      <div className="flex gap-2 h-64 relative z-10 max-w-4xl mx-auto w-full">
        {KEYS.map(key => (
          <button
            key={key}
            onMouseDown={() => playSound(key)}
            className={`
              flex-1 rounded-b-lg border-x border-b border-white/10 flex items-end justify-center pb-8 font-mono text-xl
              transition-all duration-100 relative overflow-hidden shadow-lg group/key
              ${activeKey === key 
                ? 'bg-white text-black translate-y-2 shadow-[0_0_40px_rgba(255,255,255,0.3)]' 
                : 'bg-zinc-950/80 text-zinc-500 hover:bg-zinc-900 hover:text-zinc-300'}
            `}
          >
            <div className={`absolute top-0 left-0 right-0 h-full bg-gradient-to-b from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity`}></div>
            <span className="relative z-10">{key}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

// ==========================================
// WIDGET 2: Chance Operations (Colored)
// ==========================================
const ChanceWidget: React.FC = () => {
  const [points, setPoints] = useState<{x: number, y: number, color: string}[]>([]);
  const [seed, setSeed] = useState("ATLAS");

  const COLORS = ['#F87171', '#FBBF24', '#34D399', '#60A5FA', '#A78BFA', '#F472B6', '#FFFFFF'];

  const generatePoints = () => {
    const newSeed = Math.random().toString(36).substring(7).toUpperCase();
    setSeed(newSeed);
    const count = Math.floor(Math.random() * 8) + 8;
    const newPoints = Array.from({ length: count }).map(() => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      color: COLORS[Math.floor(Math.random() * COLORS.length)]
    }));
    setPoints(newPoints);
  };

  useEffect(() => { generatePoints(); }, []);

  return (
    <div className="bg-zinc-900/50 backdrop-blur-sm rounded-xl p-8 shadow-2xl border border-white/10 flex flex-col h-[500px] relative overflow-hidden hover:border-amber-500/30 transition-colors duration-500">
      <div className="mb-6 relative z-10">
        <h3 className="text-3xl font-bold text-white mb-2 tracking-tight">Chance Operations</h3>
        <p className="text-zinc-400 font-mono text-sm">Atlas Eclipticalis: Colored constellations as random score.</p>
      </div>

      <div className="flex-1 w-full bg-black/60 rounded-lg border border-white/10 relative overflow-hidden cursor-crosshair group" onClick={generatePoints}>
         <div className="absolute inset-0 opacity-10" 
              style={{ backgroundImage: 'radial-gradient(#888 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
         </div>
         
         <svg className="absolute inset-0 w-full h-full pointer-events-none">
            {points.map((p, i) => {
                if (i === 0) return null;
                const prev = points[i-1];
                return (
                    <line 
                        key={i}
                        x1={`${prev.x}%`} y1={`${prev.y}%`}
                        x2={`${p.x}%`} y2={`${p.y}%`}
                        stroke="rgba(255,255,255,0.1)"
                        strokeWidth="1"
                        strokeDasharray="4 4"
                    />
                )
            })}
         </svg>

         {points.map((p, i) => (
           <div
             key={i}
             className="absolute w-3 h-3 rounded-full transform -translate-x-1/2 -translate-y-1/2 shadow-lg transition-all duration-1000"
             style={{ 
               left: `${p.x}%`, 
               top: `${p.y}%`,
               backgroundColor: p.color,
               boxShadow: `0 0 15px ${p.color}`
             }}
           />
         ))}
         
         <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
            <span className="text-white/10 font-mono text-8xl font-bold tracking-widest uppercase rotate-12">{seed}</span>
         </div>
      </div>

      <div className="mt-6 flex justify-between items-center relative z-10">
        <div className="text-xs text-zinc-500 font-mono uppercase tracking-widest">
            Seed: <span className="text-amber-400">{seed}</span>
        </div>
        <button
          onClick={generatePoints}
          className="bg-white/10 text-white border border-white/20 px-6 py-3 rounded text-sm font-mono hover:bg-white hover:text-black transition-all uppercase tracking-widest"
        >
          Cast I Ching
        </button>
      </div>
    </div>
  );
};

// ==========================================
// WIDGET 3: Time-Brackets (More Elegant)
// ==========================================
interface Bracket { id: number; start: number; end: number; track: number; color: string; }

const TimeBracketsWidget: React.FC = () => {
  const [brackets, setBrackets] = useState<Bracket[]>([]);
  const [currentTime, setCurrentTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const duration = 30;

  const GRADIENTS = [
    'from-amber-500 to-yellow-500',
    'from-orange-500 to-amber-500',
    'from-yellow-600 to-orange-600'
  ];

  const generateBrackets = () => {
    const newBrackets: Bracket[] = [];
    const tracks = 3;
    for (let i = 0; i < 7; i++) {
       const start = Math.random() * (duration - 6);
       const length = Math.random() * 6 + 3; 
       newBrackets.push({
         id: i,
         start,
         end: Math.min(start + length, duration),
         track: Math.floor(Math.random() * tracks),
         color: GRADIENTS[Math.floor(Math.random() * GRADIENTS.length)]
       });
    }
    setBrackets(newBrackets);
    setCurrentTime(0);
    setIsPlaying(false);
  };

  useEffect(() => { generateBrackets(); }, []);

  useEffect(() => {
    let animationFrame: number;
    if (isPlaying) {
      let lastTimestamp = performance.now();
      const loop = (timestamp: number) => {
        const delta = (timestamp - lastTimestamp) / 1000;
        lastTimestamp = timestamp;
        setCurrentTime(prev => {
           if (prev >= duration) { setIsPlaying(false); return 0; }
           return prev + delta * 5; 
        });
        animationFrame = requestAnimationFrame(loop);
      };
      animationFrame = requestAnimationFrame(loop);
    }
    return () => cancelAnimationFrame(animationFrame);
  }, [isPlaying]);

  return (
    <div className="bg-zinc-900/50 backdrop-blur-sm rounded-xl p-8 shadow-2xl border border-white/10 flex flex-col h-[500px] hover:border-amber-500/30 transition-colors duration-500">
      <div className="mb-6">
        <h3 className="text-3xl font-bold text-white mb-2 tracking-tight">Time-Brackets</h3>
        <p className="text-zinc-400 font-mono text-sm">Ecology of listening. Sounds enter and exit freely.</p>
      </div>

      <div className="flex-1 w-full bg-black/60 border border-white/10 rounded-lg p-6 relative flex flex-col justify-between overflow-hidden">
         <div className="absolute inset-0 pointer-events-none opacity-20" style={{ backgroundImage: 'linear-gradient(90deg, #444 1px, transparent 1px)', backgroundSize: '10% 100%' }}></div>

         {['I', 'II', 'III'].map((label, trackIndex) => (
           <div key={label} className="relative h-1/3 flex items-center border-b border-white/5 last:border-0">
              <span className="absolute left-2 text-xs font-mono text-zinc-600 z-20">{label}</span>
              
              {brackets.filter(b => b.track === trackIndex).map(b => {
                 const isActive = currentTime >= b.start && currentTime <= b.end;
                 return (
                   <div
                     key={b.id}
                     className={`absolute h-6 rounded-full transition-all duration-300 backdrop-blur-md bg-gradient-to-r ${b.color} ${
                       isActive 
                        ? 'opacity-100 shadow-[0_0_20px_rgba(255,255,255,0.4)] z-10 scale-y-125' 
                        : 'opacity-40 grayscale-[0.5]'
                     }`}
                     style={{
                       left: `${(b.start / duration) * 100}%`,
                       width: `${((b.end - b.start) / duration) * 100}%`
                     }}
                   />
                 );
              })}
           </div>
         ))}

         <div 
            className="absolute top-0 bottom-0 w-0.5 bg-white z-30 shadow-[0_0_15px_white]"
            style={{ left: `${(currentTime / duration) * 100}%`, opacity: isPlaying ? 1 : 0.2 }}
         >
         </div>
      </div>

      <div className="mt-6 flex gap-4">
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className={`flex-1 py-3 rounded text-sm font-mono uppercase tracking-widest transition-all border ${
             isPlaying 
               ? 'bg-transparent border-red-500/50 text-red-400 hover:bg-red-900/20' 
               : 'bg-white text-black border-transparent hover:bg-zinc-200'
          }`}
        >
          {isPlaying ? 'Stop' : 'Play Sequence'}
        </button>
        <button
          onClick={generateBrackets}
          className="px-6 py-3 bg-transparent border border-white/20 text-zinc-300 rounded text-sm font-mono hover:text-white hover:border-white transition-colors uppercase"
        >
          Reset
        </button>
      </div>
    </div>
  );
};


// ==========================================
// MAIN CONCEPT PAGE
// ==========================================
const Concept: React.FC = () => {
  const [selectedWorkTitle, setSelectedWorkTitle] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-black pt-24 pb-24 px-4 md:px-8 text-zinc-200 selection:bg-amber-500 selection:text-white">
      
      {/* Modal Triggered by Title */}
      {selectedWorkTitle && (
        <WorkDetailModal workTitle={selectedWorkTitle} onClose={() => setSelectedWorkTitle(null)} />
      )}

      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
            <h2 className="text-6xl md:text-9xl font-bold font-mono text-white mb-4 tracking-tighter mix-blend-difference select-none">
            CONCEPT
            </h2>
            <p className="text-xl md:text-2xl font-light text-zinc-400 font-serif italic border-l-2 border-amber-500 pl-6">
                A three-part timeline and interactive mini-demos
            </p>
        </div>

        {/* --- 1. Horizontal Timeline Section --- */}
        <section className="mb-8 overflow-x-auto pb-12 scrollbar-hide">
           <div className="min-w-[1200px] relative pt-12">
              
              <div className="absolute top-12 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
              
              <div className="grid grid-cols-3 gap-24 px-12">
                 {CONCEPT_TIMELINE.map((item, i) => (
                    <div key={i} className="relative pt-16 group">
                       <div className="absolute top-[43px] left-0 w-4 h-4 bg-black rounded-full border border-amber-500 z-10 group-hover:bg-amber-500 group-hover:shadow-[0_0_20px_rgba(245,158,11,0.6)] transition-all duration-500"></div>
                       <div className="absolute top-[48px] left-[7px] w-px h-16 bg-gradient-to-b from-amber-500/50 to-transparent"></div>

                       <div className="mb-6 pl-4 border-l border-transparent group-hover:border-amber-500/30 transition-all duration-500">
                          <span className="font-mono text-xs tracking-[0.2em] text-amber-400 uppercase">{item.period}</span>
                          <h3 className="text-4xl font-bold mt-2 mb-4 leading-tight text-white group-hover:text-amber-100 transition-colors">{item.title}</h3>
                          <p className="text-zinc-500 text-sm font-mono leading-relaxed max-w-sm">{item.desc}</p>
                       </div>
                       
                       <div className="mt-8 bg-zinc-900/30 p-6 rounded-lg border border-white/5 group-hover:border-white/20 transition-colors backdrop-blur-sm">
                          <p className="text-[10px] font-mono uppercase text-zinc-500 mb-4 tracking-widest">Key Works</p>
                          <ul className="space-y-4">
                             {item.works.map((w, wIndex) => {
                                const isInteractive = INTERACTIVE_WORKS[w.title] !== undefined;
                                return (
                                  <li key={wIndex} className="flex items-start gap-4">
                                     <span className="font-mono text-zinc-600 text-xs mt-1">{w.year}</span>
                                     {isInteractive ? (
                                        <button 
                                          onClick={() => setSelectedWorkTitle(w.title)}
                                          className="text-left font-bold text-zinc-300 hover:text-white transition-all pb-0.5 group/link flex items-center gap-2"
                                        >
                                           {w.title} <span className="inline-block w-1.5 h-1.5 rounded-full bg-amber-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                        </button>
                                     ) : (
                                        <span className="text-zinc-500 cursor-default">{w.title}</span>
                                     )}
                                  </li>
                                );
                             })}
                          </ul>
                       </div>
                    </div>
                 ))}
              </div>
           </div>
        </section>

        {/* --- 2. Interactive Labs Section --- */}
        <section className="border-t border-white/10 pt-16">
           <div className="mb-16 max-w-2xl">
              <span className="text-amber-500 font-mono text-xs uppercase tracking-widest mb-2 block">Interactive Lab</span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">MECHANISMS OF CAGE</h2>
              <p className="text-zinc-400 font-light text-lg">
                Directly manipulate the parameters of silence, chance, and timbre.
              </p>
           </div>
           
           <div className="flex flex-col gap-16">
              <PreparedPianoWidget />
              <ChanceWidget />
              <TimeBracketsWidget />
           </div>
        </section>

      </div>
    </div>
  );
};

export default Concept;
