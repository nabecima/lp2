const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/bundle.js",
    assetModuleFilename: "images/[name][ext]",
  },

  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
  },

  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [["autoprefixer", { grid: "autoplace" }]],
              },
            },
          },
          {
            loader: "sass-loader",
            options: {
              // ローダーに dart-sass を使用することを明示的に指定
              implementation: require("sass")
            }
          }
        ],
      },

      {
        test: /\.js$/,
        exclude: /nodemodules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },

      {
        test: /\.html$/,
        use: ["html-loader"],
      },

      {
        test: /\.(gif|png|jpe?g|svg)$/,
        type: "asset/resource",
      },
    ],
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/style.css",
    }),

    new HtmlWebpackPlugin({
      template: "./src/index.html",
      inject: "body",
    }),
  ],

  target: ["web", "es5"],
};
