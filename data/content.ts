
import { LifeStage, BioEvent, PianoWork } from '../types';

// ==========================================
// 网站内容配置
// ==========================================

export const INTRO_SUMMARY = `John Cage was a pioneering American composer who reshaped how people listen to sound. He experimented with new ways of using instruments, chance-based methods, and open forms of notation. His ideas and collaborations expanded the performer’s role and fundamentally challenged what music can be.`;

export const BIO_TEXT = {
  title: "Background & Career",
  subtitle: "From Los Angeles to Global Influence",
  paragraphs: [
    "John Cage (1912–1992) was born in Los Angeles and began piano studies at ten, developing an early interest in sound and silence.",
    "After leaving Pomona College, he studied composition with Buhlig, Cowell, and Schoenberg, focusing on rhythm and percussion.",
    "In the 1940s, he invented the prepared piano and began a major collaboration with choreographer Merce Cunningham.",
    "Cage later embraced indeterminacy, with 4′33″ redefining music through environmental sound.",
    "Across six decades, he reshaped contemporary music and art, inspiring new ways of listening."
  ]
};

export const QUOTES = [
  "I have nothing to say and I am saying it.",
  "Everything we do is music.",
  "There is no such thing as an empty space or an empty time.",
  "The first question I ask myself when something doesn't seem to be beautiful is why do I think it's not beautiful. And very shortly you discover that there is no reason.",
  "I can't understand why people are frightened of new ideas. I'm frightened of the old ones.",
  "Music is about changing the mind - not to understand, but to be aware.",
  "If something is boring after two minutes, try it for four. If still boring, then eight. Then sixteen. Then thirty-two. Eventually one discovers that it is not boring at all.",
  "Get yourself out of whatever cage you find yourself in.",
  "The emotions—fear, anger, sorrow, joy—are in the music, they are not in the composer.",
  "We carry our homes within us which enables us to fly."
];

// Using local images from /public/images/
// Note: /JC/ prefix is required for GitHub Pages deployment
export const GALLERY_IMAGES = [
  "/JC/images/slide1.jpg",
  "/JC/images/slide2.jpg",
  "/JC/images/slide3.jpg",
  "/JC/images/slide4.jpg",
  "/JC/images/slide5.jpg",
  "/JC/images/slide6.jpg",
  "/JC/images/slide7.jpg",
  "/JC/images/slide8.jpg",
  "/JC/images/slide9.jpg",
  "/JC/images/slide10.jpg"
];

export const BIO_EVENTS: BioEvent[] = [
  {
    year: "1912",
    title: "Birth",
    description: "Born in Los Angeles, California."
  },
  {
    year: "1930s",
    title: "Studies",
    description: "Studied with Richard Buhlig, Henry Cowell, and Arnold Schoenberg; formed his early views on rhythm and structure."
  },
  {
    year: "Late 1930s",
    title: "Percussion Experiments",
    description: "Began organizing percussion ensembles and exploring sound as an independent structural element."
  },
  {
    year: "1940s",
    title: "Prepared Piano & New Timbres",
    description: "Developed the concept of the “prepared piano” and deepened his interest in redefining musical timbre and form."
  },
  {
    year: "1950–1951",
    title: "Turn to Chance",
    description: "Shifted toward chance operations and non-intention, influenced by Zen Buddhism and the I Ching."
  },
  {
    year: "1952",
    title: "Silence & Listening",
    description: "Formulated radical ideas about silence, listening, and the role of environmental sound in music."
  },
  {
    year: "Mid-1950s",
    title: "Collaboration with Cunningham",
    description: "Started long-term collaboration with choreographer Merce Cunningham, separating music and dance through independent structures."
  },
  {
    year: "1960s",
    title: "New Notation & Performer Freedom",
    description: "Explored graphic notation, performer autonomy, and the idea that everyday actions can be artistic events."
  },
  {
    year: "1970s–1980s",
    title: "Conceptual & Interdisciplinary Influence",
    description: "Became a major figure in conceptual and interdisciplinary art, influencing visual art, performance, and sound art."
  },
  {
    year: "1992",
    title: "Legacy",
    description: "Died in New York City, leaving a lasting impact on contemporary art and experimental music."
  }
];

