import { useReel } from "@hooks/useReel";
import { forwardRef, useImperativeHandle } from "react";

import {
  REEL_BOTTOM_EDGE,
  REEL_EDGE_SIZE,
  REEL_SIZE,
  REEL_TOP_EDGE,
  ReelRef,
  SPIN_DURATION,
  SYMBOL_SIZE,
  VISIBLE_SPRITES,
} from "./reelConfig";
import "@styles/reel.css";

const Reel = forwardRef<ReelRef>((_, ref) => {
  const {
    isSpinning,
    stopPosition,
    sprites,
    startSpin,
    stopSpin,
    hasJiggle,
  } = useReel();

  useImperativeHandle(ref, () => ({
    startSpin,
    stopSpin,
    isSpinning: () => isSpinning,
    getSymbols: () => {
      const visibleIndices = [];
      const spriteCount = sprites.length / 2;

      for (let i = 0; i < VISIBLE_SPRITES; i++) {
        const pos = Math.floor(
          (stopPosition / SYMBOL_SIZE.height + i) % spriteCount,
        );
        visibleIndices.push(pos);
      }

      return visibleIndices.map((idx) => sprites[idx]);
    },
  }));

  return (
    <div
      className="reel-container bg-reel_background"
      style={{
        position: "relative",
        width: `${REEL_SIZE.width.toString()}px`,
        height: `${REEL_SIZE.height.toString()}px`,
      }}
    >
      <div
        className="jiggle-container"
        style={{
          animation: hasJiggle ? "jiggle 0.3s ease-out" : "none",
        }}
      >
        <div
          className="reel-strip"
          style={{
            height: `${(SYMBOL_SIZE.height * sprites.length).toString()}px`,
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
                height: `${SYMBOL_SIZE.height.toString()}px`,
                backgroundImage: `url(${url})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            />
          ))}
        </div>
      </div>

      {/* Gradient shadow styling effect */}
      <div
          className="bg-gradient-to-b from-black/50 via-black/10 to-transparent"
          style={{
            position: "absolute",
            left: `${REEL_TOP_EDGE.x.toString()}px`,
            top: `${REEL_TOP_EDGE.y.toString()}px`,
            width: `${REEL_EDGE_SIZE.width.toString()}px`,
            height: `${REEL_EDGE_SIZE.height.toString()}px`,
          }}
        />
      <div
        className="bg-gradient-to-t from-black/50 via-black/10 to-transparent"
        style={{
          position: "absolute",
          left: `${REEL_BOTTOM_EDGE.x.toString()}px`,
          top: `${REEL_BOTTOM_EDGE.y.toString()}px`,
          width: `${REEL_EDGE_SIZE.width.toString()}px`,
          height: `${REEL_EDGE_SIZE.height.toString()}px`,
        }}
      />
    </div>
  );
});

export default Reel;