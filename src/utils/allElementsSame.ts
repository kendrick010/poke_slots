// eslint-disable-next-line @typescript-eslint/no-unnecessary-type-parameters
export function allElementsSame<T>(arr: T[]): boolean {
  return new Set(arr).size <= 1;
}
