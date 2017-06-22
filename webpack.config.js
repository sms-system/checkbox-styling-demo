const fs = require("fs")
const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const WebpackHtmlGeneratorPlugin = require('webpack-html-generator-plugin')

module.exports = {
  entry: './src/style.styl',
  output: {
    path: path.resolve(__dirname, './docs'),
    publicPath: ''
  },
  module: {
    rules: [
      {
        test: /\.styl$/,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: 'css-loader'
            },
            {
              loader: 'postcss-loader'
            },
            {
              loader: 'stylus-loader'
            },
          ]
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("style.css"),
    new WebpackHtmlGeneratorPlugin.WebpackHtmlGeneratorPlugin({
      template: fs.readFileSync('./src/index.html', 'utf8'),
      compress: false
    }),
  ]
}
