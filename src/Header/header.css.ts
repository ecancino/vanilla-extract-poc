import { style, keyframes } from "@vanilla-extract/css";

const logo = style({
  height: "6em",
  padding: "1.5em",
  willChange: "filter",
  ":hover": {
    filter: "drop-shadow(0 0 2em #646cffaa)",
  },
});

export const logoSpin = keyframes({
  from: { transform: "rotate(0deg)" },
  to: { transform: "rotate(360deg)" },
});

export const logoShake = keyframes({
  "10%, 90%": {
    transform: "translate3d(-1px, 0, 0)",
  },
  "20%, 80%": {
    transform: "translate3d(2px, 0, 0)",
  },
  "30%, 50%, 70%": {
    transform: "translate3d(-4px, 0, 0)",
  },
  "40%, 60%": {
    transform: "translate3d(4px, 0, 0)",
  },
});

export const vite = style([
  logo,
  {
    animation: `${logoShake} infinite .5s cubic-bezier(.36,.07,.19,.97) 20s`,
    ":hover": {
      filter: "drop-shadow(0 0 2em #ffd931aa)",
    },
  },
]);

export const react = style([
  logo,
  {
    animation: `${logoSpin} infinite 20s linear`,
    ":hover": {
      filter: "drop-shadow(0 0 2em #646cffaa)",
    },
  },
]);
