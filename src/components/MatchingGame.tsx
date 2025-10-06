import { useState, useEffect } from "react";
import { Home, Check, Coins } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DraggableItem } from "./DraggableItem";
import { DropZone } from "./DropZone";
import { Confetti } from "./Confetti";
import { GameData, gameDataSet } from "@/data/gameData";
import { toast } from "sonner";

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
      const audio = new Audio();
      audio.src = "data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBSuBzvLZiTcIF2i78+ifTQwOUKfk77RgGwU7k9j0ynksBSh+zO/eij0JEXG66OyvWhwMUp/k8LRgHAU3ldby0H0wBSN8y+7bkD4MGnC84OqsWRsLT6Lk77NfGgU4lNbx0X4xBCJ7yu7dlEELEm+54Oaoa";
      audio.play().catch(() => {});
      
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
      const audio = new Audio();
      audio.src = "data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACAgoSGiIqMjo6MioiFgn17eXd1c3FvcG9ubm1sbGxra2pqaWloZ2dmZWVkY2JiYWBfX15dXFxbWlpZWFdXVlVVVFRTU1JSUVFQUFBPTk5OTU1MTEtLSkpKSUhISEdHRkZFRUREQ0NDQkJBQUFAPz8+Pj09PDw7OzotLSwsKyoqKSkoKCcmJiUkJCMiIiEhICAfHx4eHR0cHBsbGhoZGRgYFxcWFhUVFBQTExISEhEREBAP";
      audio.play().catch(() => {});
      
      toast.error("Oops! Try again! 🤔");

      setTimeout(() => {
        setIsCorrect(null);
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
        {/* Target Item */}
        <div className="flex justify-center mb-12">
          <DropZone
            targetId={currentGame.correctAnswer}
            onDrop={handleDrop}
            isCorrect={isCorrect}
            isEmpty={draggedItem !== currentGame.correctAnswer}
          >
            <div className="w-32 h-32 md:w-40 md:h-40 flex items-center justify-center text-6xl md:text-8xl">
              {currentGame.target}
            </div>
          </DropZone>
        </div>

        {/* Draggable Options Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          {allOptions.map((option) => (
            <DraggableItem
              key={option.id}
              id={option.id}
              onDragStart={handleDragStart}
              disabled={isCorrect === true}
            >
              <div className="game-card p-8 flex items-center justify-center min-h-[150px]">
                <div className="text-5xl md:text-6xl">{option.content}</div>
              </div>
            </DraggableItem>
          ))}
        </div>

        {/* Letter Options Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {currentGame.letterOptions.map((option) => (
            <DraggableItem
              key={option.id}
              id={option.id}
              onDragStart={handleDragStart}
              disabled={isCorrect === true}
            >
              <div className="game-card p-8 flex items-center justify-center min-h-[120px] bg-gradient-to-br from-accent/30 to-accent/10">
                <div className="text-6xl md:text-7xl font-bold text-foreground">
                  {option.content}
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
