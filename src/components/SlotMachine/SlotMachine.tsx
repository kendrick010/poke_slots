import slot_machine from "@assets/sprites/slot_machine.png";
import LightShine from "@components/LightShine/LightShine";
import { LightShineRef } from "@components/LightShine/lightPatterns";
import ScoreScreen from "@components/ScoreScreen/ScoreScreen";
import { useEffect, useRef, useState } from "react";

import SlotReels from "./SlotReels";
import {
  CREDIT_SCREEN_POSITION,
  PAYOUT_SCREEN_POSITION,
  SLOT_MACHINE_SIZE,
} from "./slotMachineConfig";

export default function SlotMachine() {
  const [leftReelSymbols, setLeftReelSymbols] = useState<string[]>();
  const [middleReelSymbols, setMiddleReelSymbols] = useState<string[]>();
  const [rightReelSymbols, setRightReelSymbols] = useState<string[]>();
  const [allReelsStopped, setAllReelsStopped] = useState(true);

  const [coinCredit, setCoinCredit] = useState<number>(23);
  const [payout, setPayout] = useState<number>(68);

  const lightShineRef = useRef<LightShineRef>(null);

  const handleSpinStart = () => {
    setAllReelsStopped(false);
  };

  useEffect(() => {
    if (
      leftReelSymbols &&
      middleReelSymbols &&
      rightReelSymbols &&
      !allReelsStopped
    ) {
      setAllReelsStopped(true);
      console.log("Reel symbols updated:", {
        left: leftReelSymbols,
        middle: middleReelSymbols,
        right: rightReelSymbols,
      });
    }
  }, [leftReelSymbols, middleReelSymbols, rightReelSymbols]);

  return (
    <div
      style={{
        position: "relative",
        width: `${SLOT_MACHINE_SIZE.width.toString()}px`,
        height: `${SLOT_MACHINE_SIZE.height.toString()}px`,
        backgroundImage: `url(${slot_machine})`,
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

      {/* Reels component */}
      <SlotReels
        coinCredit={coinCredit}
        onCoinChange={setCoinCredit}
        onSpinStart={handleSpinStart}
        onLeftReelStop={setLeftReelSymbols}
        onMiddleReelStop={setMiddleReelSymbols}
        onRightReelStop={setRightReelSymbols}
      />

      {/* Lights */}
      <LightShine ref={lightShineRef} />
    </div>
  );
}
