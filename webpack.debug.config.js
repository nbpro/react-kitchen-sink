const path = require("path");
const baseConfig = require("./webpack.base.config");


module.exports = {
  entry: baseConfig.entry,
  output: baseConfig.output,
  module: {
    rules: [baseConfig.makeBabelTsxLoader({})],
  },
  plugins: [],
  resolve: baseConfig.resolve,
  devtool: "eval",
};
