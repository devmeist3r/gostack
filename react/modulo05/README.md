# Configurações basicas do projeto React

Adicionar o eslint como um dependencia de desenvolvimento

```js
yarn add eslint -D
```

Roda o comando:

```js
yarn eslint --init
```

- To check syntax, find problems, and enforce code style
- JavaScript modules (import/export)
- React
- Browser
- Use a popular style guide
- Airbnb
- JavaScript

Configurando Prettier e etc.

```js
yarn add prettier eslint-config-prettier eslint-plugin-prettier babel-eslint -D
```

Apos a instalação do ...prettier editar o arquivo _.eslintrc.js_

```js
module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ['airbnb', 'prettier', 'prettier/react'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': ['warn', { extensions: ['.jsx', '.js'] }],
    'import/prefer-default-export': 'off',
  },
};
```

Criar um arquivo _.prettierrc_

```js
{
  "singleQuote": true,
  "trailingComma": "es5",
  "semi": true
}
```
