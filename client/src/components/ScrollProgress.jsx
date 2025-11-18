import { useScrollProgress } from "../hooks/useScrollAnimation";
import "./ScrollProgress.css";

export const ScrollProgress = () => {
  const progress = useScrollProgress();

  return (
    <div className="scroll-progress-container">
      <div className="scroll-progress-bar" style={{ width: `${progress}%` }} />
    </div>
  );
};
