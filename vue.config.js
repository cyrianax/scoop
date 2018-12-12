const Path = require('path')

module.exports = {
  baseUrl: '/app',
  outputDir: 'static/app',
  pages: {
    index: {
      entry: 'app/main.js',
      template: 'app/asset/template/index.html',
      filename: 'index.html',
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    }
  },
  devServer: {
    port: 3000
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@asset': Path.resolve(__dirname, './app/asset'),
        '@common': Path.resolve(__dirname, './app/common'),
        '@component': Path.resolve(__dirname, './app/component'),
        '@module': Path.resolve(__dirname, './app/module')
      }
    }
  }
}
