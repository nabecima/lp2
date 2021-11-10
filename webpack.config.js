const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

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
          "sass-loader",
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
        test: /\.(gif|png|jpe?g|svg)$/,
        type: "asset/resource",
      },
    ],
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/style.css",
    }),
  ],

  target: ["web", "es5"],
};
