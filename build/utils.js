'use strict';

const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

exports.resolve = function(dir = '') {
  return path.join(__dirname, '..', dir);
};

exports.assetsPath = function(_path) {
  return path.posix.join('static', _path);
};

const devCssLoader = function(loader) {
  const loaders = [
    'vue-style-loader',
    {
      loader: 'css-loader',
      options: { sourceMap: true }
    },
    {
      loader: 'postcss-loader',
      options: { sourceMap: true }
    }
  ];

  if (loader) {
    loaders.push({
      loader: `${loader}-loader`,
      options: { sourceMap: true }
    });
  }

  return loaders;
};

const prodCssLoader = function(loader) {
  const loaders = ['css-loader', 'postcss-loader'];

  if (loader) {
    loaders.push(`${loader}-loader`);
  }

  return ExtractTextPlugin.extract({
    use: loaders,
    fallback: 'vue-style-loader'
  });
};

exports.cssLoader = process.env.NODE_ENV === 'production' ? prodCssLoader : devCssLoader;
