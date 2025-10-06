import { useState, useEffect } from "react";
import { Home, Check, Coins } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DraggableItem } from "./DraggableItem";
import { DropZone } from "./DropZone";
import { Confetti } from "./Confetti";
import { GameData, gameDataSet } from "@/data/gameData";
import { toast } from "sonner";
import { playCorrectSound, playIncorrectSound } from "@/utils/sounds";

export const MatchingGame = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [showConfetti, setShowConfetti] = useState(false);
  const [draggedItem, setDraggedItem] = useState<string | null>(null);

  const currentGame: GameData = gameDataSet[currentIndex];
  const allOptions = [...currentGame.options];

  const handleDragStart = (id: string) => {
    setDraggedItem(id);
  };

  const handleDrop = (droppedId: string) => {
    if (droppedId === currentGame.correctAnswer) {
      // Correct answer
      setIsCorrect(true);
      setScore(score + 50);
      setShowConfetti(true);
      
      // Play success sound
      playCorrectSound();
      
      toast.success("Excellent! 🎉", {
        description: "Keep going!",
      });

      // Move to next after delay
      setTimeout(() => {
        setShowConfetti(false);
        setIsCorrect(null);
        if (currentIndex < gameDataSet.length - 1) {
          setCurrentIndex(currentIndex + 1);
        } else {
          toast.success("🎊 You completed all levels!", {
            description: `Final Score: ${score + 50}`,
          });
          setCurrentIndex(0);
          setScore(0);
        }
      }, 2000);
    } else {
      // Wrong answer
      setIsCorrect(false);
      
      // Play error sound
      playIncorrectSound();
      
      toast.error("Oops! Try again! 🤔");

      setTimeout(() => {
        setIsCorrect(null);
      }, 1000);
    }
    setDraggedItem(null);
  };

  return (
    <div className="min-h-screen bg-[hsl(var(--game-bg))] p-3 sm:p-4 md:p-6 pb-safe">
      {showConfetti && <Confetti />}
      
      {/* Header */}
      <div className="max-w-5xl mx-auto mb-6 sm:mb-8">
        <div className="flex items-center justify-between bg-primary text-primary-foreground rounded-2xl sm:rounded-3xl px-3 sm:px-6 py-3 sm:py-4 shadow-xl">
          <Button 
            variant="ghost" 
            size="icon" 
            className="text-primary-foreground hover:bg-primary-foreground/20 h-8 w-8 sm:h-10 sm:w-10"
          >
            <Home className="h-4 w-4 sm:h-6 sm:w-6" />
          </Button>
          
          <h1 className="text-sm sm:text-xl md:text-2xl font-bold text-center flex-1 mx-2 line-clamp-1">
            {currentGame.title}
          </h1>
          
          <div className="flex items-center gap-2 sm:gap-4">
            <div className="flex items-center gap-1 sm:gap-2 bg-primary-foreground/20 rounded-full px-2 sm:px-4 py-1 sm:py-2">
              <Coins className="h-4 w-4 sm:h-5 sm:w-5 text-[hsl(var(--coin-gold))]" />
              <span className="font-bold text-sm sm:text-base">{score}</span>
            </div>
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-primary-foreground hover:bg-primary-foreground/20 h-8 w-8 sm:h-10 sm:w-10 hidden sm:flex"
            >
              <Check className="h-4 w-4 sm:h-6 sm:w-6" />
            </Button>
          </div>
        </div>
      </div>

      {/* Game Area */}
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Target Item - Large Drop Zone */}
        <div className="flex justify-center">
          <DropZone
            targetId={currentGame.correctAnswer}
            onDrop={handleDrop}
            isCorrect={isCorrect}
            isEmpty={draggedItem !== currentGame.correctAnswer}
          >
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-7xl sm:text-8xl md:text-9xl">
                {currentGame.target}
              </div>
            </div>
          </DropZone>
        </div>

        {/* Instruction Text */}
        <div className="text-center">
          <p className="text-lg md:text-xl font-semibold text-muted-foreground">
            👆 Drag the correct answer here
          </p>
        </div>

        {/* Draggable Options - Images */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          {allOptions.map((option) => (
            <DraggableItem
              key={option.id}
              id={option.id}
              onDragStart={handleDragStart}
              disabled={isCorrect === true}
            >
              <div className="game-card p-4 sm:p-6 flex items-center justify-center aspect-square touch-none">
                <div className="text-4xl sm:text-5xl md:text-6xl">{option.content}</div>
              </div>
            </DraggableItem>
          ))}
        </div>

        {/* Letter/Number Options */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          {currentGame.letterOptions.map((option) => (
            <DraggableItem
              key={option.id}
              id={option.id}
              onDragStart={handleDragStart}
              disabled={isCorrect === true}
            >
              <div className="game-card p-4 sm:p-6 flex items-center justify-center aspect-square bg-gradient-to-br from-accent/30 to-accent/10 touch-none">
                <div className="text-5xl sm:text-6xl md:text-7xl font-bold text-foreground">
                  {option.content}
                </div>
              </div>
            </DraggableItem>
          ))}
        </div>

        {/* Progress Indicator */}
        <div className="mt-8 flex justify-center gap-2 flex-wrap px-4">
          {gameDataSet.map((_, index) => (
            <div
              key={index}
              className={`h-2.5 sm:h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "w-6 sm:w-8 bg-primary"
                  : index < currentIndex
                  ? "w-2.5 sm:w-3 bg-success"
                  : "w-2.5 sm:w-3 bg-muted"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
