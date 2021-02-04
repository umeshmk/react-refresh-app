![](https://i.imgur.com/msARAdu.png)

# REACT FROM SCRATCH

**_Use This Project As Your Starting Point For Any React Projects._**

### Features

1. React-hot-loader
2. Sass
3. Sanitize.css
4. Postcss
5. `copy-webpack-plugin` - `public` folder is copied to `dist`

### Install

```bash
npm install

#tailwindcss
npm run build:css

#development - uses webpack.dev.js
npm run dev

#production - uses webpack.prod.js
npm run prod
```

- Enable `postcss-loader` in `webpack.dev.js` if using `postcss-preset-env` plugin.

## Issues

_Create an issue for todos, bugs, feature requests, and more._

**Stopping Scoped css for Tailwind classes**

- Use `.css` for library
- Use `.scss` for components

```js
// webpack
modules: {
  // don't use for .css since it's a library like tailwindcss
  auto: /\.scss$/i,
  localIdentName: '[name]__[local]--[hash:base64:5]',
},
```

---

- `url()` in scss
  - In `css-loader` url option is set to false
  - Add images in `public` folder since it gets copied.
  - Alternatively there is `npm i resolve-url-loader`
- `mini-css-extract-plugin`
  - Why extract css ? We need **scoped-css** for each components.
- `cssnano`
  - Only if 3rd party css (excluding Sanitize.css)
