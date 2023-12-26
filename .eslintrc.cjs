module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "airbnb",
    "airbnb-typescript",
    "airbnb/hooks",
    "plugin:prettier/recommended"
  ],
  ignorePatterns: ["build", "dist", "public"], //lint 무시파일
  parser: '@typescript-eslint/parser',
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module",
    "project": "./tsconfig.json",
    "ecmaFeatures": {
      "jsx": true, //일반 자바스크립트의 확장 문법도 린트하기 위해
      "tsx": true
    }
  },
  plugins: ["@typescript-eslint", "react"],
  rules: {
    "import/prefer-default-export": "off", //확장자명 on
    "import/extensions": ["off"] //확장자명 on
  },
}
