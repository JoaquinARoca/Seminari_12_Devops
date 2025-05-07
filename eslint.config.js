// eslint.config.js
import eslintPluginTs from '@typescript-eslint/eslint-plugin';
import parserTs from '@typescript-eslint/parser';

/** @type {import("eslint").Linter.FlatConfig[]} */
export default [
  // 🔒 Configuración general para todos los archivos TS
  {
    files: ['**/*.ts'],
    languageOptions: {
      parser: parserTs,
      parserOptions: {
        project: './tsconfig.json',
      },
    },
    plugins: {
      '@typescript-eslint': eslintPluginTs,
    },
    rules: {
      ...eslintPluginTs.configs.recommended.rules,

      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/no-unused-vars': 'error',

      // 🔒 Bloquear console.log por defecto
      'no-restricted-syntax': [
        'error',
        {
          selector: "CallExpression[callee.object.name='console'][callee.property.name='log']",
          message: "No se permite console.log fuera de middleware/"
        }
      ],
    },
  },

  // ✅ Excepción: permitir console.log en middleware/*
  {
    files: ['src/middleware/**/*.ts'],
    rules: {
      'no-restricted-syntax': 'off'
    }
  }
];
