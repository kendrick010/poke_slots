import slots from "@assets/sprites/slots.png";
import Reel from "@components/Reel/Reel";
import { ReelRef } from "@components/Reel/reelConfig";
import ScoreScreen from "@components/ScoreScreen/ScoreScreen";
import { useRef } from "react";

import {
  CREDIT_SCREEN_POSITION,
  LEFT_REEL_POSITION,
  MIDDLE_REEL_POSITION,
  PAYOUT_SCREEN_POSITION,
  RIGHT_REEL_POSITION,
  SLOT_MACHINE_SIZE,
} from "./slotMachineConfig";

export default function SlotMachine() {
  const leftReelRef = useRef<ReelRef>(null);
  const middleReelRef = useRef<ReelRef>(null);
  const rightReelRef = useRef<ReelRef>(null);

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
        <ScoreScreen startValue={0} endValue={23} />
      </div>
      <div
        style={{
          position: "absolute",
          left: `${PAYOUT_SCREEN_POSITION.x.toString()}px`,
          top: `${PAYOUT_SCREEN_POSITION.y.toString()}px`,
        }}
      >
        <ScoreScreen startValue={0} endValue={23} />
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
            console.log("Visible symbols:", symbols);
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
            console.log("Visible symbols:", symbols);
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
            console.log("Visible symbols:", symbols);
          }}
        />
      </div>

      <button onClick={() => leftReelRef.current?.startSpin()}>Spin</button>
      <button onClick={() => leftReelRef.current?.stopSpin()}>Stop</button>
    </div>
  );
}
