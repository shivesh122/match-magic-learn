import { useState, useMemo, useCallback } from "react";
import { Home, Check, Coins } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DraggableItem } from "./DraggableItem";
import { DropZone } from "./DropZone";
import { Confetti } from "./Confetti";
import { GameData, categorizedGames } from "@/data/gameData";
import { toast } from "sonner";
import { playCorrectSound, playIncorrectSound } from "@/utils/sounds";

type Category = "english" | "hindi" | "numbers";

const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

export const MatchingGame = () => {
  const [category, setCategory] = useState<Category>("english");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);
  const [draggedItem, setDraggedItem] = useState<string | null>(null);
  const [matchedPairs, setMatchedPairs] = useState<Set<string>>(new Set());
  const [wrongDrops, setWrongDrops] = useState<Map<string, boolean>>(new Map());

  const currentGameSet = categorizedGames[category];
  const currentGame: GameData = currentGameSet[currentIndex];
  
  const shuffledItems = useMemo(() => shuffleArray(currentGame.pairs), [currentIndex, category]);
  const shuffledLetters = useMemo(() => shuffleArray([...currentGame.pairs]), [currentIndex, category]);

  const switchCategory = useCallback((newCategory: Category) => {
    setCategory(newCategory);
    setCurrentIndex(0);
    setScore(0);
    setMatchedPairs(new Set());
    setWrongDrops(new Map());
  }, []);

  const handleDragStart = (id: string) => {
    setDraggedItem(id);
  };

  const handleDrop = (itemId: string, droppedLetterId: string) => {
    // Find the correct letter for this item
    const correctPair = currentGame.pairs.find(p => p.itemId === itemId);
    
    if (correctPair && droppedLetterId === correctPair.letterId) {
      // Correct match
      const newMatched = new Set(matchedPairs);
      newMatched.add(itemId);
      setMatchedPairs(newMatched);
      setScore(score + 25);
      
      playCorrectSound();
      
      toast.success("Perfect! 🎉", {
        description: "Great match!",
      });

      // Check if all pairs are matched
      if (newMatched.size === currentGame.pairs.length) {
        setShowConfetti(true);
        
        setTimeout(() => {
          setShowConfetti(false);
          setMatchedPairs(new Set());
          setWrongDrops(new Map());
          
          if (currentIndex < currentGameSet.length - 1) {
            setCurrentIndex(currentIndex + 1);
            toast.success("Level Complete! 🎊", {
              description: "Moving to next level!",
            });
          } else {
            toast.success("🎊 Category Complete!", {
              description: `Final Score: ${score + 25}`,
            });
            setCurrentIndex(0);
            setMatchedPairs(new Set());
          }
        }, 2000);
      }
    } else {
      // Wrong match
      playIncorrectSound();
      
      const newWrongDrops = new Map(wrongDrops);
      newWrongDrops.set(itemId, true);
      setWrongDrops(newWrongDrops);
      
      toast.error("Oops! Try again! 🤔");

      setTimeout(() => {
        const cleared = new Map(wrongDrops);
        cleared.delete(itemId);
        setWrongDrops(cleared);
      }, 1000);
    }
    setDraggedItem(null);
  };

  return (
    <div className="min-h-screen bg-[hsl(var(--game-bg))] p-3 sm:p-4 md:p-8 pb-safe">
      {showConfetti && <Confetti />}
      
      {/* Header */}
      <div className="max-w-6xl mx-auto mb-4 sm:mb-6 md:mb-8">
        <div className="flex flex-col sm:flex-row items-center justify-between bg-primary text-primary-foreground rounded-2xl sm:rounded-3xl px-4 sm:px-6 py-3 sm:py-4 shadow-xl gap-3 sm:gap-0">
          <div className="flex items-center justify-between w-full sm:w-auto gap-2">
            <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground/20 h-8 w-8 sm:h-10 sm:w-10">
              <Home className="h-4 w-4 sm:h-6 sm:w-6" />
            </Button>
            
            <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-center flex-1 sm:flex-none">
              {currentGame.title}
            </h1>
            
            <div className="flex items-center gap-2 sm:hidden">
              <div className="flex items-center gap-1 bg-primary-foreground/20 rounded-full px-3 py-1.5">
                <Coins className="h-4 w-4 text-[hsl(var(--coin-gold))]" />
                <span className="font-bold text-sm">{score}</span>
              </div>
            </div>
          </div>
          
          <div className="hidden sm:flex items-center gap-4">
            <div className="flex items-center gap-2 bg-primary-foreground/20 rounded-full px-4 py-2">
              <Coins className="h-5 w-5 text-[hsl(var(--coin-gold))]" />
              <span className="font-bold">{score}</span>
            </div>
            <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground/20">
              <Check className="h-6 w-6" />
            </Button>
          </div>
        </div>
        
        {/* Category Switcher */}
        <div className="mt-4 sm:mt-6 flex justify-center gap-2 sm:gap-3">
          <Button
            onClick={() => switchCategory("english")}
            variant={category === "english" ? "default" : "outline"}
            className="flex-1 sm:flex-none text-sm sm:text-base px-4 sm:px-6"
          >
            🔤 English
          </Button>
          <Button
            onClick={() => switchCategory("hindi")}
            variant={category === "hindi" ? "default" : "outline"}
            className="flex-1 sm:flex-none text-sm sm:text-base px-4 sm:px-6"
          >
            🔤 हिंदी
          </Button>
          <Button
            onClick={() => switchCategory("numbers")}
            variant={category === "numbers" ? "default" : "outline"}
            className="flex-1 sm:flex-none text-sm sm:text-base px-4 sm:px-6"
          >
            🔢 Numbers
          </Button>
        </div>
      </div>

      {/* Game Area */}
      <div className="max-w-6xl mx-auto">
        <p className="text-center text-muted-foreground mb-4 sm:mb-6 md:mb-8 text-sm sm:text-base md:text-lg px-2">
          👇 Drag the letters to match with the correct items
        </p>

        {/* Items Grid (Drop Zones) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-8 sm:mb-10 md:mb-12">
          {shuffledItems.map((pair) => (
            <DropZone
              key={pair.itemId}
              targetId={pair.itemId}
              onDrop={(droppedId) => handleDrop(pair.itemId, droppedId)}
              isCorrect={matchedPairs.has(pair.itemId) ? true : wrongDrops.get(pair.itemId) ? false : null}
              isEmpty={!matchedPairs.has(pair.itemId)}
            >
              <div className="flex flex-col items-center justify-center gap-2 min-h-[120px] sm:min-h-[140px] md:min-h-[150px] p-2 overflow-hidden">
                <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl break-words text-center w-full">{pair.itemContent}</div>
                {matchedPairs.has(pair.itemId) && (
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-success animate-bounce-in break-words text-center w-full">
                    {pair.letterContent}
                  </div>
                )}
              </div>
            </DropZone>
          ))}
        </div>

        {/* Draggable Letters Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {shuffledLetters.map((pair) => (
            <DraggableItem
              key={pair.letterId}
              id={pair.letterId}
              onDragStart={handleDragStart}
              disabled={matchedPairs.has(pair.itemId)}
            >
              <div className="game-card p-4 sm:p-6 md:p-8 flex items-center justify-center min-h-[100px] sm:min-h-[110px] md:min-h-[120px] bg-gradient-to-br from-accent/30 to-accent/10 overflow-hidden">
                <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground break-words text-center w-full">
                  {pair.letterContent}
                </div>
              </div>
            </DraggableItem>
          ))}
        </div>

        {/* Progress Indicator */}
        <div className="mt-8 sm:mt-10 md:mt-12 flex justify-center gap-1.5 sm:gap-2 px-4">
          {currentGameSet.map((_, index) => (
            <div
              key={index}
              className={`h-2 sm:h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "w-6 sm:w-8 bg-primary"
                  : index < currentIndex
                  ? "w-2 sm:w-3 bg-success"
                  : "w-2 sm:w-3 bg-muted"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
