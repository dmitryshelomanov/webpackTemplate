const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');

const pug = require('./webpack/pug');
const devserver = require('./webpack/devserver');
const sass = require('./webpack/sass');
const css = require('./webpack/css');
const extract = require('./webpack/css.extract');
const uglify = require('./webpack/js.uglify');
const images = require('./webpack/images');
const es6 = require('./webpack/es6');

const PATH = {
  src: path.join(__dirname, 'src'),
  dest: path.join(__dirname, 'dist')
};

const common = merge([
  {
    entry: {
      'index': `${PATH.src}/views/index/index`,
      'blog': `${PATH.src}/views/blog/blog`
    },
    output: {
      path: PATH.dest,
      filename: 'js/[name].js'
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: 'index.html',
        chunks: ['index', 'common'],
        template: PATH.src + '/views/index/index.pug'
      }),
      new HtmlWebpackPlugin({
        filename:  'blog.html',
        chunks: ['blog', 'common'],
        template: PATH.src + '/views/blog/blog.pug'
      }),
      new webpack.optimize.CommonsChunkPlugin({
        name: 'common'
      })
    ]
  },
  pug(),
  images(),
  es6()
]);

module.exports = env => {
  if (env === "production") { 
    return merge([
      common,
      extract(),
      uglify()
    ]);
  }
  if (env === "development") { 
    return merge([
      common,
      devserver(),
      sass(),
      css()
    ]);
  }
};