import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import typescript from '@typescript-eslint/eslint-plugin'
import a11y from 'eslint-plugin-jsx-a11y'
import prettier from 'eslint-plugin-prettier'
import unicorn from 'eslint-plugin-unicorn'
import promise from 'eslint-plugin-promise'
import sonar from 'eslint-plugin-sonarjs'
import vitest from 'eslint-plugin-vitest'
import testingLibrary from 'eslint-plugin-testing-library'

import parser from '@typescript-eslint/parser'

export default [
  {
    files: ['src/**/*.ts*'],
    ignores: ['**/*.config.*'],
    linterOptions: {
      noInlineConfig: true,
      reportUnusedDisableDirectives: true,
    },
    languageOptions: {
      parser,
    },
    plugins: {
      typescript,
      prettier,
      react,
      'react-hooks': reactHooks,
      'jsx-a11y': a11y,
      unicorn,
      promise,
      sonar,
      vitest,
      'testing-library': testingLibrary,
    },
    rules: {
      semi: ['error', 'never'],
      'jsx-a11y/aria-props': 'error',
      'unicorn/prevent-abbreviations': 'off',
      'unicorn/prefer-export-from': 'error',
      'testing-library/no-render-in-setup': 'error',
      'testing-library/no-wait-for-empty-callback': 'error',
      'testing-library/prefer-explicit-assert': 'error',
      'testing-library/prefer-presence-queries': 'error',
      'testing-library/prefer-screen-queries': 'error',
      'testing-library/prefer-wait-for': 'error',
    },
  },
]
