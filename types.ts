
export interface Message {
  id: string;
  role: 'user' | 'model';
  text: string;
}

export interface Work {
  id: string;
  title: string;
  year: string;
  description: string;
  videoId: string; // YouTube Video ID (e.g., "JTEFKFiXSx4")
  scoreUrl?: string; // URL to the image of the score
}

export interface PianoWork {
  id: string;
  year: string;
  title: string;
  tags?: string; // e.g. "prepared piano", "chance"
  note?: string; // The user's specific notes (e.g. "Draft earliest...")
  decade: string; // Grouping key
}

export interface LifeStage {
  id: string;
  title: string;
  period: string; // e.g. "1930s - 1940s"
  description: string;
  works: Work[];
}

export interface BioEvent {
  year: string;
  title: string;
  description: string;
}

export enum Page {
  INTRO = 'intro',
  WORKS = 'works',
  CONCEPT = 'concept',
  SOURCE = 'source'
}

export enum Section {
  HERO = 'hero',
  BIO = 'bio',
  EXHIBITION = 'exhibition',
  DIALOGUE = 'dialogue'
}
