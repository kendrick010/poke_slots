export function getDigitString(num: number, length = 5): string[] {
  const numStr = num.toString();
  const emptyStrings = Array.from({ length: length - numStr.length }, () => "");
  const digits = Array.from(numStr);

  return [...emptyStrings, ...digits];
}
