const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
  entry: ['./src/index.js'],
  mode: 'development',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new CleanWebpackPlugin({cleanStaleWebpackAssets: false}),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
            },
          },
        ],
      },
      {
        test: /\.(sc|c)ss$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              url: false,
              modules: {
                auto: /\.scss$/i,
                localIdentName: '[name]__[local]--[hash:base64:5]',
              },
            },
          },
          // 'postcss-loader', // needed if using preset-env
          'sass-loader',
        ],
      },
    ],
  },
  optimization: {},
  devtool: 'inline-source-map',
  devServer: {
    // contentBase: path.join(__dirname, 'public'),
    // contentBase: './dist',
    contentBase: ['./dist', './public'],
    host: '0.0.0.0',
    // hot: true,
    port: 3000,
  },
};
