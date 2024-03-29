const merge = require('webpack-merge')
const webpack = require('webpack')
const BrotliGzipPlugin = require('brotli-gzip-webpack-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const common = require('./webpack.common.js')

module.exports = merge(common, {
  devtool: '',
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /node_modules/,
          chunks: 'initial',
          name: 'vendor',
          enforce: true,
        },
      },
    },
  },
  plugins: [
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
    new OptimizeCssAssetsPlugin({
      cssProcessorOptions: {
        safe: true,
        discardComments: { removeAll: true },
      },
    }),
    new BrotliGzipPlugin({
      asset: '[path].br[query]',
      algorithm: 'brotli',
      test: /\.(js|css|html|svg)$/,
      threshold: 10240,
      minRatio: 0.8,
      quality: 11,
    }),
    new BrotliGzipPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.(js|css|html|svg)$/,
      threshold: 10240,
      minRatio: 0.8,
    }),
  ],
})
