const webpack = require('webpack')
const CompressionPlugin = require("compression-webpack-plugin")
module.exports = {
    publicPath: './',
    outputDir: 'docs',
    devServer: {
        port: 8080,
        disableHostCheck: true
    }
}
