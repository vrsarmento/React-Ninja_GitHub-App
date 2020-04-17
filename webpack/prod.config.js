'use strict'

const webpack = require('webpack')
const validate = require('webpack-validator')

const common = require('./common')

const HtmlPlugin = require('html-webpack-plugin')
const ExtractTextplugin = require('extract-text-webpack-plugin')

const crp = new ExtractTextplugin('crp.css')
const styles = new ExtractTextplugin('[name]-[hash].css')

module.exports = validate({
  entry: common.entry,

  output: common.output,

  plugins: [
    crp,
    styles,

    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),

    new HtmlPlugin(common.htmlPluginConfig('template.html')),

    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false }
    }),

    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin()
  ],

  module: {
    preLoaders: [common.standardPreLoader],

    loaders: [
      common.jsLoader, 
      {
        test: /\.css$/,
        exclude: /node_modules|(search|style)\.css/,
        include: /src/,
        loader: styles.extract('style', 'css')
      },
      {
        test: /(search|style)\.css$/,
        exclude: /node_modules/,
        include: /src/,
        loader: crp.extract('style', 'css')
      }
    ]
  },

  resolve: common.resolve
})
