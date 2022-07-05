const path = require('path')

const baseConfig = {
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  devtool: 'source-map',
  module: {
    rules: [{
      test: /\.(js|ts|tsx)$/,
      exclude: /node_modules/,
      use: 'ts-loader'
    }]
  },
  output: {
    libraryTarget: 'global',
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].js'
  }
}

module.exports = [
  {
    ...baseConfig,
    entry: path.resolve(__dirname, '../src/main/index.ts'),
    target: 'electron-main',
  }, {
    ...baseConfig,
    entry: {
      preload: path.resolve(__dirname, '../src/main/preload.ts')
    },
    target: 'electron-preload'
  }
]