export const PIANO_ARCHIVE: PianoWork[] = [
  // 1930s
  { id: 'p30_1', decade: '1930s', year: '1933', title: 'Two Pieces for Piano', note: '' },
  { id: 'p30_2', decade: '1930s', year: '1933', title: 'Metamorphosis I–V', note: '' },
  { id: 'p30_3', decade: '1930s', year: '1933/1948', title: 'In a Landscape', note: '' },
  { id: 'p30_4', decade: '1930s', year: '1935', title: 'Quest', note: '' },
  { id: 'p30_5', decade: '1930s', year: '1935', title: 'Solo with Obbligato Accompaniment of Two Voices in Canon…', note: '' },
  { id: 'p30_6', decade: '1930s', year: 'c.1935–36', title: 'Three Easy Pieces', note: '' },
  { id: 'p30_7', decade: '1930s', year: '1936', title: 'Two Pieces for Piano (revised)', note: '' },
  { id: 'p30_8', decade: '1930s', year: '1938', title: 'Prelude for Piano', note: '' },

  // 1940s
  { id: 'p40_1', decade: '1940s', year: '1940', title: 'Bacchanale', note: 'First prepared piano work' },
  { id: 'p40_2', decade: '1940s', year: '1941', title: 'Totem Ancestor', note: '' },
  { id: 'p40_3', decade: '1940s', year: '1941', title: 'Primitive', note: '' },
  { id: 'p40_4', decade: '1940s', year: '1941', title: 'Root of an Unfocus', note: '' },
  { id: 'p40_5', decade: '1940s', year: '1941', title: 'The Unavailable Memory Of', note: '' },
  { id: 'p40_6', decade: '1940s', year: '1942', title: 'Creed', note: '' },
  { id: 'p40_7', decade: '1940s', year: '1942–43', title: 'She Is Asleep', note: '' },
  { id: 'p40_8', decade: '1940s', year: '1943', title: 'Music for Piano', note: 'Fragments' },
  { id: 'p40_9', decade: '1940s', year: '1943', title: 'Amores', note: '' },
  { id: 'p40_10', decade: '1940s', year: '1944', title: 'A Book of Music', note: '' },
  { id: 'p40_11', decade: '1940s', year: '1945', title: 'Three Dances', note: '' },
  { id: 'p40_12', decade: '1940s', year: '1946–48', title: 'Sonatas and Interludes', note: 'Masterpiece for prepared piano' },
  { id: 'p40_13', decade: '1940s', year: '1947', title: 'The Seasons', note: '' },
  { id: 'p40_14', decade: '1940s', year: '1948', title: 'In a Landscape', note: '' },
  { id: 'p40_15', decade: '1940s', year: '1948', title: 'Prelude for Meditation', note: '' },

  // 1950s
  { id: 'p50_1', decade: '1950s', year: '1950', title: 'Seven Haiku', note: '' },
  { id: 'p50_2', decade: '1950s', year: '1951', title: 'Music of Changes', note: 'I Ching chance operations' },
  { id: 'p50_3', decade: '1950s', year: '1952', title: '4′33″', note: 'Silent piece' },
  { id: 'p50_4', decade: '1950s', year: '1953', title: '63 Mesostics for Merce Cunningham', note: '' },
  { id: 'p50_5', decade: '1950s', year: '1953–56', title: 'Music for Piano 1–85', note: '' },
  { id: 'p50_6', decade: '1950s', year: '1955–56', title: '26′1.1499″ for a String Player', note: '' },
  { id: 'p50_7', decade: '1950s', year: '1957–58', title: 'Concert for Piano and Orchestra', note: 'Indeterminate graphic score' },

  // 1960s
  { id: 'p60_1', decade: '1960s', year: '1960', title: 'Cartridge Music', note: '' },
  { id: 'p60_2', decade: '1960s', year: '1961', title: 'Variations II', note: '' },
  { id: 'p60_3', decade: '1960s', year: '1962', title: '0′00″', note: '4′33″ No. 2' },
  { id: 'p60_4', decade: '1960s', year: '1962', title: 'Variations III', note: '' },
  { id: 'p60_5', decade: '1960s', year: '1963', title: 'Variations IV', note: '' },
  { id: 'p60_6', decade: '1960s', year: '1965', title: 'Variations V', note: '' },
  { id: 'p60_7', decade: '1960s', year: '1969', title: 'Cheap Imitation', note: '' },

  // 1970s
  { id: 'p70_1', decade: '1970s', year: '1974–75', title: 'Etudes Australes', note: '' },
  { id: 'p70_2', decade: '1970s', year: '1978', title: 'Etudes Boreales', note: '' },
  { id: 'p70_3', decade: '1970s', year: '1978', title: 'Haikai', note: '' },

  // 1980s-1990s
  { id: 'p80_1', decade: '1980s–1990s', year: '1988', title: 'One9', note: '' },
  { id: 'p80_2', decade: '1980s–1990s', year: '1989', title: 'Two2', note: '' },
  { id: 'p80_3', decade: '1980s–1990s', year: '1989', title: 'Four3', note: '' },
  { id: 'p80_4', decade: '1980s–1990s', year: '1990', title: 'One8', note: '' },
  { id: 'p80_5', decade: '1980s–1990s', year: '1992', title: 'One10', note: '' },
  { id: 'p80_6', decade: '1980s–1990s', year: '1992', title: 'One11', note: '' },
  { id: 'p80_7', decade: '1980s–1990s', year: '1992', title: 'Two6', note: '' },
  { id: 'p80_8', decade: '1980s–1990s', year: '1992', title: 'Four6', note: '' },
  { id: 'p80_9', decade: '1980s–1990s', year: '1990s', title: 'Seven2', note: '' }
];

export const LIFE_STAGES: LifeStage[] = [
  // Keeping this for reference if needed, but UI is switching to PIANO_ARCHIVE
  {
    id: "stage-1",
    title: "Legacy Data",
    period: "Legacy",
    description: "",
    works: []
  }
];
