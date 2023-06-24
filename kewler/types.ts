import { z } from 'zod'

const angle = z.number().min(0).max(360)
const percentage = z.number().min(0).max(100)

export const HSLColor = z.object({
  saturation: percentage,
  lightness: percentage,
  hue: angle,
})

export type HSL = z.infer<typeof HSLColor>

export const HEXColor = z
  .string()
  .startsWith('#')
  .refine((s) => s.length === 7 || s.length === 4)

export type HEX = z.infer<typeof HEXColor>
