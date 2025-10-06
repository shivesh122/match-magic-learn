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

export const gameDataSet: GameData[] = [
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
