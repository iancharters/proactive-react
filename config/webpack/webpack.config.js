// =============================================================================
// Import modules
// =============================================================================
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const paths = {
  BUILD: path.resolve(__dirname, '../../build'),
  ENTRY: path.resolve(__dirname, '../../entry'),
  SRC: path.resolve(__dirname, '../../src'),
};

// Webpack configuration
module.exports = {
  entry: path.join(paths.ENTRY, 'index.js'),
  output: {
    path: paths.BUILD,
    filename: 'bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(paths.ENTRY, 'index.html'),
    }),
    new ExtractTextPlugin('bundle.css'),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          use: 'css-loader',
        }),
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]',
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
