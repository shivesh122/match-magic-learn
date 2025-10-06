export interface GameOption {
  id: string;
  content: string;
}

export interface GameData {
  title: string;
  target: string;
  correctAnswer: string;
  options: GameOption[];
  letterOptions: GameOption[];
}

// English Letters (A-E)
const englishGames: GameData[] = [
  {
    title: "Match Image with Letter",
    target: "🍎",
    correctAnswer: "letter-a",
    options: [
      { id: "img-apple", content: "🍎" },
      { id: "img-dog", content: "🐕" },
      { id: "img-cow", content: "🐄" },
      { id: "img-ball", content: "🎾" },
    ],
    letterOptions: [
      { id: "letter-b", content: "B" },
      { id: "letter-c", content: "C" },
      { id: "letter-d", content: "D" },
      { id: "letter-a", content: "A" },
    ],
  },
  {
    title: "Match Image with Letter",
    target: "🐝",
    correctAnswer: "letter-b",
    options: [
      { id: "img-bee", content: "🐝" },
      { id: "img-cat", content: "🐱" },
      { id: "img-ant", content: "🐜" },
      { id: "img-dog", content: "🐕" },
    ],
    letterOptions: [
      { id: "letter-a", content: "A" },
      { id: "letter-c", content: "C" },
      { id: "letter-d", content: "D" },
      { id: "letter-b", content: "B" },
    ],
  },
  {
    title: "Match Image with Letter",
    target: "🐱",
    correctAnswer: "letter-c",
    options: [
      { id: "img-cat", content: "🐱" },
      { id: "img-bee", content: "🐝" },
      { id: "img-apple", content: "🍎" },
      { id: "img-dog", content: "🐕" },
    ],
    letterOptions: [
      { id: "letter-a", content: "A" },
      { id: "letter-b", content: "B" },
      { id: "letter-d", content: "D" },
      { id: "letter-c", content: "C" },
    ],
  },
  {
    title: "Match Image with Letter",
    target: "🐕",
    correctAnswer: "letter-d",
    options: [
      { id: "img-dog", content: "🐕" },
      { id: "img-cat", content: "🐱" },
      { id: "img-egg", content: "🥚" },
      { id: "img-fish", content: "🐟" },
    ],
    letterOptions: [
      { id: "letter-c", content: "C" },
      { id: "letter-e", content: "E" },
      { id: "letter-f", content: "F" },
      { id: "letter-d", content: "D" },
    ],
  },
  {
    title: "Match Image with Letter",
    target: "🥚",
    correctAnswer: "letter-e",
    options: [
      { id: "img-egg", content: "🥚" },
      { id: "img-dog", content: "🐕" },
      { id: "img-fish", content: "🐟" },
      { id: "img-grapes", content: "🍇" },
    ],
    letterOptions: [
      { id: "letter-d", content: "D" },
      { id: "letter-f", content: "F" },
      { id: "letter-g", content: "G" },
      { id: "letter-e", content: "E" },
    ],
  },
];

// Hindi Letters (अ-ई)
const hindiGames: GameData[] = [
  {
    title: "हिंदी अक्षर से मिलान करें",
    target: "🍎",
    correctAnswer: "hindi-a",
    options: [
      { id: "img-apple", content: "🍎" },
      { id: "img-mango", content: "🥭" },
      { id: "img-ice", content: "🧊" },
      { id: "img-elephant", content: "🐘" },
    ],
    letterOptions: [
      { id: "hindi-aa", content: "आ" },
      { id: "hindi-i", content: "इ" },
      { id: "hindi-ee", content: "ई" },
      { id: "hindi-a", content: "अ" },
    ],
  },
  {
    title: "हिंदी अक्षर से मिलान करें",
    target: "🥭",
    correctAnswer: "hindi-aa",
    options: [
      { id: "img-mango", content: "🥭" },
      { id: "img-apple", content: "🍎" },
      { id: "img-ice", content: "🧊" },
      { id: "img-orange", content: "🍊" },
    ],
    letterOptions: [
      { id: "hindi-a", content: "अ" },
      { id: "hindi-i", content: "इ" },
      { id: "hindi-u", content: "उ" },
      { id: "hindi-aa", content: "आ" },
    ],
  },
  {
    title: "हिंदी अक्षर से मिलान करें",
    target: "🧊",
    correctAnswer: "hindi-i",
    options: [
      { id: "img-ice", content: "🧊" },
      { id: "img-apple", content: "🍎" },
      { id: "img-umbrella", content: "☂️" },
      { id: "img-mango", content: "🥭" },
    ],
    letterOptions: [
      { id: "hindi-a", content: "अ" },
      { id: "hindi-aa", content: "आ" },
      { id: "hindi-u", content: "उ" },
      { id: "hindi-i", content: "इ" },
    ],
  },
  {
    title: "हिंदी अक्षर से मिलान करें",
    target: "🐝",
    correctAnswer: "hindi-ee",
    options: [
      { id: "img-bee", content: "🐝" },
      { id: "img-ice", content: "🧊" },
      { id: "img-umbrella", content: "☂️" },
      { id: "img-apple", content: "🍎" },
    ],
    letterOptions: [
      { id: "hindi-a", content: "अ" },
      { id: "hindi-i", content: "इ" },
      { id: "hindi-u", content: "उ" },
      { id: "hindi-ee", content: "ई" },
    ],
  },
  {
    title: "हिंदी अक्षर से मिलान करें",
    target: "☂️",
    correctAnswer: "hindi-u",
    options: [
      { id: "img-umbrella", content: "☂️" },
      { id: "img-ice", content: "🧊" },
      { id: "img-bee", content: "🐝" },
      { id: "img-mango", content: "🥭" },
    ],
    letterOptions: [
      { id: "hindi-a", content: "अ" },
      { id: "hindi-i", content: "इ" },
      { id: "hindi-ee", content: "ई" },
      { id: "hindi-u", content: "उ" },
    ],
  },
];

