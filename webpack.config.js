/* eslint-disable import/no-extraneous-dependencies */

const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

/** @type import('webpack').Configuration */
module.exports = {
  entry: {
    main: './src/index.jsx',
  },
  output: {
    path: path.resolve('dist'),
    filename: '[name].bundle.[hash].js',
    chunkFilename: '[name].bundle.[hash].js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /^node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/env', '@babel/react'],
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '~': path.resolve('src'),
    },
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
  devServer: {
    contentBase: path.resolve('static'),
    historyApiFallback: true,
    open: true,
  },
};
