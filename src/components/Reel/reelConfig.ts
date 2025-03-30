import galatic from "@assets/sprites/symbols/galactic.png";
import lucky from "@assets/sprites/symbols/lucky.png";
import pikachu from "@assets/sprites/symbols/pikachu.png";
import pokeballs from "@assets/sprites/symbols/pokeballs.png";
import replay from "@assets/sprites/symbols/replay.png";
import thunder_stone from "@assets/sprites/symbols/thunder_stone.png";

export const SYMBOL_WIDTH = 52;
export const SYMBOL_HEIGHT = 32;
export const REEL_WIDTH = 52;
export const REEL_HEIGHT = 96;
export const SPIN_DURATION = 0.3;
export const VISIBLE_SPRITES = 3;

export const SYMBOLS = [
  galatic,
  lucky,
  pikachu,
  pokeballs,
  replay,
  thunder_stone,
];

export type ReelRef = {
  startSpin: () => void;
  stopSpin: () => void;
};
