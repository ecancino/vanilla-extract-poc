import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import eslintPlugin from 'vite-plugin-eslint'
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'

export default defineConfig({
  plugins: [
    react(),
    vanillaExtractPlugin(),
    eslintPlugin({
      include: ['./src/**/*.ts', './src/**/*.tsx'],
      cache: false,
    }),
  ],
})
