import {
  SYMBOLS,
  SYMBOL_SIZE,
  VISIBLE_SPRITES,
} from "@components/Reel/reelConfig";
import { shuffle } from "@utils/shuffle";
import { useEffect, useState } from "react";

export const useReel = (onStop?: (visibleSymbols: string[]) => void) => {
  const [isSpinning, setIsSpinning] = useState(false);
  const [stopPosition, setStopPosition] = useState(0);
  const [sprites, setSprites] = useState<string[]>([]);

  const initializeSprites = () => {
    const shuffled = shuffle(SYMBOLS);
    setSprites([...shuffled, ...shuffled]);
    return shuffled;
  };

  useEffect(() => {
    initializeSprites();
  }, []);

  const startSpin = () => {
    const newSprites = initializeSprites();
    setIsSpinning(true);
    setStopPosition(
      Math.floor(Math.random() * newSprites.length) * SYMBOL_SIZE.height,
    );
  };

  const stopSpin = () => {
    setIsSpinning(false);

    const visibleIndices = [];
    const spriteCount = sprites.length / 2;

    for (let i = 0; i < VISIBLE_SPRITES; i++) {
      const pos = Math.floor(
        (stopPosition / SYMBOL_SIZE.height + i) % spriteCount,
      );
      visibleIndices.push(pos);
    }

    const visibleSymbols = visibleIndices.map((idx) => sprites[idx]);
    onStop?.(visibleSymbols);
  };

  return {
    isSpinning,
    stopPosition,
    sprites,
    startSpin,
    stopSpin,
  };
};
