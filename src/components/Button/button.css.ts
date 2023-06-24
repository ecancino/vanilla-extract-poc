import type { RecipeVariants } from '@vanilla-extract/recipes'

import { recipe } from '@vanilla-extract/recipes'
import { style } from '@vanilla-extract/css'

import { accentBackground, accentColor, reverse, neutral, brand } from './accent.css'

const base = style({
  ':focus-visible': {
    outline: '4px auto -webkit-focus-ring-color',
  },
  ':focus': {
    outline: '4px auto -webkit-focus-ring-color',
  },
  ':hover': {
    borderColor: accentBackground,
  },
  backgroundColor: accentBackground,
  transition: 'border-color 0.25s',
  fontFamily: 'inherit',
  borderRadius: '.6rem',
  color: accentColor,
  cursor: 'pointer',
})

export const button = recipe({
  variants: {
    size: {
      large: {
        fontSize: '1.1em',
        fontWeight: 600,
        padding: 24,
      },
      medium: {
        fontSize: '1em',
        fontWeight: 500,
        padding: 16,
      },
      small: {
        fontSize: '.9em',
        fontWeight: 400,
        padding: 12,
      },
    },
    accent: { reverse, neutral, brand },
  },
  defaultVariants: {
    accent: 'brand',
    size: 'medium',
  },
  base,
})

// Get the type
export type ButtonVariants = RecipeVariants<typeof button>
