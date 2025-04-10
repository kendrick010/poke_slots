import { forwardRef, useImperativeHandle, useState } from "react";

import {
  AllOffPattern,
  AllOnPattern,
  LightShineRef,
  toggleBottomRow,
  toggleIdle,
  toggleLeftDiagonal,
  toggleMiddleRow,
  toggleRightDiagonal,
  toggleTopRow,
} from "./lightPatterns";

const LightShine = forwardRef<LightShineRef>(function LightShine(_, ref) {
  const [currentFlash, setCurrentFlash] = useState(toggleIdle);

  // Expose methods via ref
  useImperativeHandle(ref, () => ({
    showTopRow: () => {
      setCurrentFlash(toggleTopRow);
    },
    showMiddleRow: () => {
      setCurrentFlash(toggleMiddleRow);
    },
    showBottomRow: () => {
      setCurrentFlash(toggleBottomRow);
    },
    showLeftDiagonal: () => {
      setCurrentFlash(toggleLeftDiagonal);
    },
    showRightDiagonal: () => {
      setCurrentFlash(toggleRightDiagonal);
    },
    showAllON: () => {
      setCurrentFlash(AllOnPattern);
    },
    showAllOFF: () => {
      setCurrentFlash(AllOffPattern);
    },
    showIdle: () => {
      setCurrentFlash(toggleIdle);
    },
  }));

  return currentFlash;
});

export default LightShine;
