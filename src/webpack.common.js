const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const path = require('path')

const isProduction = process.env.NODE_ENV === 'production'
const fileNameTemplate = ext => (isProduction
  ? `[name].[chunkhash].min.${ext}`
  : `[name].${ext}`)

const SRC_DIR = __dirname
const CLIENT_BUILD_DIR = path.resolve(__dirname, '../dist/client')
const CLIENT_DIR = path.resolve(SRC_DIR, 'client')

module.exports = {
  mode: isProduction ? 'production' : 'development',
  devtool: 'inline-source-map',
  devServer: { historyApiFallback: true },
  entry: [
    path.resolve(CLIENT_DIR, 'main.js'),
  ],
  output: {
    path: CLIENT_BUILD_DIR,
    filename: fileNameTemplate('js'),
    publicPath: '/',
  },
  resolve: { extensions: ['.js', '.jsx'] },
  plugins: [
    new webpack.EnvironmentPlugin({ NODE_ENV: 'development' }),
    new HtmlWebpackPlugin({
      template: path.resolve(CLIENT_DIR, 'index.html'),
      filename: 'index.html',
      inject: 'body',
      favicon: path.resolve(CLIENT_DIR, '_content/favicon.ico'),
    }),
    new ExtractTextPlugin(fileNameTemplate('css')),
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: [SRC_DIR],
        loader: 'babel-loader',
        options: { envName: 'client' },
      },
      {
        test: /\.(scss|css)?$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader!sass-loader',
        }),
      },
      {
        test: /\.(ico|png|gif|ttf|otf|eot|svg|woff(2)?)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader?name=[name].[ext]',
        options: {
          name: isProduction
            ? 'content/[name].[hash].[ext]'
            : 'content/[name].[ext]',
        },
      },
    ],
  },
}
