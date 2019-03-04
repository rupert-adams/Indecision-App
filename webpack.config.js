const path = require('path');

module.exports = {
  mode: "none",
  entry: './src/app.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      loader: 'babel-loader',
      options: {
        presets: [
        '@babel/preset-env',
        '@babel/preset-react'
        ]
      },
      test: /\.js$/,
      exclude: /node_modules/
    }]
  }
};
