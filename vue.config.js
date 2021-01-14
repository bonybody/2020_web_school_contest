const webpack = require('webpack')
const CompressionPlugin = require("compression-webpack-plugin")
module.exports = {
    publicPath: './',
    outputDir: 'docs',
    devServer: {
        host: '0.0.0.0',
        port: 8080,
        disableHostCheck: true,
        watchOptions: {
            poll: true
        }
    }
}