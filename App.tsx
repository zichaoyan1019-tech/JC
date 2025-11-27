import React, { useState } from 'react';
import Hero from './components/Hero';
import IntroSection from './components/IntroSection';
import MusicExhibition from './components/MusicExhibition';
import Concept from './components/Concept';
import Source from './components/Source';
import { Page } from './types';

const App: React.FC = () => {
  const [activePage, setActivePage] = useState<Page>(Page.INTRO);

  // Helper to render the correct component based on state
  const renderContent = () => {
    switch (activePage) {
      case Page.INTRO:
        return (
          <>
            <Hero />
            <IntroSection />
          </>
        );
      case Page.WORKS:
        return <MusicExhibition />;
      case Page.CONCEPT:
        return <Concept />;
      case Page.SOURCE:
        return <Source />;
      default:
        return <Hero />;
    }
  };

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black font-sans">
      {/* Top Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 flex justify-between items-center">
          
          {/* Logo / Home Click */}
          <button 
            onClick={() => setActivePage(Page.INTRO)}
            className="font-mono font-bold text-xl tracking-tighter hover:text-zinc-300 transition-colors"
          >
            JOHN CAGE
          </button>

          {/* Desktop Menu */}
          <div className="flex space-x-1 md:space-x-8">
            <NavButton 
              label="Intro" 
              isActive={activePage === Page.INTRO} 
              onClick={() => setActivePage(Page.INTRO)} 
            />
            <NavButton 
              label="Works" 
              isActive={activePage === Page.WORKS} 
              onClick={() => setActivePage(Page.WORKS)} 
            />
            <NavButton 
              label="Concept" 
              isActive={activePage === Page.CONCEPT} 
              onClick={() => setActivePage(Page.CONCEPT)} 
            />
            <NavButton 
              label="Source" 
              isActive={activePage === Page.SOURCE} 
              onClick={() => setActivePage(Page.SOURCE)} 
            />
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="pt-0 min-h-screen animate-fade-in">
        {renderContent()}
      </main>

      {/* Global Footer (Visible on all pages) */}
      <footer className="py-8 bg-zinc-950 text-zinc-600 text-center font-mono text-[10px] border-t border-zinc-900 uppercase tracking-widest">
        <p>&copy; {new Date().getFullYear()} Interactive Exhibition</p>
      </footer>
    </div>
  );
};

// Helper Component for Nav Buttons
const NavButton: React.FC<{ label: string; isActive: boolean; onClick: () => void }> = ({ label, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`
      px-3 py-1 font-mono text-xs md:text-sm uppercase tracking-widest transition-all duration-300
      ${isActive 
        ? 'text-white border-b-2 border-white' 
        : 'text-zinc-500 hover:text-zinc-300 border-b-2 border-transparent'}
    `}
  >
    {label}
  </button>
);

export default App;
