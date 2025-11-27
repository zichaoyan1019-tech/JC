
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
  { id: 'p1', decade: '1930s', year: '1933', title: 'Two Pieces for Piano', note: 'Early Piano Works' },
  { id: 'p2', decade: '1930s', year: '1933', title: 'Metamorphosis (I–V)', note: '' },
  { id: 'p3', decade: '1930s', year: '1933', title: 'In a Landscape', note: 'Draft dates to this period; full version 1948' },
  { id: 'p4', decade: '1930s', year: '1935', title: 'Quest', note: 'For piano' },
  { id: 'p5', decade: '1930s', year: '1935', title: 'Solo with Obbligato Accompaniment of Two Voices in Canon…', note: 'Contains piano' },
  
  // 1940s
  { id: 'p6', decade: '1940s', year: '1940', title: 'Bacchanale', note: 'First use of prepared piano' },
  { id: 'p7', decade: '1940s', year: '1941', title: 'Totem Ancestor', note: 'prepared piano' },
  { id: 'p8', decade: '1940s', year: '1941', title: 'Primitive', note: 'prepared piano' },
  { id: 'p9', decade: '1940s', year: '1941', title: 'Root of an Unfocus', note: 'prepared piano' },
  { id: 'p10', decade: '1940s', year: '1941', title: 'The Unavailable Memory Of', note: 'prepared piano' },
  { id: 'p11', decade: '1940s', year: '1942', title: 'Creed', note: 'prepared piano' },
  { id: 'p12', decade: '1940s', year: '1942', title: 'She Is Asleep', note: 'Partially for prepared piano' },
  { id: 'p13', decade: '1940s', year: '1943', title: 'Music for Piano', note: 'Early fragments' },
  { id: 'p14', decade: '1940s', year: '1944', title: 'Amores', note: 'Movements 3 & 4 for prepared piano' },
  { id: 'p15', decade: '1940s', year: '1945', title: 'A Book of Music', note: 'two prepared pianos' },
  { id: 'p16', decade: '1940s', year: '1945', title: 'Three Dances', note: 'two prepared pianos' },
  { id: 'p17', decade: '1940s', year: '1946–48', title: 'Sonatas and Interludes', note: '16 sonatas + 4 interludes; prepared piano' },
  { id: 'p18', decade: '1940s', year: '1947–48', title: 'The Seasons', note: 'Contains original piano material' },
  { id: 'p19', decade: '1940s', year: '1948', title: 'In a Landscape', note: 'Piano or harp' },
  { id: 'p20', decade: '1940s', year: '1948', title: 'Prelude for Meditation', note: 'No fixed preparation, between piano and sound experiment' },

  // 1950s
  { id: 'p21', decade: '1950s', year: '1950', title: 'Seven Haiku', note: 'For piano' },
  { id: 'p22', decade: '1950s', year: '1951', title: 'Music of Changes', note: 'Piano; using I Ching chance operations' },
  { id: 'p23', decade: '1950s', year: '1952', title: '4′33″', note: 'Piano frame, performer makes no sound' },
  { id: 'p24', decade: '1950s', year: '1953', title: '63 Mesostics for Merce Cunningham', note: 'Contains piano sound elements' },
  { id: 'p25', decade: '1950s', year: '1955–56', title: '26′1.1499″ for a String Player', note: 'Contains piano possibility version' },
  { id: 'p26', decade: '1950s', year: '1957–58', title: 'Concert for Piano and Orchestra', note: 'Piano + graphic score + indeterminacy' },

  // 1960s
  { id: 'p27', decade: '1960s', year: '1960', title: 'Cartridge Music', note: 'Can be used for piano pickup' },
  { id: 'p28', decade: '1960s', year: '1961', title: 'Variations II', note: 'Suitable for piano and any instrument' },
  { id: 'p29', decade: '1960s', year: '1962', title: '0′00″ (4′33″ No. 2)', note: 'Piano can be an object of operation' },
  { id: 'p30', decade: '1960s', year: '1965', title: 'Variations III', note: 'Can be used for piano or any setup' },
  { id: 'p31', decade: '1960s', year: '1969', title: 'Cheap Imitation', note: 'Piano; based on Satie’s Socrates' },

  // 1970s
  { id: 'p32', decade: '1970s', year: '1975–77', title: 'Etudes Australes', note: 'Piano, extremely high difficulty' },
  { id: 'p33', decade: '1970s', year: '1978–80', title: 'Etudes Boreales', note: 'Some versions contain piano' },

  // 1980s-1990s
  { id: 'p34', decade: '1980s–1990s', year: '1988', title: 'One9', note: 'Piano special version exists' },
  { id: 'p35', decade: '1980s–1990s', year: '1989', title: 'Two2', note: 'two pianos' },
  { id: 'p36', decade: '1980s–1990s', year: '1989', title: 'Four3', note: 'Contains piano / optional keyboard source' },
  { id: 'p37', decade: '1980s–1990s', year: '1990–92', title: 'One8, One10, One11…', note: 'Piano as optional' },
  { id: 'p38', decade: '1980s–1990s', year: '1990–92', title: 'Two6', note: 'Two instruments, can include piano' }
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
