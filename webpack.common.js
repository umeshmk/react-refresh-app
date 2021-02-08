const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  entry: ['./src/index.js'],
  mode: isProduction ? 'production' : 'development',
  output: {
    filename: isProduction ? '[name].[hash:5].min.js' : '[name].js',
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: isProduction
      ? 'images/[name]-[hash:5][ext]'
      : '[path][name][ext]',
  },
  module: {
    rules: [
      /*----------  javascript  ----------*/
      {
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        include: path.resolve(__dirname, 'src'),
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
              presets: ['@babel/preset-env', '@babel/preset-react'],
              plugins: isProduction ? [] : ['react-refresh/babel'],
            },
          },
        ],
      },

      /*----------  Scoped css  ----------*/
      {
        test: /\.css$/i,
        include: [path.resolve(__dirname, 'src/components')],
        use: [
          isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
          {
            loader: 'css-loader',
            options: {
              url: false,
              modules: {
                localIdentContext: path.resolve(__dirname, 'src/components'),
                localIdentName: isProduction
                  ? '[hash:6]'
                  : '[path][name]__[local]',
              },
            },
          },
          'postcss-loader',
        ],
      },

      /*---------- UnScoped css (eg: src/index.css, styles/tailwindcss.css)    ----------*/
      {
        test: /\.css$/i,
        include: [path.resolve(__dirname, 'src')],
        exclude: [path.resolve(__dirname, 'src/components')],
        use: [
          isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
          'css-loader',
          'postcss-loader',
        ],
      },

      /*---------- Assets in .js for webpack 5  ----------*/
      {
        test: /\.(png|jpg|jpeg|webp|gif|svg)$/i,
        type: 'asset/resource',
      },
    ],
  },
};
