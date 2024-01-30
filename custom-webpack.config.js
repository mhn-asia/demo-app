const CompressionPlugin = require("compression-webpack-plugin");
const BrotliPlugin = require("brotli-webpack-plugin");

module.exports = {
  plugins: [
    new CompressionPlugin({
      algorithm: "gzip",
    }),
    new BrotliPlugin({
      asset: "[path].br",
      threshold: 0,
      minRatio: 0.8,
    }),
  ],
};
