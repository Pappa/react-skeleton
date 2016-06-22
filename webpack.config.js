// http://moduscreate.com/optimizing-react-es6-webpack-production-build/

const path = require('path');
const webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: './src/js/app',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel']
      }
    ],
  },
};