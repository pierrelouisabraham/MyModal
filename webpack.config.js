const path = require('path');

module.exports = {
  entry: './src/lib/index.js',

  output: {
    path: path.resolve('./', 'dist'),
    filename: 'bundle.js',
  },

  module: {
    rules: [
      {
        test: /.(js|jsx)$/,
        use: {loader : 'babel-loader', options: {presets: ['@babel/preset-react']}},
      },
    ],
  },

  resolve: {
    extensions: ['.js', '.jsx'],
  },

  devServer: {
    contentBase: path.join('./', 'dist'),
    compress: true,
    port: 9000,
  },
};