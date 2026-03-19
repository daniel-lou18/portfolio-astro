import * as prettierPluginAstro from 'prettier-plugin-astro';

export default {
  plugins: [prettierPluginAstro],
  printWidth: 80,
  tabWidth: 2,
  singleQuote: true,
  trailingComma: 'all',
  endOfLine: 'lf',
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
};
