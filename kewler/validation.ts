import { HEXColor, HSLColor } from './types'
import type { HEX, HSL } from './types'

export function isHSL(hsl: unknown): hsl is HSL {
  return HSLColor.safeParse(hsl).success
}

export function isHEX(hex: unknown): hex is HEX {
  return HEXColor.safeParse(hex).success
}
