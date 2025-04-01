import { useEffect } from 'react';

type SlotMachineKeyControls = {
  stopLeftReel: () => void;
  stopMiddleReel: () => void;
  stopRightReel: () => void;
  spinReels: () => void;
  insertCoin: () => void;
};

export const useSlotMachineKeyControls = (controls: SlotMachineKeyControls) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key.toLowerCase()) {
        case 'a':
          controls.stopLeftReel();
          break;
        case 's':
          controls.stopMiddleReel();
          break;
        case 'd':
          controls.stopRightReel();
          break;
        case 'arrowdown':
          controls.spinReels();
          break;
        case 'x':
          controls.insertCoin();
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => { window.removeEventListener('keydown', handleKeyDown); }
  }, [controls]);
};

