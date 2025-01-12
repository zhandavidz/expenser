import eslintPluginTypescript from '@typescript-eslint/eslint-plugin';
import eslintPluginReact from 'eslint-plugin-react';
import eslintPluginReactHooks from 'eslint-plugin-react-hooks';
import eslintPluginJsxA11y from 'eslint-plugin-jsx-a11y';
import eslintPluginImport from 'eslint-plugin-import';
import eslintPluginPrettier from 'eslint-plugin-prettier';
import parser from '@typescript-eslint/parser'; // Import the TypeScript parser

export default [
  {
    ignores: ['**/dist/*', 'node_modules/'], // Add other folders or files to ignore here
    // Language-specific options: parser, parserOptions, globals, etc.
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
        window: 'readonly', // Frontend globals
        document: 'readonly', // Frontend globals
        process: 'readonly', // Backend globals
        __dirname: 'readonly', // Backend globals
        module: 'readonly', // Backend globals
      },
    },
    plugins: {
      '@typescript-eslint': eslintPluginTypescript,
      react: eslintPluginReact,
      'react-hooks': eslintPluginReactHooks,
      'jsx-a11y': eslintPluginJsxA11y,
      import: eslintPluginImport,
      prettier: eslintPluginPrettier,
    },
    settings: {
      react: {
        version: 'detect', // Automatically detect React version
      },
      'import/resolver': {
        node: {
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
      },
    },
    rules: {
      'prettier/prettier': 'error', // Ensure Prettier errors are caught
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_' },
      ],
      'react/react-in-jsx-scope': 'off', // Not needed with React 17+
      'import/order': [
        'warn',
        {
          groups: [
            ['builtin', 'external'],
            ['internal'],
            ['parent', 'sibling', 'index'],
          ],
          'newlines-between': 'always',
        },
      ],
      'no-unused-vars': 'warn',
      'no-console': 'warn',
      'no-debugger': 'warn',
      eqeqeq: 'warn',
      curly: 'warn',
      quotes: ['warn', 'single'],
      semi: ['warn', 'always'],
    },
  },
];
