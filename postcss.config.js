const presetEnv = require('postcss-preset-env')({
  stage: 1,
  features: {},
});

const purgecss = require('@fullhuman/postcss-purgecss')({
  content: ['./public/index.html', './src/**/*.html', './src/**/*.js'],
});

const cssnano = require('cssnano')({
  preset: 'default',
});

module.exports = {
  plugins: [
    require('postcss-import'),
    presetEnv,
    require('postcss-flexbugs-fixes'),
    ...(process.env.NODE_ENV === 'production' ? [purgecss] : []),
    ...(process.env.NODE_ENV === 'production' ? [cssnano] : []),
  ],
};
