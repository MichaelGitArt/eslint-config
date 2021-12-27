module.exports = {
  overrides: [
    {
      files: ['*.vue'],
      parser: 'vue-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
      },
      rules: {
        'no-unused-vars': 'off',
        'no-undef': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        'vue/max-attributes-per-line': ['warn', {
          singleline: 2,
          multiline: 1,
        }],
        'vue/component-name-in-template-casing': [
          'warn',
          'PascalCase',
          {
            registeredComponentsOnly: false,
          },
        ],
      },
    },
  ],
  extends: [
    'plugin:vue/vue3-recommended',
    '@gitart/eslint-config-ts',
  ],
  rules: {
    'vue/max-attributes-per-line': 'off',
    'vue/no-v-html': 'off',
    'vue/require-prop-types': 'off',
    'vue/require-default-prop': 'off',
    'vue/multi-word-component-names': 'off',
  },
}
