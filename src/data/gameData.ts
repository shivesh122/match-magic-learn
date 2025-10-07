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

// English Letters (A-D)
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
];

// Hindi Letters
const hindiGames: GameData[] = [
  {
    title: "हिंदी अक्षर से मिलान करें",
    pairs: [
      { itemId: "img-apple-h", itemContent: "🍎", letterId: "hindi-a", letterContent: "अ" },
      { itemId: "img-mango-h", itemContent: "🥭", letterId: "hindi-aa", letterContent: "आ" },
      { itemId: "img-ice-h", itemContent: "🧊", letterId: "hindi-i", letterContent: "इ" },
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
];

// Number Games
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
