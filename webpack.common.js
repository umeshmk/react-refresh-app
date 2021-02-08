const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const {CleanWebpackPlugin} = require('clean-webpack-plugin');
// const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
  entry: ['./src/index.js'],
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename:
      process.env.NODE_ENV === 'production'
        ? 'images/[name]-[hash:5][ext]'
        : '[path][name][ext]',
  },
};
