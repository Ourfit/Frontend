import { FlatCompat } from "@eslint/eslintrc";
import tsParser from "@typescript-eslint/parser";
import reactPlugin from "eslint-plugin-react";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends(
    "next/core-web-vitals",
    "next/typescript", // Next.js와 TypeScript를 위한 기본 설정
    "plugin:prettier/recommended", // Prettier와 ESLint 연동
  ),
  {
    rules: {
      semi: ["error", "always"], // 세미콜론 강제
      "prettier/prettier": "error",
      quotes: ["error", "double"], // 더블 쿼트 사용 강제
      "no-unused-vars": ["error", { vars: "all", args: "none" }], // 사용하지 않는 변수 허용 범위
      "no-console": "warn", // console.log 경고
      "react-hooks/exhaustive-deps": "off", // React hooks의 의존성 검사 비활성화
      "react/prop-types": "off", // PropTypes 검사 비활성화
    },
    plugins: {
      react: reactPlugin, // React 플러그인 객체 형태로 선언
    },
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        requireConfigFile: false, // Babel 설정 파일 없이도 동작
        ecmaVersion: "latest",
        sourceType: "module",
        babelOptions: {
          presets: ["@babel/preset-react"],
        },
      },
      globals: {
        browser: true, // 브라우저 환경
        node: true, // Node.js 환경
        es6: true,
      },
    },
  },
];

export default eslintConfig;
