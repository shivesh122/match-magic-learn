import { ReactNode, useState } from "react";

interface DraggableItemProps {
  id: string;
  children: ReactNode;
  onDragStart: (id: string) => void;
  disabled?: boolean;
}

export const DraggableItem = ({ id, children, onDragStart, disabled }: DraggableItemProps) => {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragStart = (e: React.DragEvent) => {
    if (disabled) return;
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/plain", id);
    setIsDragging(true);
    onDragStart(id);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    if (disabled) return;
    (e.currentTarget as HTMLDivElement).style.opacity = "0.5";
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    (e.currentTarget as HTMLDivElement).style.opacity = "1";
  };

  return (
    <div
      draggable={!disabled}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className={`draggable-item select-none ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      } ${isDragging ? "opacity-50 scale-95" : ""}`}
    >
      {children}
    </div>
  );
};
