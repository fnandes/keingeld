const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    mainFields: ['main', 'module', 'browser'],
  },
  entry: path.resolve(__dirname, '../src/renderer/app.tsx'),
  //target: 'electron-renderer',
  devtool: 'source-map',
  module: {
    rules: [{
      test: /\.(tsx?)/i,
      exclude: /node_modules/,
      use: 'babel-loader'
    }, {
      test: /.css$/i,
      exclude: /node_modules/,
      use: ['style-loader', 'css-loader', 'postcss-loader']
    }, {
      test: /\.(ttf|eot|woff2?)$/,
      type: 'asset/resource',
    }, {
      test: /\.svg$/,
      type: 'asset/source'
    },
    {
      test: /\.(jpg|png|ico)$/,
      type: 'asset/resource'
    }]
  },
  devServer: {
    static: {
      directory: path.join(__dirname, '../dist/renderer'),
      publicPath: '/'
    },
    historyApiFallback: true,
    compress: true,
    port: 4000
  },
  output: {
    libraryTarget: 'global',
    globalObject: 'this',
    path: path.resolve(__dirname, '../dist/renderer'),
    filename: '[name].js'
  },
  plugins: [
    new HtmlWebpackPlugin(),
    new MiniCssExtractPlugin()
  ]
}