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
        process: 'readonly', // Node.js-specific globals
        __dirname: 'readonly', // Node.js-specific globals
        module: 'readonly', // Node.js-specific globals
      },
    },
    rules: {
      // Backend-specific rules here
    },
  },
];
