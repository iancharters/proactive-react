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

// const extractPlugin = new ExtractTextPlugin({
//   filename: './build/bundle.css',
// });

// Webpack configuration
module.exports = {
  entry: path.join(paths.ENTRY, 'index.js'),

  output: {
    path: paths.BUILD,
    filename: 'bundle.js',
  },

  devtool: 'sourcemap',

  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(paths.ENTRY, 'index.html'),
    }),
    new ExtractTextPlugin("bundle.css"),
  ],

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      // {
      //   test: /\.css$/,
      //   use: ['style-loader', 'css-loader'],
      // },
      // {
      //   test: /\.scss|sass|css$/i,
      //   use: extractPlugin.extract({
      //     use: ['css-loader', 'sass-loader'],
      //     fallback: 'style-loader',
      //   }),
      // },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              query: {
                modules: true,
                sourceMap: true,
                importLoaders: 2,
                localIdentName: '[name]__[local]___[hash:base64:5]',
              },
            },
            'sass-loader',
          ],
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
};
