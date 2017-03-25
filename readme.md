# Synopsis

[Sindre's modules aim for Node.js, not the browser](https://github.com/sindresorhus/ama/issues/446). Your friend probably tells you that you should config your tools such as webpack as follows:

```js
{
  test: /\.js$/,
  exclude: /node_modules/,
  use: 'babel-loader',
}
```

You want to build your app fast so you don't want to transpile you node_modules and you assume they are published as ES5. The minute you install a module that's ES5 you freak out. You tell yourself: I'm not gonna install Sindre's module in my webapp any more :disappointed:. **[But sindre has a million modules!!](https://www.npmjs.com/~sindresorhus#packages)**. A lot of them might be in your transitive deps and you have to use `npm ls` to find out the path and manually add it to you webpack conf. If you are not using `yarn` or `npm-shrinkwrap`, the structure of your node_modules might change. You are pull your hair :haircut:. You don't want to suffer any more so [you open an issue](https://github.com/sindresorhus/sort-on/issues/13). But did you know that [he's tired of getting issues like this on all his repos](https://github.com/sindresorhus/sort-on/issues/13#issuecomment-289004719)? You take a step back and think: Is it webpack's problem? I don't think so. This tiny module comes to the rescue.

# Usage

```js
const path = require('path')
const sindreModulePaths = require('sindre-module-paths')

// Then in some async function
const es6ModulePaths = await sindreModulePaths();

{
  test: /\.js$/,
  include: [
    ...es6ModulePaths,
    path.resolve(__dirname, 'src'),
  ],
  use: 'babel-loader',
}
```

It will include all Sindre's modules in your dependency trees. Never manually supply the paths any more. No struggling. Life comes back to normal.

# CLI

```
npm i -g sindre-module-paths
sindre-module-paths
```

Use the command to inspect your project. This very own module contains more than 50 Sindre's modules (including devDependencies).
