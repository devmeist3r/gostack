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
}
```

Criar um arquivo _.prettierrc_

```js
{
  "singleQuote": true,
  "trailingComma": "es5",
  "semi": true
}
```

Configurando Reactotron base para web

```js
yarn add reactotron-react-js
```

Depois criar na src do projeto a pasta _config_ com o arquivo _ReactotronConfig.js_ com o seguinte conteudo.

```js
import Reactotron from 'reactotron-react-js'

if (process.env.NODE_ENV === 'development') {
  const tron = Reactotron.configure().connect()

  tron.clear()

  console.tron = tron
}
```

Configurando babel-root-import

```js
 yarn add customize-cra react-app-rewired babel-plugin-root-import -D
```

Apos a instalação é necessario criar um arquivo na raiz do projeto _config-overrides.js_ , com o conteudo

```js
const { addBabelPlugin, override } = require('customize-cra')

module.exports = override(
  addBabelPlugin([
    'babel-plugin-root-import',
    {
      rootPathSuffix: 'src',
    },
  ])
)
```

Dentro do package.json alterar os scripts:

```json
"scripts": {
    "start": "react-app-rewired start",
    "build": "react-app-rewired build",
    "test": "react-app-rewired test",
    "eject": "react-scripts eject"
  },
```

Depois instalar

```js
yarn add eslint-import-resolver-babel-plugin-root-import -D
```

Apos a instalação alterar o .eslintrc.js

```js
settings: {
    'import/resolver': {
      'babel-plugin-root-import': {
        rootPathSuffix: 'src'
      }
    }
  }
```

criar o arquivo _jsconfig.json_ e adicionar os seguintes comandos para que o vsCode possa completar os caminhos das pastas!

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "~/*": ["src/*"]
    }
  }
}
```

# Configurando redux redux-saga e reactotron

Instale

```js
yarn add redux redux-saga react-redux reactotron-redux reactotron-redux-saga immer
```
