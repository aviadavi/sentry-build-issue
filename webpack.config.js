const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "build"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "public", "index.html"),
    }),
  ],
  optimization: {
    minimizer: [
      new TerserPlugin({
        cache: true,
        parallel: true,
        extractComments: false,
        terserOptions: {
          ecma: 7,
          compress: {},
          output: {
            comments: false,
            beautify: false
          }
        },
        sourceMap: true,
      })
    ]
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "build"),
    },
    port: 3000,
  }
};