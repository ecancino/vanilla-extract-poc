import { style } from '@vanilla-extract/css'

export const link = style({
  height: '6em',
  padding: '1.5em',
  willChange: 'filter',
  ':hover': {
    filter: 'drop-shadow(0 0 2em #646cffaa)',
  },
})
