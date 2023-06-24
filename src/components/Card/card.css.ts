import { style } from '@vanilla-extract/css'

import { colour } from '../../../kewler'

const borderColor = colour('#336699')

export const card = style({
  border: `1px solid ${borderColor()}`,
  borderRadius: '1em',
  padding: '2em',
})
