import { recipe, type RecipeVariants } from "@vanilla-extract/recipes";
import { style, createVar } from "@vanilla-extract/css";

import {
  brand,
  neutral,
  reverse,
  accentColor,
  accentBackground,
} from "./accent.css";

const base = style({
  borderRadius: ".6rem",
  fontFamily: "inherit",
  cursor: "pointer",
  color: accentColor,
  backgroundColor: accentBackground,
  transition: "border-color 0.25s",
  ":hover": {
    borderColor: accentBackground,
  },
  ":focus": {
    outline: "4px auto -webkit-focus-ring-color",
  },
  ":focus-visible": {
    outline: "4px auto -webkit-focus-ring-color",
  },
});

export const button = recipe({
  base,
  variants: {
    accent: { neutral, brand, reverse },
    size: {
      small: {
        fontSize: ".9em",
        fontWeight: 400,
        padding: 12,
      },
      medium: {
        fontSize: "1em",
        fontWeight: 500,
        padding: 16,
      },
      large: {
        fontSize: "1.1em",
        fontWeight: 600,
        padding: 24,
      },
    },
  },
  defaultVariants: {
    accent: "brand",
    size: "medium",
  },
});

// Get the type
export type ButtonVariants = RecipeVariants<typeof button>;
