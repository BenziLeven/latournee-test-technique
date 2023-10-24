module.exports = {
  // https://eslint.org/docs/user-guide/configuring#configuration-cascading-and-hierarchy
  // This option interrupts the configuration hierarchy at this file
  // Remove this if you have an higher level ESLint config file (it usually happens into a monorepos)
  root: true,

  // https://eslint.vuejs.org/user-guide/#how-to-use-a-custom-parser
  // Must use parserOptions instead of "parser" to allow vue-eslint-parser to keep working
  // `parser: 'vue-eslint-parser'` is already included with any 'plugin:vue/**' config and should be omitted
  parserOptions: {
      parser: require.resolve("@typescript-eslint/parser"),
      extraFileExtensions: [".vue", ".json", ".cjs"],
  },

  env: {
      browser: true,
      es2021: true,
      node: true,
      "vue/setup-compiler-macros": true,
  },

  // Rules order is important, please avoid shuffling them
  extends: [
      // Base ESLint recommended rules
      // 'eslint:recommended',

      // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin#usage
      // ESLint typescript rules
      "plugin:@typescript-eslint/recommended",

      // Uncomment any of the lines below to choose desired strictness,
      // but leave only one uncommented!
      // See https://eslint.vuejs.org/rules/#available-rules
      "plugin:vue/vue3-essential", // Priority A: Essential (Error Prevention)
      // 'plugin:vue/vue3-strongly-recommended', // Priority B: Strongly Recommended (Improving Readability)
      // 'plugin:vue/vue3-recommended', // Priority C: Recommended (Minimizing Arbitrary Choices and Cognitive Overhead)

      // https://github.com/prettier/eslint-config-prettier#installation
      // usage with Prettier, provided by 'eslint-config-prettier'.
      "prettier",
  ],

  plugins: [
      // required to apply rules which need type information
      "@typescript-eslint",

      // https://eslint.vuejs.org/user-guide/#why-doesn-t-it-work-on-vue-files
      // required to lint *.vue files
      "vue",

      // https://github.com/typescript-eslint/typescript-eslint/issues/389#issuecomment-509292674
      // Prettier has not been included as plugin to avoid performance impact
      // add it as an extension for your IDE
  ],

  globals: {
      ga: "readonly", // Google Analytics
      cordova: "readonly",
      __statics: "readonly",
      __QUASAR_SSR__: "readonly",
      __QUASAR_SSR_SERVER__: "readonly",
      __QUASAR_SSR_CLIENT__: "readonly",
      __QUASAR_SSR_PWA__: "readonly",
      process: "readonly",
      Capacitor: "readonly",
      chrome: "readonly",
  },

  // add your custom rules here
  rules: {
      "prefer-promise-reject-errors": "off",

      "array-bracket-spacing": ["error", "never"],
      "arrow-body-style": ["error", "as-needed"],
      "arrow-parens": ["error", "as-needed", { requireForBlockBody: true }],
      "arrow-spacing": "error",
      "block-spacing": "error",
      "brace-style": ["error", "1tbs", { allowSingleLine: true }],
      "comma-dangle": ["error", "never"],
      "comma-spacing": ["error", { before: false, after: true }],
      "comma-style": ["error", "last"],
      curly: "error",
      "dot-notation": "error",
      "eol-last": "error",
      eqeqeq: "error",
      "generator-star-spacing": ["error", "after"],
      indent: ["error", 4, { SwitchCase: 1 }],
      "key-spacing": "error",
      "keyword-spacing": "error",
      "linebreak-style": ["error", "unix"],
      "new-parens": "error",
      "no-alert": "error",
      "no-array-constructor": "error",
      "no-bitwise": "error",
      "no-caller": "error",
      "no-catch-shadow": "error",
      "no-confusing-arrow": ["error", { allowParens: true }],
      "no-console": "error",
      "no-empty": ["error", { allowEmptyCatch: true }],
      "no-eval": "error",
      "no-extend-native": "error",
      "no-implied-eval": "error",
      "no-irregular-whitespace": "error",
      "no-iterator": "error",
      "no-loop-func": "error",
      "no-multi-spaces": "error",
      "no-multi-str": "error",
      "no-multiple-empty-lines": ["error", { max: 2, maxBOF: 0 }],
      "no-new": "error",
      "no-new-func": "error",
      "no-new-object": "error",
      "no-new-require": "error",
      "no-new-wrappers": "error",
      "no-process-exit": "error",
      "no-proto": "error",
      "no-return-await": "error",
      "no-self-compare": "error",
      "no-sequences": "error",
      "no-shadow": "error",
      "no-throw-literal": "error",
      "no-trailing-spaces": "error",
      "no-unneeded-ternary": "error",
      "no-unused-expressions": "error",
      "no-unused-vars": [
          "error",
          { args: "after-used", ignoreRestSiblings: true },
      ],
      "no-useless-escape": "error",
      "no-useless-rename": "error",
      "no-var": "warn",
      "no-void": "error",
      "no-whitespace-before-property": "error",
      "no-with": "error",
      "object-curly-spacing": ["error", "always"],
      "one-var": [
          "error",
          {
              const: "never",
              let: "never",
              var: "never",
          },
      ],
      "operator-assignment": ["error", "always"],
      "prefer-const": [
          "error",
          { destructuring: "all", ignoreReadBeforeAssign: true },
      ],
      "prefer-template": ["error"],
      quotes: [
          "error",
          "double",
          { allowTemplateLiterals: true, avoidEscape: true },
      ],
      radix: "error",
      "require-atomic-updates": "off",
      "require-yield": "off",
      semi: ["error", "always"],
      "space-before-blocks": ["error", "always"],
      "space-before-function-paren": [
          "error",
          { anonymous: "always", named: "never" },
      ],
      "space-in-parens": ["error", "never"],
      "space-infix-ops": "error",
      "space-unary-ops": [
          "error",
          { words: true, nonwords: false, overrides: { "!": true } },
      ],
      "spaced-comment": "error",
      "template-curly-spacing": ["error", "never"],
      "valid-typeof": "error",
      yoda: "error",
      "no-restricted-properties": [
          "warn",
          {
              object: "_",
              property: "pluck",
              message:
                  "Please consider using ES6 map and an arrow function: https://trello.com/c/1RLLU7p0/173-do-not-use-underscore",
          },
      ],

      // this rule, if on, would require explicit return type on the `render` function
      "@typescript-eslint/explicit-function-return-type": "off",

      // in plain CommonJS modules, you can't use `import foo = require('foo')` to pass this rule, so it has to be disabled
      "@typescript-eslint/no-var-requires": "off",

      "@typescript-eslint/consistent-type-imports": "error",

      // The core 'no-unused-vars' rules (in the eslint:recommended ruleset)
      // does not work with type definitions
      "no-unused-vars": "off",

      // allow debugger during development only
      "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
  },
};
