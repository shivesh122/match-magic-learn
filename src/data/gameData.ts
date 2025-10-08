export interface GameOption {
  id: string;
  content: string;
}

export interface GamePair {
  itemId: string;
  itemContent: string;
  letterId: string;
  letterContent: string;
}

export interface GameData {
  title: string;
  pairs: GamePair[];
}

// English Letters (A-Z)
const englishGames: GameData[] = [
  {
    title: "Match Image with Letter",
    pairs: [
      { itemId: "img-apple", itemContent: "🍎", letterId: "letter-a", letterContent: "A" },
      { itemId: "img-bee", itemContent: "🐝", letterId: "letter-b", letterContent: "B" },
      { itemId: "img-cat", itemContent: "🐱", letterId: "letter-c", letterContent: "C" },
      { itemId: "img-dog", itemContent: "🐕", letterId: "letter-d", letterContent: "D" },
    ],
  },
  {
    title: "Match Image with Letter",
    pairs: [
      { itemId: "img-egg", itemContent: "🥚", letterId: "letter-e", letterContent: "E" },
      { itemId: "img-fish", itemContent: "🐟", letterId: "letter-f", letterContent: "F" },
      { itemId: "img-grapes", itemContent: "🍇", letterId: "letter-g", letterContent: "G" },
      { itemId: "img-hat", itemContent: "🎩", letterId: "letter-h", letterContent: "H" },
    ],
  },
  {
    title: "Match Image with Letter",
    pairs: [
      { itemId: "img-ice", itemContent: "🍦", letterId: "letter-i", letterContent: "I" },
      { itemId: "img-jar", itemContent: "🏺", letterId: "letter-j", letterContent: "J" },
      { itemId: "img-kite", itemContent: "🎯", letterId: "letter-k", letterContent: "K" },
      { itemId: "img-lion", itemContent: "🦁", letterId: "letter-l", letterContent: "L" },
    ],
  },
  {
    title: "Match Image with Letter",
    pairs: [
      { itemId: "img-monkey", itemContent: "🐵", letterId: "letter-m", letterContent: "M" },
      { itemId: "img-nest", itemContent: "🥜", letterId: "letter-n", letterContent: "N" },
      { itemId: "img-orange", itemContent: "🍊", letterId: "letter-o", letterContent: "O" },
      { itemId: "img-pen", itemContent: "🖊️", letterId: "letter-p", letterContent: "P" },
    ],
  },
  {
    title: "Match Image with Letter",
    pairs: [
      { itemId: "img-queen", itemContent: "👸", letterId: "letter-q", letterContent: "Q" },
      { itemId: "img-rainbow", itemContent: "🌈", letterId: "letter-r", letterContent: "R" },
      { itemId: "img-sun", itemContent: "☀️", letterId: "letter-s", letterContent: "S" },
      { itemId: "img-tree", itemContent: "🌳", letterId: "letter-t", letterContent: "T" },
    ],
  },
  {
    title: "Match Image with Letter",
    pairs: [
      { itemId: "img-umbrella", itemContent: "☂️", letterId: "letter-u", letterContent: "U" },
      { itemId: "img-violin", itemContent: "🎻", letterId: "letter-v", letterContent: "V" },
      { itemId: "img-watch", itemContent: "⌚", letterId: "letter-w", letterContent: "W" },
      { itemId: "img-xylophone", itemContent: "🎹", letterId: "letter-x", letterContent: "X" },
    ],
  },
  {
    title: "Match Image with Letter",
    pairs: [
      { itemId: "img-yoyo", itemContent: "💛", letterId: "letter-y", letterContent: "Y" },
      { itemId: "img-zebra", itemContent: "🦓", letterId: "letter-z", letterContent: "Z" },
      { itemId: "img-ant", itemContent: "🐜", letterId: "letter-a2", letterContent: "A" },
      { itemId: "img-ball", itemContent: "⚽", letterId: "letter-b2", letterContent: "B" },
    ],
  },
];

