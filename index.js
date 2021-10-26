module.exports = {
  "env": {
    "es6": true,
    "node": true
  },
  "extends": [
    "eslint:recommended",
    "airbnb-typescript-prettier",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:import/typescript",
    "prettier",
    "plugin:prettier/recommended"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "project": "./tsconfig.json"
  },
  "plugins": [
    "@typescript-eslint",
    "import",
    "simple-import-sort",
    "jest",
    "react",
    "react-hooks",
    "prettier"
  ],
  "rules": {
    "@typescript-eslint/array-type": [
      "error",
      {
        "default": "array-simple"
      }
    ],
    "@typescript-eslint/prefer-nullish-coalescing": "error",
    "@typescript-eslint/prefer-reduce-type-parameter": "error",
    "@typescript-eslint/prefer-ts-expect-error": "error",
    "@typescript-eslint/promise-function-async": [
      "error",
      {
        "allowedPromiseNames": [
          "Thenable"
        ],
        "checkArrowFunctions": true,
        "checkFunctionDeclarations": true,
        "checkFunctionExpressions": true,
        "checkMethodDeclarations": true
      }
    ],
    "@typescript-eslint/restrict-plus-operands": "error",
    "default-case": 0,
    "@typescript-eslint/switch-exhaustiveness-check": "error",
    "default-param-last": "off",
    "@typescript-eslint/default-param-last": [
      "error"
    ],
    "@typescript-eslint/prefer-readonly": "error",
    "eqeqeq": [
      "error",
      "always"
    ],
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "prettier/prettier": [
      "error",
      {
        "endOfLine": "auto"
      },
      {
        "usePrettierrc": true
      }
    ],
    "react/jsx-uses-react": "off", // disabled for React 17
    "react/react-in-jsx-scope": "off", // disabled for React 17
    "import/no-extraneous-dependencies": [
      "error",
      {
        "devDependencies": [
          "**/*.test.ts?(x)",
          "**/*.spec.ts?(x)",
          "jest-setup.ts",
          "jest.config.ts"
        ]
      }
    ],
    "@typescript-eslint/no-non-null-assertion": 0,
    "quotes": [
      "error",
      "single",
      {
        "avoidEscape": true
      }
    ],
    "require-await": "off",
    "@typescript-eslint/require-await": "error",
    "no-return-await": "error",
    // "max-len": ["error", 120],
    // "no-multiple-empty-lines": ["error", { "max": 0, "maxBOF": 0 }],
    "react/jsx-props-no-spreading": 0,
    "react/prop-types": "off", // Since we do not use prop-types
    "react/require-default-props": "off", // Since we do not use prop-types
    "@typescript-eslint/ban-ts-comment": 2,
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/consistent-type-imports": 2,
    "@typescript-eslint/explicit-module-boundary-types": 0,
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        "argsIgnorePattern": "^_"
      }
    ],
    "react/jsx-filename-extension": [
      "error",
      {
        "extensions": [
          ".tsx"
        ]
      }
    ],
    "import/extensions": [
      "error",
      "never",
      {
        "svg": "always"
      }
    ],
    "import/no-duplicates": 2,
    "import/no-useless-path-segments": 2,
    "import/no-cycle": 0,
    "import/prefer-default-export": "off",
    "import/no-default-export": "error",
    "import/named": 0,
    "import/namespace": 0,
    "import/default": 0,
    "import/no-named-as-default-member": 0,
    "import/no-named-as-default": 0,
    "import/no-unused-modules": 0,
    "import/no-deprecated": 0,
    "@typescript-eslint/indent": 0,
    "react-hooks/rules-of-hooks": 2,
    "react-hooks/exhaustive-deps": [
      "error",
      {
        "additionalHooks": "(useMemoOne)"
      }
    ],
    "jest/no-identical-title": 2,
    "jest/valid-expect": 2,
    "camelcase": 2,
    "prefer-destructuring": 2,
    "no-nested-ternary": 2,
    "comma-dangle": 0,
    "consistent-return": "off",
    "@typescript-eslint/explicit-function-return-type": "error",
  }
}