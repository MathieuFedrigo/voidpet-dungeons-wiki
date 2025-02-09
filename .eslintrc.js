const { defineConfig } = require('eslint-define-config');

module.exports = defineConfig({
  ignorePatterns: [
    'node_modules',
    '.yarn', // yarn 3
    'android', // react-native
    'ios', // react-native
    '.cache', // tsc/eslint/metro cache
    'coverage', // jest
    'dist', // expo updates
    'shaka-dist', // expo updates
    '.expo-shared',
    '.expo',
    'chrome-extensions',
    'freewheel-sdk',
  ],
  plugins: [
    'react-native',
    'import',
    'testing-library',
    'jest-formatting',
  ],
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  extends: [
    'eslint:recommended',
    'plugin:react/recommended', // Uses the recommended rules from @eslint-plugin-react
    'plugin:react/jsx-runtime', // Disables the rules that require importing react when using JSX
    'plugin:react-native/all', // Enables all rules from react-native
    'plugin:@typescript-eslint/recommended', // Uses the recommended rules from @typescript-eslint/eslint-plugin
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended', // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
    'plugin:import/typescript',
    'plugin:@tanstack/eslint-plugin-query/recommended',
    'plugin:@bam.tech/recommended',
  ],
  parserOptions: {
    project: './tsconfig.json',
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
  },
  rules: {
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    // e.g. "@typescript-eslint/explicit-function-return-type": "off",
    'unused-imports/no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        args: 'all',
        argsIgnorePattern: '^_',
        caughtErrors: 'all',
        caughtErrorsIgnorePattern: '^_',
        destructuredArrayIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        ignoreRestSiblings: true,
      },
    ],
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/ban-ts-comment': 'warn',
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    'no-return-await': 'error',
    'react/no-unstable-nested-components': 'error',
    'react/prop-types': 'off',
    'react/jsx-curly-brace-presence': [
      'error',
      { props: 'never', children: 'never', propElementValues: 'always' },
    ],
    'react-native/sort-styles': 'off',
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'react-native/no-raw-text': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'react-native/no-color-literals': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/consistent-type-imports': 'off',
    '@typescript-eslint/no-floating-promises': 'error',
    // This rule is too buggy... Example: forwardRef + memo makes the rule think props are not used
    'react/no-unused-prop-types': 'off',

    'react-native/no-inline-styles': 'error',
    'no-restricted-imports': [
      'error',

      {
        paths: [
          {
            name: '@amzn/react-navigation__core',
            message: "Import from '@amzn/react-navigation__native' instead.",
          },
        ],
        patterns: [
          { group: ['**/*/__mocks__/*'], message: 'Import from the real module instead of mock' },
        ],
      },
    ],
    'testing-library/await-async-queries': 'error',
    'jest-formatting/padding-around-test-blocks': 'error',
  },
  settings: {
    'import/resolver': {
      typescript: true,
      node: true,
    },
    react: {
      version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
  env: {
    'react-native/react-native': true,
  },
  // Glob based definitions
  overrides: [
    {
      files: [
        'src/testing/**/*',
        '__mocks__/**',
        '**/*.test.ts',
        '**/*.test.tsx',
        '**/*.stories.tsx',
      ],
      plugins: ['jest'],
      extends: 'plugin:@bam.tech/tests',
      env: {
        jest: true,
      },
      rules: {
        '@typescript-eslint/explicit-function-return-type': 'off',
        'jest/valid-title': 'off',
        'testing-library/prefer-explicit-assert': 'off',
        'jest/no-restricted-matchers': [
          'error',
          {
            toMatchSnapshot:
              'Use toMatchComponentSnapshot for components and toMatchInlineSnapshot otherwise',
          },
        ],
        '@typescript-eslint/no-non-null-assertion': 'off',
      },
    },
    {
      files: ['src/pages/storybook/**/*', '**/*.stories.tsx'],
      rules: {
        'react-native/no-raw-text': 'off',
      },
    },
    {
      files: ['**/icons/*.tsx'],
      rules: {
        'react-native/no-inline-styles': 'off',
      },
    },
  ],
});
