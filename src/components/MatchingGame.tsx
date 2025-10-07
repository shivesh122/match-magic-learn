import { useState, useEffect, useMemo } from "react";
import { Home, Check, Coins } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DraggableItem } from "./DraggableItem";
import { DropZone } from "./DropZone";
import { Confetti } from "./Confetti";
import { GameData, gameDataSet } from "@/data/gameData";
import { toast } from "sonner";
import { playCorrectSound, playIncorrectSound } from "@/utils/sounds";

const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

export const MatchingGame = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);
  const [draggedItem, setDraggedItem] = useState<string | null>(null);
  const [matchedPairs, setMatchedPairs] = useState<Set<string>>(new Set());
  const [wrongDrops, setWrongDrops] = useState<Map<string, boolean>>(new Map());

  const currentGame: GameData = gameDataSet[currentIndex];
  
  const shuffledItems = useMemo(() => shuffleArray(currentGame.pairs), [currentIndex]);
  const shuffledLetters = useMemo(() => shuffleArray([...currentGame.pairs]), [currentIndex]);

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
          
          if (currentIndex < gameDataSet.length - 1) {
            setCurrentIndex(currentIndex + 1);
            toast.success("Level Complete! 🎊", {
              description: "Moving to next level!",
            });
          } else {
            toast.success("🎊 You completed all levels!", {
              description: `Final Score: ${score + 25}`,
            });
            setCurrentIndex(0);
            setScore(0);
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
    <div className="min-h-screen bg-[hsl(var(--game-bg))] p-4 md:p-8">
      {showConfetti && <Confetti />}
      
      {/* Header */}
      <div className="max-w-6xl mx-auto mb-8">
        <div className="flex items-center justify-between bg-primary text-primary-foreground rounded-3xl px-6 py-4 shadow-xl">
          <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground/20">
            <Home className="h-6 w-6" />
          </Button>
          
          <h1 className="text-2xl md:text-3xl font-bold">
            {currentGame.title}
          </h1>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 bg-primary-foreground/20 rounded-full px-4 py-2">
              <Coins className="h-5 w-5 text-[hsl(var(--coin-gold))]" />
              <span className="font-bold">+{score}</span>
            </div>
            <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground/20">
              <Check className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>

      {/* Game Area */}
      <div className="max-w-6xl mx-auto">
        <p className="text-center text-muted-foreground mb-8 text-lg">
          👇 Drag the letters to match with the correct items
        </p>

        {/* Items Grid (Drop Zones) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {shuffledItems.map((pair) => (
            <DropZone
              key={pair.itemId}
              targetId={pair.itemId}
              onDrop={(droppedId) => handleDrop(pair.itemId, droppedId)}
              isCorrect={matchedPairs.has(pair.itemId) ? true : wrongDrops.get(pair.itemId) ? false : null}
              isEmpty={!matchedPairs.has(pair.itemId)}
            >
              <div className="flex flex-col items-center justify-center gap-3 min-h-[150px]">
                <div className="text-6xl md:text-7xl">{pair.itemContent}</div>
                {matchedPairs.has(pair.itemId) && (
                  <div className="text-4xl md:text-5xl font-bold text-success animate-bounce-in">
                    {pair.letterContent}
                  </div>
                )}
              </div>
            </DropZone>
          ))}
        </div>

        {/* Draggable Letters Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {shuffledLetters.map((pair) => (
            <DraggableItem
              key={pair.letterId}
              id={pair.letterId}
              onDragStart={handleDragStart}
              disabled={matchedPairs.has(pair.itemId)}
            >
              <div className="game-card p-8 flex items-center justify-center min-h-[120px] bg-gradient-to-br from-accent/30 to-accent/10">
                <div className="text-6xl md:text-7xl font-bold text-foreground">
                  {pair.letterContent}
                </div>
              </div>
            </DraggableItem>
          ))}
        </div>

        {/* Progress Indicator */}
        <div className="mt-12 flex justify-center gap-2">
          {gameDataSet.map((_, index) => (
            <div
              key={index}
              className={`h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "w-8 bg-primary"
                  : index < currentIndex
                  ? "w-3 bg-success"
                  : "w-3 bg-muted"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
