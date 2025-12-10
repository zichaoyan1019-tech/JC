
import React from 'react';

// Bibliography Data Grouped by Work
const BIBLIOGRAPHY = [
  {
    work: "4′33″",
    sources: [
      "Gann, Kyle. “John Cage’s 4′33″: Using Aesthetic Theory to Understand a Musical Landmark.” The Musical Quarterly 85, no. 4 (Winter 2001): 553–581.",
      "Cook, Nicholas. “John Cage and the Aesthetic Pedagogy of Chance and Silence.” Educational Philosophy and Theory 56, no. 5 (2023): 529–540."
    ]
  },
  {
    work: "Sonatas and Interludes",
    sources: [
      "Perry, Jeffrey. “Cage’s Sonatas and Interludes for Prepared Piano: Performance, Hearing and Analysis.” Music Theory Spectrum 27, no. 1 (Spring 2005): 35–66.",
      "Hidy, Lesley. “A Performer’s Guide to the Sonatas and Interludes for Prepared Piano by John Cage.”",
      "Pritchett, James. “Six Views of the Sonatas and Interludes.” Rosewhitemusic.com."
    ]
  },
  {
    work: "Music of Changes",
    sources: [
      "Cage, John. “Silence; lectures and writings.” Middletown, Conn., Wesleyan University Press, 1961.",
      "Kaya Elivar, Deniz. “John Cage and his use of the I Ching method.” Sosyal Bilimler Enstitüsü, 2021."
    ]
  },
  {
    work: "Concert for Piano and Orchestra",
    sources: [
      "Iddon, Martin. “John Cage’s concert for piano and orchestra.” New York, NY : Oxford University Press, 2020.",
      "Payne, Emily. “Instrumental Interaction and Subversion in John Cage’s Concert for Piano and Orchestra.” Contemporary music review Vol.41, No.2-3 (2022): 172-192."
    ]
  },
  {
    work: "Cheap Imitation",
    sources: [
      "Perry, Jeffrey. “Cage’s Imitation Game: Cheap Imitation and Song Books Through the Sketches.” Journal-article. Music Theory Online. Vol. 3–3. Society for Music Theory, 2021.",
      "Pritchett, James. “John Cage: Imitations and Transformations.”",
      "The Piano in My Life. “Understanding Cheap Imitation - the Piano in My Life,” 2024."
    ]
  },
  {
    work: "Etudes Australes",
    sources: [
      "Da Gama, Raul. “John Cage: Etudes Australes - World Music Report.” World Music Report, 2022.",
      "Hanninen, Dora A. “Making Music,” 2014."
    ]
  }
];

// Video Archive Data
const VIDEO_ARCHIVE = [
  { title: "Sonatas and Interludes (Jesse Myers)", url: "https://www.youtube.com/watch?v=N6Sl5wmy9t4" },
  { title: "Music of Changes", url: "https://www.youtube.com/watch?v=B4wJFTGyELE" },
  { title: "4′33″ (William Marx)", url: "https://www.youtube.com/watch?v=JTEFKFiXSx4" },
  { title: "Concert for Piano and Orchestra", url: "https://www.youtube.com/watch?v=3Z5EpvdtmB4" },
  { title: "Cheap Imitation (John Cage)", url: "https://www.youtube.com/watch?v=D6ukoi7m2wM" },
  { title: "Erik Satie: Socrate (Comparison)", url: "https://www.youtube.com/watch?v=SN5urI-Gy38" },
  { title: "Etudes Australes", url: "https://www.youtube.com/watch?v=21siGmjyAfk" }
];

const GENERAL_REFERENCES = [
    { title: "Silence: Lectures and Writings", author: "John Cage", year: "1961" },
    { title: "Conversing with Cage", author: "Richard Kostelanetz", year: "1988" },
    { title: "The John Cage Trust", url: "https://johncage.org" },
    { title: "UbuWeb: John Cage", url: "https://www.ubu.com/sound/cage.html" }
];

const Source: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white pt-24 pb-24 px-4 md:px-8 flex flex-col items-center animate-fade-in">
      <div className="max-w-4xl w-full">
        <h2 className="text-4xl md:text-6xl font-mono font-bold mb-16 border-b border-zinc-800 pb-6 text-center md:text-left">
          SOURCE
        </h2>

        <div className="grid grid-cols-1 gap-16 font-mono">
          
          {/* 1. Bibliography Section */}
          <div>
            <h3 className="text-amber-500 text-sm uppercase tracking-widest mb-8 border-l-2 border-amber-500 pl-4">
              Selected Bibliography
            </h3>
            
            <div className="space-y-12">
                {BIBLIOGRAPHY.map((entry, i) => (
                    <div key={i} className="group">
                        <h4 className="text-white text-xl font-bold mb-4 group-hover:text-amber-100 transition-colors">{entry.work}</h4>
                        <ul className="space-y-3">
                            {entry.sources.map((source, j) => (
                                <li key={j} className="text-zinc-400 text-sm leading-relaxed pl-4 border-l border-zinc-800 group-hover:border-zinc-600 transition-colors">
                                    {source}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
          </div>

          {/* 2. Video Archive Section */}
          <div>
             <h3 className="text-amber-500 text-sm uppercase tracking-widest mb-8 border-l-2 border-amber-500 pl-4">
              Video Archive
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {VIDEO_ARCHIVE.map((video, i) => (
                    <a 
                        key={i} 
                        href={video.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-between p-4 bg-zinc-900 border border-zinc-800 hover:border-white/30 hover:bg-zinc-800 transition-all group"
                    >
                        <span className="text-zinc-300 text-sm font-bold truncate pr-4">{video.title}</span>
                        <span className="text-xs text-zinc-600 group-hover:text-amber-500 transition-colors uppercase tracking-widest">Watch ↗</span>
                    </a>
                ))}
            </div>
          </div>

          {/* 3. General References */}
          <div>
            <h3 className="text-zinc-500 text-sm uppercase tracking-widest mb-6 border-l-2 border-zinc-700 pl-4">
              General References
            </h3>
            <ul className="space-y-4">
              {GENERAL_REFERENCES.map((ref, i) => (
                <li key={i} className="flex flex-col md:flex-row md:items-baseline gap-2 border-b border-zinc-900 pb-2">
                  <span className="text-zinc-200 text-lg">{ref.title}</span>
                  {ref.author && <span className="text-zinc-500 italic">— {ref.author} ({ref.year})</span>}
                  {ref.url && <a href={ref.url} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 text-xs md:ml-auto underline decoration-1 underline-offset-4">External Link ↗</a>}
                </li>
              ))}
            </ul>
          </div>

          {/* Footer Note */}
           <div className="mt-12 p-6 border border-zinc-800 bg-zinc-900/30 rounded text-center md:text-left">
            <h3 className="text-zinc-600 text-xs uppercase tracking-widest mb-2">About this Project</h3>
            <p className="text-zinc-500 text-xs leading-relaxed">
              This interactive exhibition explores John Cage's philosophy through visual design and sound. 
              Video and score content is used for educational purposes. 
              Designed with React, D3.js, and Web Audio API.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Source;
