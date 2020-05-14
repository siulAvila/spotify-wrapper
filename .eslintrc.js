module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    jasmine: true,
  },
  extends: ['airbnb', 'prettier'],
  plugins: ['prettier'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    'prettier/prettier': ['error'],
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'no-unused-vars': 0,
    'import/no-named-as-default-member': 0,
  },
};
