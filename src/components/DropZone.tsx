import { ReactNode, useState } from "react";

interface DropZoneProps {
  targetId: string;
  children: ReactNode;
  onDrop: (id: string) => void;
  isCorrect: boolean | null;
  isEmpty: boolean;
}

export const DropZone = ({ targetId, children, onDrop, isCorrect, isEmpty }: DropZoneProps) => {
  const [isDragOver, setIsDragOver] = useState(false);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
    setIsDragOver(true);
  };

  const handleDragLeave = () => {
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    const droppedId = e.dataTransfer.getData("text/plain");
    onDrop(droppedId);
  };

  const getDropZoneClass = () => {
    if (isCorrect === true) return "drop-zone-correct";
    if (isCorrect === false) return "drop-zone-incorrect";
    if (isDragOver) return "drop-zone-active";
    return "";
  };

  return (
    <div
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      className={`drop-zone ${getDropZoneClass()} p-6 sm:p-8 w-full max-w-md mx-auto aspect-square flex items-center justify-center bg-card/50 backdrop-blur-sm`}
    >
      {children}
    </div>
  );
};
