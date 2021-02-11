<!-- ![alt](https://i.imgur.com/VLGNErN.png)
![alt](https://i.imgur.com/nkaS868.png) -->

![](https://i.imgur.com/mrHwrbH.png)

# REACT REFRESH APP

**_Use This Project As Your Starting Point For Any React Projects._**

### Features

1. React 17+
2. Webpack 5 + _React-refresh HMR_
3. Separate configurations `webpack.dev.js` & `webpack.prod.js`
4. Css with _Stylelint_ support
5. Sanitize.css
6. Postcss - `import, preset-env, purgecss, cssnano`
7. Assets (`png|jpe?g|gif|svg|eot|ttf|woff|woff2`)
8. Faster subsequent builds due to cached _babel_ transpiling output.

**Production ready**

1. `*.js` - _Minified & split chunks as `main.[hash].min.js` & `vendors.[hash].min.js`_
2. `main.[hash].min.css` is _Prefixed, Purged & Minified_
   - `src/*.css` - _UnScoped classes_. (eg: `./src/index.css`, `./src/styles/*.css`, Tailwindcss)
   - `src/components/*.css` - _Scoped classes_.
3. Assets in `./public` folder are copied to `./dist`
4. `./public/index.html` - _Scripts/Stylesheets are automatically added._

**Assets in js**

- Assets in `./src` - add using `import Logo as "./logo.png";` & `<img src="{Logo}" />`
- Assets in `./public` - add using `<img src="logo.png" />`

**Assets in css `url()`**
All assets are `resolved` by Webpack except urls which **`url.startsWith('/')`** which will point to root directory.

- In _development_ root is `['./dist', './public']`
- In _production_ root is `./dist`

```scss
// We can put images in public folder.
// Webpack will copy everything in './public' to './dist' automatically
url(/images/foo.png) --->  "./public/images/foo.png" // development
url(/images/foo.png) --->  "./dist/images/foo.png" // production
```

### Install

```bash
# Clone this repo
npm install
npm run dev   # development - uses webpack.dev.js
npm run prod  # production - uses webpack.prod.js
```

### Stylelint

`.stylelintrc.json`

- Needs [stylelint.vscode-stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint) vscode extension
- Uses postcss plugin [postcss-sorting](https://github.com/hudochenkov/postcss-sorting) (not in `postcss.config.js`).
- Is extended from predefined configs - [stylelint-config-standard](https://github.com/stylelint/stylelint-config-standard) & [stylelint-config-rational-order](https://github.com/constverum/stylelint-config-rational-order)

```bash
# Already installed
npm i -D  stylelint stylelint-config-standard
npm i -D  stylelint-order stylelint-config-rational-order postcss-sorting
```

```js
// Refer ./.stylelintrc.json
  "extends": ["stylelint-config-standard", "stylelint-config-rational-order"],
  "prettier.stylelintIntegration": true,
```

### Visual studio code

_This Project comes with some minor tweaks & recommendations for better developer experience_.

- Check **`.vscode/settings.json`**
- Custom **Css Snippets** support is added for `postcss`. I had issues with Emmet in vscode.

### Add Tailwindcss (optional)

**_Vscode extensions (optional)_**

- _Tailwindcss intellisense_
- _Headwind_

**_install_**

```bash
npm i tailwindcss
npx tailwindcss init --full
```

**_postcss.config.js_**

- If using `postcss-preset-env` refer this [issue](https://github.com/tailwindlabs/tailwindcss/discussions/2462#discussioncomment-86591) for error solution.

```js
const tailwindcss = require('tailwindcss')('./tailwind.config.js');

plugins: [
  ...(process.env.NODE_ENV === 'tailwindcss' ? [tailwindcss] : []),
  // other plugins
];
```

**_package.json_**

- Run script - `npm run build:css`

```js
script:{
  "build:css": "cross-env NODE_ENV=tailwindcss postcss src/style/_tailwind.css -o src/style/tailwind.css ",
}
```

**_Create `./src/style/_tailwind.css`_**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

**_index.js_**

```js
// import './styles/sanitize.css';  // remove this if using @tailwind base
import './style/tailwind.css';
import './index.scss';
```

## Issues

_Create an issue for todos, bugs, feature requests, and more._

- _Prefer `postcss-import` for `@import` instead of `css-loader` resolving it because it goes through postcss chain(prefixing & purging)._
- _Prefer `cssnano` in postcss & avoid `css-minimizer-webpack-plugin` since it uses the same `cssnano`._

## Inspired from

- [_Create-React-App_](https://github.com/facebook/create-react-app)

## License

MIT
