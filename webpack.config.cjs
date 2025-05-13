const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = (env) => {
    return {
       devServer: {
         port: 3000,
         open: true,
         hot: true,
       },
      mode: env.mode ?? "development",
      entry: path.resolve(__dirname, "src", "index.js"),
        output: {
          path: path.resolve(__dirname, "dist"),
          filename: "main.[contenthash].js",
          clean: true,
        },
        plugins: [
         new HtmlWebpackPlugin({
           template: path.resolve(__dirname, "src", "index.html")
         }),
       ],
       module: {
         rules: [
           {
             test: /\.html$/i,
             loader: "html-loader",
           },
         ],
       },
      }
    }