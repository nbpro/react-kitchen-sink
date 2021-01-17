const path = require("path");
const ReactRefreshPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const baseConfig = require("./webpack.base.config");

module.exports = {
  entry: baseConfig.entry,
  output: baseConfig.output,
  module: {
    rules: [
      baseConfig.makeBabelTsxLoader({
        plugins: [require.resolve("react-refresh/babel")],
      }),
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "less-loader"],
      },
    ],
  },
  plugins: [new ReactRefreshPlugin({})],
  resolve: baseConfig.resolve,
  devtool: "eval-source-map",
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 8000,
    publicPath: "/",
    historyApiFallback: true,
    disableHostCheck: true,
  },
};
