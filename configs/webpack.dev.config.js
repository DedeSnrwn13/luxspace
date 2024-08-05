/* eslint-disable import/no-extraneous-dependencies */
const { merge } = require("webpack-merge");

const webpackConfiguration = require("../webpack.config");
const environment = require("./env");

module.exports = merge(webpackConfiguration, {
  mode: "development",

  /* Manage source maps generation process */
  devtool: "eval-source-map",

  /* Development Server Configuration */
  devServer: {
    static: {
      directory: environment.paths.output,
      watch: true,
    },
    devMiddleware: {
      publicPath: "/",
    },
    open: true,
    historyApiFallback: true,
    compress: true,
    client: {
      overlay: true,
    },
    hot: false,
    watchFiles: {
      paths: ['src/**/*'],
      options: {
        usePolling: true,
      },
    },
    ...environment.server,
  },

  /* File watcher options */
  // watchOptions: {
  //   aggregateTimeout: 300,
  //   poll: 300,
  //   ignored: /node_modules/,
  // },

  /* Additional plugins configuration */
  plugins: [],
});
