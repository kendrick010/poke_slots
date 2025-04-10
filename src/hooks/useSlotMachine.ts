import { SYMBOLS } from "@components/Reel/reelConfig";
import { usePreviousState } from "@hooks/usePreviousState";
import { allElementsSame } from "@utils/allElementsSame";
import { useEffect, useState } from "react";

const emptySymbols: string[] = [];

const calculateWin = (reels: string[][]): { amount: number; lines: string[] } => {
  const [left, middle, right] = reels;
  let totalWin = 0;
  const winningLines: string[] = [];

  // Check top, middle, bottom rows
  if (allElementsSame([left[0], middle[0], right[0]])) {
    totalWin += SYMBOLS[left[0]];
    winningLines.push('topRow');
  }
  if (allElementsSame([left[1], middle[1], right[1]])) {
    totalWin += SYMBOLS[left[1]];
    winningLines.push('middleRow');
  }
  if (allElementsSame([left[2], middle[2], right[2]])) {
    totalWin += SYMBOLS[left[2]];
    winningLines.push('bottomRow');
  }

  // Check diagonals
  if (allElementsSame([left[0], middle[1], right[2]])) {
    totalWin += SYMBOLS[left[0]];
    winningLines.push('leftDiagonal');
  }
  if (allElementsSame([left[2], middle[1], right[0]])) {
    totalWin += SYMBOLS[left[2]];
    winningLines.push('rightDiagonal');
  }

  return { amount: totalWin, lines: winningLines };
};

export function useSlotMachine() {
  const [leftReelSymbols, setLeftReelSymbols] = useState<string[]>();
  const [middleReelSymbols, setMiddleReelSymbols] = useState<string[]>();
  const [rightReelSymbols, setRightReelSymbols] = useState<string[]>();
  const [winningLines, setWinningLines] = useState<string[]>([]);

  const [coinCredit, setCoinCredit, prevousCoinCredit] = usePreviousState(25);
  const [payout, setPayout, prevousPayout] = usePreviousState(0);

  // Check for wins whenever reels change
  useEffect(() => {
    if (
      leftReelSymbols?.length &&
      middleReelSymbols?.length &&
      rightReelSymbols?.length
    ) {
      const { amount, lines } = calculateWin([
        leftReelSymbols,
        middleReelSymbols,
        rightReelSymbols,
      ]);

      setPayout(payout + amount);
      setWinningLines(lines);
    } else {
      setWinningLines([]);
    }
  }, [leftReelSymbols, middleReelSymbols, rightReelSymbols]);

  const handleSpinStart = () => {
    setLeftReelSymbols(emptySymbols);
    setMiddleReelSymbols(emptySymbols);
    setRightReelSymbols(emptySymbols);
  };

  return {
    setLeftReelSymbols,
    setMiddleReelSymbols,
    setRightReelSymbols,
    payout,
    prevousPayout,
    coinCredit,
    setCoinCredit,
    prevousCoinCredit,
    handleSpinStart,
    winningLines,
  };
}
