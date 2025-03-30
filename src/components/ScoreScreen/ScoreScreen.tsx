import { getDigitString } from "@utils/getDigitString";
import { useEffect, useRef, useState } from "react";

import Digit from "./Digit";
import { SCORE_SCREEN_SIZE } from "./scoreScreenConfig";

type ScoreScreenProps = {
  startValue: number;
  endValue: number;
};

export default function ScoreScreen({
  startValue,
  endValue,
}: ScoreScreenProps) {
  const [currentDigits, setCurrentDigits] = useState<string[]>(
    getDigitString(startValue),
  );
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const delay = 150;

  useEffect(() => {
    if (startValue === endValue) return;

    const increment = endValue > startValue ? 1 : -1;
    let currentValue = startValue;

    timerRef.current = setInterval(() => {
      currentValue += increment;
      const nextDigits = getDigitString(currentValue);

      setCurrentDigits((prevDigits) =>
        prevDigits.map((digit, index) =>
          digit !== nextDigits[index] ? nextDigits[index] : digit,
        ),
      );

      if (currentValue === endValue) {
        clearInterval(timerRef.current!);
        timerRef.current = null;
      }
    }, delay);

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [endValue]);

  return (
    <div
      className="bg-score_screen-background"
      style={{
        width: `${SCORE_SCREEN_SIZE.width.toString()}px`,
        height: `${SCORE_SCREEN_SIZE.height.toString()}px`,
        display: "flex",
        gap: "2px",
        justifyContent: "center",
      }}
    >
      {currentDigits.map((digit, index) => (
        <Digit digit={digit} digit_place={index} key={index} />
      ))}
    </div>
  );
}
