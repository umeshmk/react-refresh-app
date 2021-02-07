const postcssImport = require('postcss-import');
const postcssFlexbugsFixes = require('postcss-flexbugs-fixes');

let purgecss = require('@fullhuman/postcss-purgecss');

purgecss = purgecss({
  content: ['./public/index.html', './src/**/*.html', './src/**/*.js'],
});

const presetEnv = require('postcss-preset-env')({
  stage: 1,
  features: {},
});

module.exports = {
  plugins: [
    postcssImport,
    presetEnv,
    postcssFlexbugsFixes,
    ...(process.env.NODE_ENV === 'production' ? [purgecss] : []),
  ],
};
