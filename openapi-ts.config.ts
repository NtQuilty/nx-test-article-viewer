import { defineConfig } from '@hey-api/openapi-ts';

export default defineConfig({
  input: '',
  output: {
    format: 'prettier',
    lint: 'eslint',
    path: '*',
  },
  plugins: [
    '@hey-api/schemas',
    {
      dates: true,
      name: '@hey-api/transformers',
    },
    {
      enums: 'javascript',
      name: '@hey-api/typescript',
    },
    {
      name: '@hey-api/sdk',
      transformer: true,
    },
    '@tanstack/react-query',
  ],
});
