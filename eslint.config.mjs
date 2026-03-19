import js from '@eslint/js';
import globals from 'globals';
import eslintPluginAstro from 'eslint-plugin-astro';
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintPluginPrettier from 'eslint-plugin-prettier';

export default [
  {
    ignores: ['dist/**', '.astro/**', '.output/**', 'node_modules/**'],
  },
  js.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
  ...eslintPluginAstro.configs.recommended,
  eslintConfigPrettier,
  {
    plugins: {
      prettier: eslintPluginPrettier,
    },
    rules: {
      'prettier/prettier': 'error',
    },
  },
];
