const autoprefixer = require('autoprefixer');
let purgecss = require('@fullhuman/postcss-purgecss');

purgecss = purgecss({
  content: ['./public/index.html', './src/**/*.html', './src/**/*.js'],
});

// const presetEnv = require('postcss-preset-env')({
//   stage: 1,
//   features: { },
// });

module.exports = {
  plugins: [
    // ...(process.env.NODE_ENV === 'production' ? [presetEnv] : []),
    ...(process.env.NODE_ENV === 'production' ? [autoprefixer] : []),
    ...(process.env.NODE_ENV === 'production' ? [purgecss] : []),
  ],
};
