# Configurção básica

Instalar as dependencias como modo desenvolvimento

```js
yarn add @babel/core @babel/preset-env @babel/preset-react webpack webpack-cli babel-loader webpack-dev-server style-loader css-loader file-loader @babel/plugin-proposal-class-properties -D
```

Logo em seguida instalar

```js
yarn add react react-dom
```

Apos a instalação, é necessário criar um arquivo _babel.config.js_ na raiz do projeto

```js
module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-react']
};
```

Criar o arquivo _webpack.config.js_

```js
const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          }
        ]
      },
      {
        test: /.*\.(gif|png|jpe?g)$/i,
        use: [
          {
            loader: 'file-loader'
          }
        ]
      }
    ]
  }
};
```
