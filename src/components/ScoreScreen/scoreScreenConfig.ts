import eight from "@assets/sprites/digits/eight.png";
import empty from "@assets/sprites/digits/empty.png";
import five from "@assets/sprites/digits/five.png";
import four from "@assets/sprites/digits/four.png";
import nine from "@assets/sprites/digits/nine.png";
import one from "@assets/sprites/digits/one.png";
import seven from "@assets/sprites/digits/seven.png";
import six from "@assets/sprites/digits/six.png";
import three from "@assets/sprites/digits/three.png";
import two from "@assets/sprites/digits/two.png";
import zero from "@assets/sprites/digits/zero.png";

export const SCORE_SCREEN_SIZE = {
  width: 38,
  height: 7,
};

export const DIGIT_SIZE = {
  width: 6,
  height: 7,
};

export const DIGITS: Record<string, string> = {
  "": empty,
  "0": zero,
  "1": one,
  "2": two,
  "3": three,
  "4": four,
  "5": five,
  "6": six,
  "7": seven,
  "8": eight,
  "9": nine,
};

export const EMPTY_DIGIT = empty;
