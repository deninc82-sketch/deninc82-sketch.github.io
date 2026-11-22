import js from "@eslint/js";
import tseslint from "typescript-eslint";
import eslintConfigPrettier from "eslint-config-prettier";
import { defineConfig } from "eslint/config"; // Імпортуємо новий стандартний хелпер

export default defineConfig([
  // 1. Базові рекомендовані правила JavaScript та TypeScript
  js.configs.recommended,
  ...tseslint.configs.recommended,

  // 2. Ваші кастомні налаштування правил для TS
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
    rules: {
      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/no-explicit-any": "warn",
      "no-console": "off",
    },
  },

  // 3. Вимкнення конфліктних правил Prettier (має бути в самому кінці)
  eslintConfigPrettier,

  // 4. Глобальне ігнорування папок
  {
    ignores: ["node_modules/", "dist/", "build/", "eslint.config.js"],
  },
]);




