import { style, createVar } from "@vanilla-extract/css";

export const accentColor = createVar();
export const accentBackground = createVar();

export const brandColor = {
  normal: "#8a2be2",
  lighter: "#cda5f3",
  darker: "#541490",
} as const;

export const neutral = style({
  vars: {
    [accentColor]: "#000",
    [accentBackground]: "#fff",
  },
});

export const brand = style({
  vars: {
    [accentColor]: brandColor.lighter,
    [accentBackground]: brandColor.darker,
  },
});

export const reverse = style({
  vars: {
    [accentColor]: brandColor.darker,
    [accentBackground]: brandColor.lighter,
  },
});
