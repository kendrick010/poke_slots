import slots from "@assets/sprites/slots.png";
import Clickable from "@components/Clickable";
import LightShine from "@components/LightShine/LightShine";
import { LightShineRef } from "@components/LightShine/lightPatterns";
import Reel from "@components/Reel/Reel";
import { ReelRef } from "@components/Reel/reelConfig";
import ScoreScreen from "@components/ScoreScreen/ScoreScreen";
import { useSlotMachineKeyControls } from "@hooks/useSlotMachineKeyControls";
import { useRef, useState } from "react";

import {
  CREDIT_SCREEN_POSITION,
  INSERT_COIN_BUTTON_POSITION,
  INSERT_COIN_BUTTON_SIZE,
  LEFT_REEL_BUTTON_POSITION,
  LEFT_REEL_POSITION,
  MIDDLE_REEL_BUTTON_POSITION,
  MIDDLE_REEL_POSITION,
  PAYOUT_SCREEN_POSITION,
  REEL_BUTTON_SIZE,
  RIGHT_REEL_BUTTON_POSITION,
  RIGHT_REEL_POSITION,
  SLOT_MACHINE_SIZE,
  SPIN_BUTTON_POSITION,
  SPIN_BUTTON_SIZE,
} from "./slotMachineConfig";

export default function SlotMachine() {
  const leftReelRef = useRef<ReelRef>(null);
  const middleReelRef = useRef<ReelRef>(null);
  const rightReelRef = useRef<ReelRef>(null);

  const noSymbols: string[] = [];
  const [leftReelSymbols, setLeftReelSymbols] = useState<string[]>([""]);
  const [middleReelSymbols, setMiddleReelSymbols] = useState<string[]>([""]);
  const [rightReelSymbols, setRightReelSymbols] = useState<string[]>([""]);

  const [coinCredit, setCoinCredit] = useState<number>(23);
  const [payout, setPayout] = useState<number>(68);

  const lightShineRef = useRef<LightShineRef>(null);

  const stopLeftReel = () => {
    leftReelRef.current?.stopSpin();
  };

  const stopMiddleReel = () => {
    middleReelRef.current?.stopSpin();
  };

  const stopRightReel = () => {
    rightReelRef.current?.stopSpin();
  };

  const spinReels = () => {
    if (
      !leftReelSymbols.length &&
      !middleReelSymbols.length &&
      !rightReelSymbols.length
    ) {
      leftReelRef.current?.startSpin();
      middleReelRef.current?.startSpin();
      rightReelRef.current?.startSpin();

      // Prevents running again if already spinning
      setLeftReelSymbols([""]);
    }
  };

  const insertCoin = () => {
    if (
      coinCredit > 0 &&
      leftReelSymbols.length &&
      middleReelSymbols.length &&
      rightReelSymbols.length
    ) {
      setCoinCredit(coinCredit - 1);
      setLeftReelSymbols(noSymbols);
      setMiddleReelSymbols(noSymbols);
      setRightReelSymbols(noSymbols);
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
    <div
      style={{
        position: "relative",
        width: `${SLOT_MACHINE_SIZE.width.toString()}px`,
        height: `${SLOT_MACHINE_SIZE.height.toString()}px`,
        backgroundImage: `url(${slots})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      {/* Score boards */}
      <div
        style={{
          position: "absolute",
          left: `${CREDIT_SCREEN_POSITION.x.toString()}px`,
          top: `${CREDIT_SCREEN_POSITION.y.toString()}px`,
        }}
      >
        <ScoreScreen startValue={coinCredit + 1} endValue={coinCredit} />
      </div>
      <div
        style={{
          position: "absolute",
          left: `${PAYOUT_SCREEN_POSITION.x.toString()}px`,
          top: `${PAYOUT_SCREEN_POSITION.y.toString()}px`,
        }}
      >
        <ScoreScreen startValue={payout} endValue={payout} />
      </div>

      {/* Reels */}
      <div
        style={{
          position: "absolute",
          left: `${LEFT_REEL_POSITION.x.toString()}px`,
          top: `${LEFT_REEL_POSITION.y.toString()}px`,
        }}
      >
        <Reel
          ref={leftReelRef}
          onStop={(symbols) => {
            setLeftReelSymbols(symbols);
          }}
        />
      </div>
      <div
        style={{
          position: "absolute",
          left: `${MIDDLE_REEL_POSITION.x.toString()}px`,
          top: `${MIDDLE_REEL_POSITION.y.toString()}px`,
        }}
      >
        <Reel
          ref={middleReelRef}
          onStop={(symbols) => {
            setMiddleReelSymbols(symbols);
          }}
        />
      </div>
      <div
        style={{
          position: "absolute",
          left: `${RIGHT_REEL_POSITION.x.toString()}px`,
          top: `${RIGHT_REEL_POSITION.y.toString()}px`,
        }}
      >
        <Reel
          ref={rightReelRef}
          onStop={(symbols) => {
            setRightReelSymbols(symbols);
          }}
        />
      </div>

      {/* Buttons */}
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

      {/* Lights */}
      <LightShine ref={lightShineRef} />
    </div>
  );
}
