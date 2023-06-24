/// <reference types="vite/client" />

declare module 'kewler'

declare module 'hsl-to-hex' {
  declare function hslToHex(hue: number, saturation: number, luminosity: number): string
  export = hslToHex
}

declare module 'hex-to-hsl' {
  declare function hexToHsl(hex: string): [number, number, number]
  export = hexToHsl
}
