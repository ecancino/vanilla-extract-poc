import { defineConfig } from 'vitest/config'
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'

export default defineConfig({
  plugins: [vanillaExtractPlugin()],
  test: {
    include: ['tests/**/*.test.tsx'],
    globals: true,
    environment: 'jsdom',
  },
})