// Number Games (1-5)
const numberGames: GameData[] = [
  {
    title: "Match the Number",
    target: "🍎",
    correctAnswer: "num-1",
    options: [
      { id: "img-one-apple", content: "🍎" },
      { id: "img-two-apples", content: "🍎🍎" },
      { id: "img-three-apples", content: "🍎🍎🍎" },
      { id: "img-four-apples", content: "🍎🍎🍎🍎" },
    ],
    letterOptions: [
      { id: "num-2", content: "2" },
      { id: "num-3", content: "3" },
      { id: "num-4", content: "4" },
      { id: "num-1", content: "1" },
    ],
  },
  {
    title: "Match the Number",
    target: "⭐⭐",
    correctAnswer: "num-2",
    options: [
      { id: "img-one-star", content: "⭐" },
      { id: "img-two-stars", content: "⭐⭐" },
      { id: "img-three-stars", content: "⭐⭐⭐" },
      { id: "img-four-stars", content: "⭐⭐⭐⭐" },
    ],
    letterOptions: [
      { id: "num-1", content: "1" },
      { id: "num-3", content: "3" },
      { id: "num-4", content: "4" },
      { id: "num-2", content: "2" },
    ],
  },
  {
    title: "Match the Number",
    target: "🌸🌸🌸",
    correctAnswer: "num-3",
    options: [
      { id: "img-one-flower", content: "🌸" },
      { id: "img-two-flowers", content: "🌸🌸" },
      { id: "img-three-flowers", content: "🌸🌸🌸" },
      { id: "img-four-flowers", content: "🌸🌸🌸🌸" },
    ],
    letterOptions: [
      { id: "num-1", content: "1" },
      { id: "num-2", content: "2" },
      { id: "num-4", content: "4" },
      { id: "num-3", content: "3" },
    ],
  },
  {
    title: "Match the Number",
    target: "🎈🎈🎈🎈",
    correctAnswer: "num-4",
    options: [
      { id: "img-one-balloon", content: "🎈" },
      { id: "img-two-balloons", content: "🎈🎈" },
      { id: "img-three-balloons", content: "🎈🎈🎈" },
      { id: "img-four-balloons", content: "🎈🎈🎈🎈" },
    ],
    letterOptions: [
      { id: "num-1", content: "1" },
      { id: "num-2", content: "2" },
      { id: "num-3", content: "3" },
      { id: "num-4", content: "4" },
    ],
  },
  {
    title: "Match the Number",
    target: "🦋🦋🦋🦋🦋",
    correctAnswer: "num-5",
    options: [
      { id: "img-two-butterflies", content: "🦋🦋" },
      { id: "img-three-butterflies", content: "🦋🦋🦋" },
      { id: "img-four-butterflies", content: "🦋🦋🦋🦋" },
      { id: "img-five-butterflies", content: "🦋🦋🦋🦋🦋" },
    ],
    letterOptions: [
      { id: "num-2", content: "2" },
      { id: "num-3", content: "3" },
      { id: "num-4", content: "4" },
      { id: "num-5", content: "5" },
    ],
  },
];

export const gameDataSet: GameData[] = [
  ...englishGames,
  ...hindiGames,
  ...numberGames,
];
