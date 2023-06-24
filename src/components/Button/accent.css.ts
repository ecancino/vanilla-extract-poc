import { createVar, style } from '@vanilla-extract/css'

export const accentColor = createVar()
export const accentBackground = createVar()

export const brandColor = {
  lighter: '#cda5f3',
  darker: '#541490',
  normal: '#8a2be2',
} as const

export const neutral = style({
  vars: {
    [accentBackground]: '#fff',
    [accentColor]: '#000',
  },
})

export const brand = style({
  vars: {
    [accentBackground]: brandColor.darker,
    [accentColor]: brandColor.lighter,
  },
})

export const reverse = style({
  vars: {
    [accentBackground]: brandColor.lighter,
    [accentColor]: brandColor.darker,
  },
})
