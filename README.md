# my-webpack

## package

```
npm i -D webpack webpack-cli webpack-dev-server css-loader sass sass-loader postcss-loader autoprefixer babel-loader @babel/core @babel/preset-env mini-css-extract-plugin html-webpack-plugin
```

1. webpack
2. webpack-cli
3. webpack-dev-server
4. css-loader
5. sass
6. sass-loader
7. postcss-loader
8. autoprefixer
9. babel-loader
10. @babel/core
11. @babel/preset-env
12. mini-css-extract-plugin
13. html-webpack-plugin

## scripts
package.jsonのscripts:{}に以下の内容を追記

```
"dev": "webpack --mode development --watch",
"build": "webpack --mode production",
"serve": "webpack-dev-server --mode development"
```
