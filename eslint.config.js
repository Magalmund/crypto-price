import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'

const restrictedLayerPatterns = (layers) =>
  layers.flatMap((layer) => [
    `src/${layer}/**`,
    `@/${layer}/**`,
    `../${layer}/**`,
    `../../${layer}/**`,
    `../../../${layer}/**`,
    `../../../../${layer}/**`,
    `../../../../../${layer}/**`,
  ])

const restrictLayerImports = (layers) => ({
  'no-restricted-imports': [
    'error',
    {
      patterns: restrictedLayerPatterns(layers),
    },
  ],
})

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    rules: {
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
    },
  },
  {
    files: ['src/pages/**/*.{js,jsx}'],
    rules: restrictLayerImports(['app']),
  },
  {
    files: ['src/widgets/**/*.{js,jsx}'],
    rules: restrictLayerImports(['pages']),
  },
  {
    files: ['src/features/**/*.{js,jsx}'],
    rules: restrictLayerImports(['widgets', 'pages', 'app']),
  },
  {
    files: ['src/entities/**/*.{js,jsx}'],
    rules: restrictLayerImports(['features', 'widgets', 'pages', 'app']),
  },
  {
    files: ['src/shared/**/*.{js,jsx}'],
    rules: restrictLayerImports(['entities', 'features', 'widgets', 'pages', 'app']),
  },
])
