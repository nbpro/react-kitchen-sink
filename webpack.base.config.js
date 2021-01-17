const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "dist/"),
    filename: "index.js",
  },
  makeBabelTsxLoader: ({ plugins }) => ({
    test: /\.[tj]sx?$/,
    // exclude: /node_modules/,
    // include: [path.resolve(__dirname, "src")],
    use: [
      // ... other loaders
      {
        loader: require.resolve("babel-loader"),
        options: {
          envName: "development",
          presets: [
            [
              "@babel/preset-typescript",
              {
                target: "ES2015",
              },
            ],
          ],
          plugins: plugins || [],
        },
      },
    ],
  }),
  makeWebpackDefinePlugin: ({
    serverUrls: { APP_SERVER_PREFIX, API_SERVER_PREFIX },
  }) => {
    return new webpack.DefinePlugin({
      API_SERVER_PREFIX: JSON.stringify(API_SERVER_PREFIX),
      APP_SERVER_PREFIX: JSON.stringify(APP_SERVER_PREFIX),
    });
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".css", ".scss", ".less"],
    alias: {
      '~': path.resolve('./node_modules')
    },
    fallback: { path: require.resolve("path-browserify") },
  },
};
