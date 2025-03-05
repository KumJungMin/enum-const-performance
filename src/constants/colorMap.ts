export const colorMap = {
  red: "RED",
  green: "GREEN",
  blue: "BLUE",
} as const;

export function getAsConstValue(): string {
  return colorMap.red;
}