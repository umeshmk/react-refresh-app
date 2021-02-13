const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isProduction = process.env.NODE_ENV === 'production';

const handleUrlInCss = (url, resourcePath) => {
  if (url.startsWith('/')) return false;
  return true;
};

module.exports = {
  entry: ['./src/index.js'],
  mode: isProduction ? 'production' : 'development',
  output: {
    filename: isProduction ? '[name].[contenthash:5].min.js' : '[name].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '', // issue https://bit.ly/3cPweLu
    assetModuleFilename: isProduction
      ? 'images/[name]-[contenthash:5][ext]'
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
              plugins: [
                ...(isProduction ? [] : ['react-refresh/babel']),
                'babel-plugin-styled-components',
              ],
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
              url: handleUrlInCss,
              modules: {
                localIdentContext: path.resolve(__dirname, 'src/components'),
                localIdentName: isProduction
                  ? '[contenthash:6]'
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
          {
            loader: 'css-loader',
            options: {
              url: handleUrlInCss,
            },
          },
          'postcss-loader',
        ],
      },

      /*---------- Assets  ----------*/
      {
        test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/i,
        type: 'asset/resource',
      },
    ],
  },

  // /*----------  resolve  ----------*/
  // resolve: {
  //   alias: {
  //     foo: path.resolve(__dirname, 'bar/'),
  //   },
  // },
};
