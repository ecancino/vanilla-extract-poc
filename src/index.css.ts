import { globalStyle } from '@vanilla-extract/css'

import { colour } from '../kewler'

const fontColor = colour('#ffffff')
const backgroundColor = colour('#242424')

globalStyle(':root', {
  fontFamily: 'Inter, Avenir, Helvetica, Arial, sans-serif',
  textRendering: 'optimizeLegibility',
  WebkitFontSmoothing: 'antialiased',
  backgroundColor: backgroundColor(),

  MozOsxFontSmoothing: 'grayscale',
  WebkitTextSizeAdjust: '100%',
  colorScheme: 'light dark',

  fontSynthesis: 'none',
  color: fontColor(),
  lineHeight: '24px',
  fontSize: '16px',
  fontWeight: 400,
})

globalStyle('body', {
  placeItems: 'center',
  minHeight: '100vh',
  minWidth: '320px',
  display: 'flex',
  margin: 0,
})

globalStyle('#root', {
  textAlign: 'center',
  maxWidth: '1280px',
  margin: '0 auto',
  padding: '2rem',
})
