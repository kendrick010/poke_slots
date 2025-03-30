import { useReel } from "@hooks/useReel";
import { forwardRef, useImperativeHandle } from "react";

import {
  REEL_HEIGHT,
  REEL_WIDTH,
  ReelRef,
  SPIN_DURATION,
  SYMBOL_HEIGHT,
} from "./reelConfig";
import "@styles/reel.css";

const Reel = forwardRef<
  ReelRef,
  { onStop?: (visibleSymbols: string[]) => void }
>(({ onStop }, ref) => {
  const { isSpinning, stopPosition, sprites, startSpin, stopSpin } =
    useReel(onStop);

  useImperativeHandle(ref, () => ({
    startSpin,
    stopSpin,
  }));

  return (
    <div
      className="reel-container bg-reel_background"
      style={{
        width: `${REEL_WIDTH.toString()}px`,
        height: `${REEL_HEIGHT.toString()}px`,
      }}
    >
      <div
        className="reel-strip"
        style={{
          height: `${(SYMBOL_HEIGHT * sprites.length).toString()}px`,
          transform: `translateY(${(-stopPosition).toString()}px)`,
          transition: `transform ${SPIN_DURATION.toString()}s linear`,
          willChange: "transform",
          animation: isSpinning
            ? `spinDown ${SPIN_DURATION.toString()}s linear infinite`
            : "none",
        }}
      >
        {sprites.map((url, index) => (
          <div
            key={`${index.toString()}-${url}`}
            className="reel-sprite"
            style={{
              height: `${SYMBOL_HEIGHT.toString()}px`,
              backgroundImage: `url(${url})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          />
        ))}
      </div>
    </div>
  );
});

export default Reel;
