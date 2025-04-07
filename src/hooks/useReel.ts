import { SYMBOLS, SYMBOL_SIZE } from "@components/Reel/reelConfig";
import { shuffle } from "@utils/shuffle";
import { useEffect, useState } from "react";

export const useReel = () => {
  const [isSpinning, setIsSpinning] = useState(false);
  const [stopPosition, setStopPosition] = useState(0);
  const [sprites, setSprites] = useState<string[]>([]);
  const [hasJiggle, setHasJiggle] = useState(false);

  const initializeSprites = () => {
    const shuffled = shuffle(SYMBOLS);
    setSprites([...shuffled, ...shuffled]);
    return shuffled;
  };

  useEffect(() => {
    initializeSprites();
  }, []);

  const startSpin = () => {
    if (!isSpinning) {
      const newSprites = initializeSprites();
      setIsSpinning(true);
      setStopPosition(
        Math.floor(Math.random() * newSprites.length) * SYMBOL_SIZE.height,
      );
    }
  };

  const stopSpin = () => {
    if (isSpinning) {
      setIsSpinning(false);

      setTimeout(() => {
        setHasJiggle(true);
        setTimeout(() => {
          setHasJiggle(false);
        }, 300);
      }, 50);
    }
  };

  return {
    isSpinning,
    stopPosition,
    sprites,
    startSpin,
    stopSpin,
    hasJiggle,
  };
};
