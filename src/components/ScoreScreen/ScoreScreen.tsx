import { useAudio } from "@contexts/AudioContext";
import { getDigitString } from "@utils/getDigitString";
import { playAudio } from "@utils/playAudio";
import { useEffect, useRef, useState } from "react";

import Digit from "./Digit";
import { SCORE_SCREEN_SIZE } from "./scoreScreenConfig";

type ScoreScreenProps = {
  startValue: number;
  endValue: number;
  audioSrc?: string;
  onCountingChange?: (isCounting: boolean) => void;
};

export default function ScoreScreen({
  startValue,
  endValue,
  audioSrc,
  onCountingChange,
}: ScoreScreenProps) {
  const { isMuted } = useAudio();
  const [currentDigits, setCurrentDigits] = useState<string[]>(
    getDigitString(startValue),
  );
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const delay = 140;

  useEffect(() => {
    if (startValue === endValue) {
      onCountingChange?.(false);
      return;
    }

    onCountingChange?.(true);

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

      if (!isMuted && audioSrc) playAudio(audioSrc);

      if (currentValue === endValue) {
        onCountingChange?.(false);
        clearInterval(timerRef.current!);
        timerRef.current = null;
      }
    }, delay);

    return () => {
      if (timerRef.current) {
        onCountingChange?.(false);
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [endValue, isMuted]);

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
