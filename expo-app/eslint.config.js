import parser from '@typescript-eslint/parser'; // Import the TypeScript parser

import rootConfig from './eslint.config.js';

export default [
  ...rootConfig, // Extend root config
  {
    languageOptions: {
      parser, // Use the TypeScript parser
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true, // Enable JSX for React
        },
      },
      globals: {
        window: 'readonly', // Browser-specific globals
        document: 'readonly', // Browser-specific globals
      },
    },
    rules: {
      // Frontend-specific rules here
    },
  },
];
