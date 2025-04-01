import symbols from "@assets/sprites/symbols";
import { Position } from "@customtypes/Position";
import { Size } from "@customtypes/Size";

export const SYMBOL_SIZE: Size = {
  width: 52,
  height: 32
};

export const REEL_SIZE: Size = {
  width: 52,
  height: 96
};

export const REEL_EDGE_SIZE: Size = {
  width: 52,
  height: 8
};

export const REEL_TOP_EDGE: Position = {
  x: 0,
  y: 0
};

export const REEL_BOTTOM_EDGE: Position = {
  x: 0,
  y: 88
};

export const SPIN_DURATION = 0.3;
export const VISIBLE_SPRITES = 3;

export const SYMBOLS = [
  symbols.galatic,
  symbols.lucky,
  symbols.pikachu,
  symbols.pokeballs,
  symbols.replay,
  symbols.thunder_stone,
];

export type ReelRef = {
  startSpin: () => void;
  stopSpin: () => void;
};