// Hindi Letters (Full Alphabet)
const hindiGames: GameData[] = [
  {
    title: "हिंदी अक्षर से मिलान करें",
    pairs: [
      { itemId: "img-apple-h", itemContent: "🍎", letterId: "hindi-a", letterContent: "अ" },
      { itemId: "img-mango-h", itemContent: "🥭", letterId: "hindi-aa", letterContent: "आ" },
      { itemId: "img-ice-h", itemContent: "🍦", letterId: "hindi-i", letterContent: "इ" },
      { itemId: "img-bee-h", itemContent: "🐝", letterId: "hindi-ee", letterContent: "ई" },
    ],
  },
  {
    title: "हिंदी अक्षर से मिलान करें",
    pairs: [
      { itemId: "img-umbrella-h", itemContent: "☂️", letterId: "hindi-u", letterContent: "उ" },
      { itemId: "img-elephant-h", itemContent: "🐘", letterId: "hindi-oo", letterContent: "ऊ" },
      { itemId: "img-orange-h", itemContent: "🍊", letterId: "hindi-e", letterContent: "ए" },
      { itemId: "img-owl-h", itemContent: "🦉", letterId: "hindi-ai", letterContent: "ऐ" },
    ],
  },
  {
    title: "हिंदी अक्षर से मिलान करें",
    pairs: [
      { itemId: "img-bird-h", itemContent: "🐦", letterId: "hindi-o", letterContent: "ओ" },
      { itemId: "img-watermelon-h", itemContent: "🍉", letterId: "hindi-au", letterContent: "औ" },
      { itemId: "img-carrot-h", itemContent: "🥕", letterId: "hindi-ka", letterContent: "क" },
      { itemId: "img-butterfly-h", itemContent: "🦋", letterId: "hindi-kha", letterContent: "ख" },
    ],
  },
  {
    title: "हिंदी अक्षर से मिलान करें",
    pairs: [
      { itemId: "img-grapes-h", itemContent: "🍇", letterId: "hindi-ga", letterContent: "ग" },
      { itemId: "img-gift-h", itemContent: "🎁", letterId: "hindi-gha", letterContent: "घ" },
      { itemId: "img-cherry-h", itemContent: "🍒", letterId: "hindi-cha", letterContent: "च" },
      { itemId: "img-cookie-h", itemContent: "🍪", letterId: "hindi-chha", letterContent: "छ" },
    ],
  },
  {
    title: "हिंदी अक्षर से मिलान करें",
    pairs: [
      { itemId: "img-cake-h", itemContent: "🍰", letterId: "hindi-ja", letterContent: "ज" },
      { itemId: "img-pizza-h", itemContent: "🍕", letterId: "hindi-jha", letterContent: "झ" },
      { itemId: "img-flower-h", itemContent: "🌸", letterId: "hindi-ta", letterContent: "ट" },
      { itemId: "img-rose-h", itemContent: "🌹", letterId: "hindi-tha", letterContent: "ठ" },
    ],
  },
  {
    title: "हिंदी अक्षर से मिलान करें",
    pairs: [
      { itemId: "img-drum-h", itemContent: "🥁", letterId: "hindi-da", letterContent: "ड" },
      { itemId: "img-bell-h", itemContent: "🔔", letterId: "hindi-dha", letterContent: "ढ" },
      { itemId: "img-tooth-h", itemContent: "🦷", letterId: "hindi-ta2", letterContent: "त" },
      { itemId: "img-thread-h", itemContent: "🧵", letterId: "hindi-tha2", letterContent: "थ" },
    ],
  },
  {
    title: "हिंदी अक्षर से मिलान करें",
    pairs: [
      { itemId: "img-door-h", itemContent: "🚪", letterId: "hindi-da2", letterContent: "द" },
      { itemId: "img-smoke-h", itemContent: "💨", letterId: "hindi-dha2", letterContent: "ध" },
      { itemId: "img-nose-h", itemContent: "👃", letterId: "hindi-na", letterContent: "न" },
      { itemId: "img-boat-h", itemContent: "⛵", letterId: "hindi-pa", letterContent: "प" },
    ],
  },
  {
    title: "हिंदी अक्षर से मिलान करें",
    pairs: [
      { itemId: "img-leaf-h", itemContent: "🍃", letterId: "hindi-pha", letterContent: "फ" },
      { itemId: "img-banana-h", itemContent: "🍌", letterId: "hindi-ba", letterContent: "ब" },
      { itemId: "img-cloud-h", itemContent: "☁️", letterId: "hindi-bha", letterContent: "भ" },
      { itemId: "img-moon-h", itemContent: "🌙", letterId: "hindi-ma", letterContent: "म" },
    ],
  },
  {
    title: "हिंदी अक्षर से मिलान करें",
    pairs: [
      { itemId: "img-monkey-h", itemContent: "🐵", letterId: "hindi-ya", letterContent: "य" },
      { itemId: "img-robot-h", itemContent: "🤖", letterId: "hindi-ra", letterContent: "र" },
      { itemId: "img-lamp-h", itemContent: "💡", letterId: "hindi-la", letterContent: "ल" },
      { itemId: "img-vine-h", itemContent: "🌿", letterId: "hindi-va", letterContent: "व" },
    ],
  },
  {
    title: "हिंदी अक्षर से मिलान करें",
    pairs: [
      { itemId: "img-snake-h", itemContent: "🐍", letterId: "hindi-sha", letterContent: "श" },
      { itemId: "img-shell-h", itemContent: "🐚", letterId: "hindi-shha", letterContent: "ष" },
      { itemId: "img-star-h", itemContent: "⭐", letterId: "hindi-sa", letterContent: "स" },
      { itemId: "img-house-h", itemContent: "🏠", letterId: "hindi-ha", letterContent: "ह" },
    ],
  },
];

