import slot_machine from "@assets/sprites/slot_machine.png";
import LightShine from "@components/LightShine/LightShine";
import { LightShineRef } from "@components/LightShine/lightPatterns";
import ScoreScreen from "@components/ScoreScreen/ScoreScreen";
import { useSlotMachine } from "@hooks/useSlotMachine";
import { useRef } from "react";

import SlotReels from "./SlotReels";
import {
  CREDIT_SCREEN_POSITION,
  PAYOUT_SCREEN_POSITION,
  SLOT_MACHINE_SIZE,
} from "./slotMachineConfig";

export default function SlotMachine() {
  const lightShineRef = useRef<LightShineRef>(null);


  // prevent clicking or playing on win (and on count)
  // flash light based on winning row
  // music integration

  
  const {
    setLeftReelSymbols,
    setMiddleReelSymbols,
    setRightReelSymbols,
    payout,
		prevousPayout,
    coinCredit,
		setCoinCredit,
		prevousCoinCredit,
    handleSpinStart,
  } = useSlotMachine();

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
        <ScoreScreen startValue={prevousCoinCredit} endValue={coinCredit} />
      </div>
      <div
        style={{
          position: "absolute",
          left: `${PAYOUT_SCREEN_POSITION.x.toString()}px`,
          top: `${PAYOUT_SCREEN_POSITION.y.toString()}px`,
        }}
      >
        <ScoreScreen startValue={prevousPayout} endValue={payout} />
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
