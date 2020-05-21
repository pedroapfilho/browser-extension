const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const srcDir = "../src/";

module.exports = {
  entry: {
    background: path.join(__dirname, srcDir + "background.ts"),
    options: path.join(__dirname, srcDir + "options.ts"),
    newTab: path.join(__dirname, srcDir + "newTab.ts"),
  },
  output: {
    path: path.join(__dirname, "../dist"),
    filename: "[name].js",
  },
  optimization: {
    splitChunks: {
      name: "vendor",
      chunks: "initial",
    },
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: "public/", to: ".", globOptions: { ignore: [".DS_Store"] } },
      ],
    }),
  ],
};
