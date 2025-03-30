import { DIGITS, DIGIT_SIZE, EMPTY_DIGIT } from "./scoreScreenConfig";

type DigitProps = {
  digit: string;
  digit_place: number;
};
export default function Digit({ digit, digit_place }: DigitProps) {
  const sprite = DIGITS[digit] || EMPTY_DIGIT;

  return (
    <div
      key={digit_place}
      style={{
        width: `${DIGIT_SIZE.width.toString()}px`,
        height: `${DIGIT_SIZE.height.toString()}px`,
        backgroundImage: `url(${sprite})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    />
  );
}
