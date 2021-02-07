const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
  entry: ['./src/index.js'],
  mode: 'development',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: '[path][name][ext]',
  },
  plugins: [
    new CleanWebpackPlugin({cleanStaleWebpackAssets: false}),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new ReactRefreshWebpackPlugin(),
  ],
  module: {
    rules: [
      //---- javascript
      {
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        include: path.resolve(__dirname, 'src'),
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
              plugins: ['react-refresh/babel'],
            },
          },
        ],
      },

      //---- Scoped css
      {
        test: /\.css$/,
        include: [path.resolve(__dirname, 'src/components')],
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              url: false,
              modules: {
                localIdentContext: path.resolve(__dirname, 'src/components'),
                localIdentName: '[path][name]__[local]',
              },
            },
          },
          'postcss-loader',
        ],
      },

      //---- UnScoped css (eg: src/index.css, styles/tailwindcss.css)
      {
        test: /\.css$/,
        include: [path.resolve(__dirname, 'src')],
        exclude: [path.resolve(__dirname, 'src/components')],
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },

      /*---------- Assets in .js (In webpack 5 file-loader is deprecated. )   ----------*/
      //---- https://webpack.js.org/guides/asset-modules/
      {
        test: /\.(png|jpg|jpeg|webp|gif|svg)$/i,
        type: 'asset/resource',
      },
    ],
  },
  optimization: {},
  devtool: 'inline-source-map',
  devServer: {
    contentBase: ['./dist', './public'],
    host: '0.0.0.0',
    hot: true,
    port: 3000,
  },
};
