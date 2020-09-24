const webpack = require('webpack')
const CompressionPlugin = require("compression-webpack-plugin")
module.exports = {
    publicPath: './',
    outputDir: 'docs',
    // configureWebpack: {
    //     plugins: [
    //         new CompressionPlugin({
    //             test: /\.(css)|(js)$/,
    //             compressionOptions: {
    //                 level: 9
    //             }
    //         })
    //     ]
    // }
}
