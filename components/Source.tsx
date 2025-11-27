import React from 'react';

const Source: React.FC = () => {
  const references = [
    { title: "Silence: Lectures and Writings", author: "John Cage", year: "1961" },
    { title: "Conversing with Cage", author: "Richard Kostelanetz", year: "1988" },
    { title: "The John Cage Trust", url: "https://johncage.org" },
    { title: "UbuWeb: John Cage", url: "https://www.ubu.com/sound/cage.html" }
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-24 px-4 md:px-8 flex flex-col items-center">
      <div className="max-w-2xl w-full">
        <h2 className="text-4xl md:text-6xl font-mono font-bold mb-12 border-b border-zinc-800 pb-6">
          SOURCE
        </h2>

        <div className="space-y-8 font-mono">
          <div>
            <h3 className="text-zinc-500 text-sm uppercase tracking-widest mb-4">References & Bibliography</h3>
            <ul className="space-y-4">
              {references.map((ref, i) => (
                <li key={i} className="flex flex-col md:flex-row md:items-baseline gap-2 border-b border-zinc-900 pb-2">
                  <span className="text-white text-lg font-bold">{ref.title}</span>
                  {ref.author && <span className="text-zinc-400 italic">— {ref.author} ({ref.year})</span>}
                  {ref.url && <a href={ref.url} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 text-xs md:ml-auto underline decoration-1 underline-offset-4">External Link ↗</a>}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-16">
            <h3 className="text-zinc-500 text-sm uppercase tracking-widest mb-4">Credits</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Designed and developed as an interactive exhibition. 
              Powered by Gemini 2.5 Flash for the conversational interface.
              Images and videos used for educational purposes.
            </p>
          </div>
          
           <div className="mt-16 p-6 border border-zinc-800 bg-zinc-900/50">
            <h3 className="text-zinc-500 text-sm uppercase tracking-widest mb-2">Technical Note</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              This site uses React and Google Generative AI. The aesthetic is inspired by 
              brutalist typography and aleatoric music scores.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Source;