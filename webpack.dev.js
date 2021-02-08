const {merge} = require('webpack-merge');
const common = require('./webpack.common.js');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = merge(common, {
  target: 'web', // issue - https://github.com/pmmmwh/react-refresh-webpack-plugin/issues/235

  plugins: [
    new CleanWebpackPlugin({cleanStaleWebpackAssets: false}),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new ReactRefreshWebpackPlugin(),
  ],

  optimization: {},
  devtool: 'inline-source-map',
  devServer: {
    contentBase: ['./dist', './public'],
    host: '0.0.0.0',
    hot: true,
    port: 3000,
  },
});
