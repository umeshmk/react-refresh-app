const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: ['./src/index.js'],
  mode: 'production',
  output: {
    filename: '[name].[contenthash].min.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyPlugin({
      patterns: [
        {
          from: './public',
          to: '.',
          globOptions: {
            ignore: ['**/index.html'],
          },
        },
      ],
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new MiniCssExtractPlugin(),
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
            },
          },
        ],
      },

      //---- Scoped css
      {
        test: /\.css$/i,
        include: [path.resolve(__dirname, 'src/components')],
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              url: false,
              modules: {
                localIdentContext: path.resolve(__dirname, 'src/components'),
                localIdentName: '[hash:base64:6]',
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
        use: [
          // 'style-loader',
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
        ],
      },
    ],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
    moduleIds: 'deterministic',
  },
};
