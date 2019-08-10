# Configurando node

```js
yarn init -y
```

Adicionar os seguintes modulos:

```js
yarn add express
yarn add sucrase nodemon -D
```

Criar um arquino na raiz do projeto com o nome _nodemon.json_

```json
{
  "execMap": {
    "js": "sucrase-node"
  }
}
```

Alterar _package.json_ criar scripts para execução e reconhecimento do import/export

```json
{
  "scripts": {
    "dev": "nodemon src/server.js"
  }
}
```

Criar uma pastar _src_ e nela criar tres arquivos base.

- server.js (arquivo inicial da aplicação)

```js
import app from './app';

// execução da api
app.listen(3333);
```

- app.js (onde se localiza class App)

```js
import express from 'express';
import routes from './routes';

class App {
  // metodo executado inicio
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
  }

  // middlewares
  middlewares() {
    this.server.use(express.json());
  }

  // rotas
  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
```

- routes.js (routas geral do aplicativo)

```js
// modulo para configurar rotas
import { Router } from 'express';

// variavel de rotas
const routes = new Router();

// rota inicial
routes.get('/', (req, res) => {
  return res.json({ message: 'Hello world' });
});

export default routes;
```

# Configurando Eslint, Prettier & EditorConfig

Instalar o eslint:

```js
  yarn add eslint -D
```

Logo em seguida configurar o projeto com o comando:

```js
yarn eslint --init
```

Escolher as opções:

- To check syntax, find problems, and enforce code style
- (Como esta configurado sucrase), podemos escolher: JavaScript modules (import/export)
- None of these
- Node
- Use a popular style guide
- AirBnb
- JavaScript

Configurar o arquivo .eslintrc.js

```js
module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: ['airbnb-base'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    'class-method-use-this': 'off',
    'no-param-reassign': 'off',
    camelcase: 'off',
    'no-unused-vars': ['error', { argsIgnorePattern: 'next' }],
  },
};
```

Instalar as dependencias de configuração

```js
  yarn add prettier eslint-config-prettier eslint-plugin-prettier -D
```

Depois alterar o arquivo _.eslintrc.js_

```js
module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: ['airbnb-base', 'prettier'],
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
    'prettier/prettier': 'error',
    'class-method-use-this': 'off',
    'no-param-reassign': 'off',
    camelcase: 'off',
    'no-unused-vars': ['error', { argsIgnorePattern: 'next' }],
  },
};
```

Dentro da raiz do projeto criar um arquivo _.prettierrc_

```js
{
  "singleQuote": true,
  "trailingComma": "es5",
  "semi": false
}
```

Executar o prettier em todos os arquivos

```js
yarn eslint --fix src --ext .js
```

Configurar _.editorconfig_

```js
root = true

[*]
indent_style = space
indent_size = 2
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true
```

# Configuração avançadas

Instalando sequelize

```js
  yarn add sequelize
  yarn add sequelize-cli -D
```

Criar arquivo _.sequelizerc_ na raiz do projeto

```js
const { resolve } = require('path');

module.exports = {
  config: resolve(__dirname, 'src', 'config', 'database.js'),
  'models-path': resolve(__dirname, 'src', 'app', 'models'),
  'migrations-path': resolve(__dirname, 'src', 'database', 'migrations'),
  'seeders-path': resolve(__dirname, 'src', 'database', 'seeds'),
};
```

Configurando o _pg_ _pg-hstore_

```js
  yarn add pg pg-hstore
```

Dentro da pasta config no arquivo _database.js_

```js
module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'gobarber',
  defint: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
```
