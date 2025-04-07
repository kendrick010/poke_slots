import Clickable from "@components/Clickable";
import Reel from "@components/Reel/Reel";
import { ReelRef } from "@components/Reel/reelConfig";
import { useSlotMachineKeyControls } from "@hooks/useSlotMachineKeyControls";
import { useRef, useState } from "react";

import {
  COINS_TO_PLAY,
  INSERT_COIN_BUTTON_POSITION,
  INSERT_COIN_BUTTON_SIZE,
  LEFT_REEL_BUTTON_POSITION,
  LEFT_REEL_POSITION,
  MIDDLE_REEL_BUTTON_POSITION,
  MIDDLE_REEL_POSITION,
  REEL_BUTTON_SIZE,
  RIGHT_REEL_BUTTON_POSITION,
  RIGHT_REEL_POSITION,
  SPIN_BUTTON_POSITION,
  SPIN_BUTTON_SIZE,
} from "./slotMachineConfig";

type SlotReelsProps = {
  coinCredit: number;
  onCoinChange: (newCoinBalance: number) => void;
  onSpinStart: () => void;
  onLeftReelStop: (symbols: string[]) => void;
  onMiddleReelStop: (symbols: string[]) => void;
  onRightReelStop: (symbols: string[]) => void;
};

export default function SlotReels({
  coinCredit,
  onCoinChange,
  onSpinStart,
  onLeftReelStop,
  onMiddleReelStop,
  onRightReelStop,
}: SlotReelsProps) {
  const leftReelRef = useRef<ReelRef>(null);
  const middleReelRef = useRef<ReelRef>(null);
  const rightReelRef = useRef<ReelRef>(null);

  const [startSpin, setStartSpin] = useState<boolean>(false);

  const stopLeftReel = () => {
    leftReelRef.current?.stopSpin();
    onLeftReelStop(leftReelRef.current?.getSymbols() ?? []);
  };

  const stopMiddleReel = () => {
    middleReelRef.current?.stopSpin();
    onMiddleReelStop(middleReelRef.current?.getSymbols() ?? []);
  };

  const stopRightReel = () => {
    rightReelRef.current?.stopSpin();
    onRightReelStop(rightReelRef.current?.getSymbols() ?? []);
  };

  const spinReels = () => {
    if (startSpin) {
      leftReelRef.current?.startSpin();
      middleReelRef.current?.startSpin();
      rightReelRef.current?.startSpin();

      setStartSpin(false);
    }
  };

  const insertCoin = () => {
    if (
      coinCredit > 0 &&
      !startSpin &&
      !leftReelRef.current?.isSpinning() &&
      !middleReelRef.current?.isSpinning() &&
      !rightReelRef.current?.isSpinning()
    ) {
      onCoinChange(coinCredit - COINS_TO_PLAY);
      setStartSpin(true);
      onSpinStart();
    }
  };

  useSlotMachineKeyControls({
    stopLeftReel,
    stopMiddleReel,
    stopRightReel,
    spinReels,
    insertCoin,
  });

  return (
    <>
      {/* Reels */}
      <div
        style={{
          position: "absolute",
          left: `${LEFT_REEL_POSITION.x.toString()}px`,
          top: `${LEFT_REEL_POSITION.y.toString()}px`,
        }}
      >
        <Reel ref={leftReelRef} />
      </div>
      <div
        style={{
          position: "absolute",
          left: `${MIDDLE_REEL_POSITION.x.toString()}px`,
          top: `${MIDDLE_REEL_POSITION.y.toString()}px`,
        }}
      >
        <Reel ref={middleReelRef} />
      </div>
      <div
        style={{
          position: "absolute",
          left: `${RIGHT_REEL_POSITION.x.toString()}px`,
          top: `${RIGHT_REEL_POSITION.y.toString()}px`,
        }}
      >
        <Reel ref={rightReelRef} />
      </div>

      {/* Reel Buttons */}
      <div
        style={{
          position: "absolute",
          left: `${LEFT_REEL_BUTTON_POSITION.x.toString()}px`,
          top: `${LEFT_REEL_BUTTON_POSITION.y.toString()}px`,
        }}
      >
        <Clickable
          width={REEL_BUTTON_SIZE.width}
          height={REEL_BUTTON_SIZE.height}
          onClick={stopLeftReel}
        />
      </div>

      <div
        style={{
          position: "absolute",
          left: `${MIDDLE_REEL_BUTTON_POSITION.x.toString()}px`,
          top: `${MIDDLE_REEL_BUTTON_POSITION.y.toString()}px`,
        }}
      >
        <Clickable
          width={REEL_BUTTON_SIZE.width}
          height={REEL_BUTTON_SIZE.height}
          onClick={stopMiddleReel}
        />
      </div>

      <div
        style={{
          position: "absolute",
          left: `${RIGHT_REEL_BUTTON_POSITION.x.toString()}px`,
          top: `${RIGHT_REEL_BUTTON_POSITION.y.toString()}px`,
        }}
      >
        <Clickable
          width={REEL_BUTTON_SIZE.width}
          height={REEL_BUTTON_SIZE.height}
          onClick={stopRightReel}
        />
      </div>

      {/* Other Buttons */}
      <div
        style={{
          position: "absolute",
          left: `${INSERT_COIN_BUTTON_POSITION.x.toString()}px`,
          top: `${INSERT_COIN_BUTTON_POSITION.y.toString()}px`,
        }}
      >
        <Clickable
          width={INSERT_COIN_BUTTON_SIZE.width}
          height={INSERT_COIN_BUTTON_SIZE.height}
          onClick={insertCoin}
        />
      </div>

      <div
        style={{
          position: "absolute",
          left: `${SPIN_BUTTON_POSITION.x.toString()}px`,
          top: `${SPIN_BUTTON_POSITION.y.toString()}px`,
        }}
      >
        <Clickable
          width={SPIN_BUTTON_SIZE.width}
          height={SPIN_BUTTON_SIZE.height}
          onClick={spinReels}
        />
      </div>
    </>
  );
}
