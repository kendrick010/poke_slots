import score_digits from "@assets/sprites/score_digits";
import { Size } from "@customtypes/Size";

export const SCORE_SCREEN_SIZE: Size = {
  width: 38,
  height: 7,
};

export const DIGIT_SIZE: Size = {
  width: 6,
  height: 7,
};

export const DIGITS: Record<string, string> = {
  "": score_digits.empty,
  "0": score_digits.zero,
  "1": score_digits.one,
  "2": score_digits.two,
  "3": score_digits.three,
  "4": score_digits.four,
  "5": score_digits.five,
  "6": score_digits.six,
  "7": score_digits.seven,
  "8": score_digits.eight,
  "9": score_digits.nine,
};

export const EMPTY_DIGIT = score_digits.empty;
