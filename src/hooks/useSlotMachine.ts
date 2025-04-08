import { SYMBOLS } from "@components/Reel/reelConfig";
import { allElementsSame } from "@utils/allElementsSame";
import { usePreviousState } from "@utils/usePreviousState";
import { useEffect, useState } from "react";

const emptySymbols: string[] = [];

const calculateWin = (reels: string[][]): number => {
	const [left, middle, right] = reels;
	let totalWin = 0;

	// Check top, middle, bottom rows
	totalWin += allElementsSame([left[0], middle[0], right[0]]) ? SYMBOLS[left[0]] : 0;
	totalWin += allElementsSame([left[1], middle[1], right[1]]) ? SYMBOLS[left[1]] : 0;
	totalWin += allElementsSame([left[2], middle[2], right[2]]) ? SYMBOLS[left[3]] : 0;

	// Check diagonals
	totalWin += allElementsSame([left[0], middle[1], right[2]]) ? SYMBOLS[left[0]] : 0;
	totalWin += allElementsSame([left[2], middle[1], right[0]]) ? SYMBOLS[left[2]] : 0;

	return totalWin;
};

export function useSlotMachine() {
  const [leftReelSymbols, setLeftReelSymbols] = useState<string[]>();
  const [middleReelSymbols, setMiddleReelSymbols] = useState<string[]>();
  const [rightReelSymbols, setRightReelSymbols] = useState<string[]>();

  const [coinCredit, setCoinCredit, prevousCoinCredit] = usePreviousState(25);
  const [payout, setPayout, prevousPayout] = usePreviousState(0);

  // Check for wins whenever reels change
  useEffect(() => {
    if (
      leftReelSymbols?.length &&
      middleReelSymbols?.length &&
      rightReelSymbols?.length
    ) {
			const winAmount = calculateWin([leftReelSymbols, middleReelSymbols, rightReelSymbols]);
			console.log(winAmount);
			setPayout(payout + winAmount);
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
  };
}