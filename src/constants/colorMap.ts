export const colorMap = {
  red: 0,
  green: 1,
  blue: 2,
} as const;

export function getAsConstValue(): number {
  return colorMap.red;
}