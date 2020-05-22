const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const { optimize } = require("webpack");

module.exports = merge(common, {
  mode: "production",
  plugins: [
    new optimize.AggressiveMergingPlugin(),
    new optimize.OccurrenceOrderPlugin(),
  ],
});
