export enum NormalEnum {
  Red = '#FF0000',
  Green = '#00FF00',
  Blue = '#0000FF',
  Yellow = '#FFFF00',
  Cyan = '#00FFFF',
  Magenta = '#FF00FF',
  White = '#FFFFFF',
  Black = '#000000',
  Gray = '#808080',
  Maroon = '#800000',
  Olive = '#808000',
  Navy = '#000080',
  Purple = '#800080',
  Teal = '#008080',
  Silver = '#C0C0C0',
  Lime = '#00FF00',
  Aqua = '#00FFFF',
  Fuchsia = '#FF00FF',
  NavyBlue = '#000080',
  DarkBlue = '#00008B',
  MediumBlue = '#0000CD',
  Blue1 = '#0000FF',
  DarkGreen = '#006400',
  Green2 = '#008000',
  Teal3 = '#008080',
  DarkCyan = '#008B8B',
  DeepSkyBlue = '#00BFFF',
  DarkTurquoise = '#00CED1',
  MediumSpringGreen = '#00FA9A',
  Lime4 = '#00FF00',
  SpringGreen = '#00FF7F',
  Cyan5 = '#00FFFF',
  MidnightBlue = '#191970',
  DodgerBlue = '#1E90FF',
  LightSeaGreen = '#20B2AA',
  ForestGreen = '#228B22',
  SeaGreen = '#2E8B57',
  DarkSlateGray = '#2F4F4F',
  LimeGreen = '#32CD32',
}


export function getNormalEnumValues() {
  return Object.values(NormalEnum).filter((value) => typeof value === 'string') as string[];
}

export function getNormalColorMapValue() {
  return NormalEnum.Red;
}