// Number Games (1-10)
const numberGames: GameData[] = [
  {
    title: "Match the Number",
    pairs: [
      { itemId: "img-one-apple", itemContent: "🍎", letterId: "num-1", letterContent: "1" },
      { itemId: "img-two-stars", itemContent: "⭐⭐", letterId: "num-2", letterContent: "2" },
      { itemId: "img-three-flowers", itemContent: "🌸🌸🌸", letterId: "num-3", letterContent: "3" },
      { itemId: "img-four-balloons", itemContent: "🎈🎈🎈🎈", letterId: "num-4", letterContent: "4" },
    ],
  },
  {
    title: "Match the Number",
    pairs: [
      { itemId: "img-five-butterflies", itemContent: "🦋🦋🦋🦋🦋", letterId: "num-5", letterContent: "5" },
      { itemId: "img-six-hearts", itemContent: "❤️❤️❤️❤️❤️❤️", letterId: "num-6", letterContent: "6" },
      { itemId: "img-seven-circles", itemContent: "🔵🔵🔵🔵🔵🔵🔵", letterId: "num-7", letterContent: "7" },
      { itemId: "img-eight-suns", itemContent: "☀️☀️☀️☀️☀️☀️☀️☀️", letterId: "num-8", letterContent: "8" },
    ],
  },
  {
    title: "Match the Number",
    pairs: [
      { itemId: "img-nine-candies", itemContent: "🍬🍬🍬🍬🍬🍬🍬🍬🍬", letterId: "num-9", letterContent: "9" },
      { itemId: "img-ten-cookies", itemContent: "🍪🍪🍪🍪🍪🍪🍪🍪🍪🍪", letterId: "num-10", letterContent: "10" },
      { itemId: "img-one-car", itemContent: "🚗", letterId: "num-1b", letterContent: "1" },
      { itemId: "img-two-boats", itemContent: "⛵⛵", letterId: "num-2b", letterContent: "2" },
    ],
  },
];

export const gameDataSet: GameData[] = [
  ...englishGames,
  ...hindiGames,
  ...numberGames,
];

export const categorizedGames = {
  english: englishGames,
  hindi: hindiGames,
  numbers: numberGames,
};
