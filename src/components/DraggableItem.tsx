import { ReactNode } from "react";

interface DraggableItemProps {
  id: string;
  children: ReactNode;
  onDragStart: (id: string) => void;
  disabled?: boolean;
}

export const DraggableItem = ({ id, children, onDragStart, disabled }: DraggableItemProps) => {
  const handleDragStart = (e: React.DragEvent) => {
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/plain", id);
    onDragStart(id);
  };

  return (
    <div
      draggable={!disabled}
      onDragStart={handleDragStart}
      className={`draggable-item ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
    >
      {children}
    </div>
  );
};
