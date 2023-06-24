import hslToHex from 'hsl-to-hex'
import hexToHsl from 'hex-to-hsl'

import type { HEX, HSL } from './types'

import { isHEX, isHSL } from './validation'

export function colour(hex: HEX | HSL): () => HEX {
  return function () {
    // console.log(hex)

    if (isHSL(hex)) {
      return hslToHex(hex.hue, hex.saturation, hex.lightness)
    }

    if (isHEX(hex)) {
      return hex
    }

    return '#000000'
  }
}

export function saturate(percent: number, c: () => HEX): () => HEX {
  const [hue, saturation, lightness] = hexToHsl(c())

  return colour(hslToHex(hue, saturation + percent, lightness))
}

export function illuminate(percent: number, c: () => HEX): () => HEX {
  const [hue, saturation, lightness] = hexToHsl(c())

  return colour(hslToHex(hue, saturation, lightness + percent))
}

export function tint(percent: number, c: () => HEX): () => HEX {
  const [hue, saturation, lightness] = hexToHsl(c())

  return colour(hslToHex(hue + percent, saturation, lightness))
}
