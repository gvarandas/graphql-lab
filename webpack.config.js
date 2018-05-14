const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin({}),
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: './index.html',
      inject: true,
      compile: true,
      title: "GraphQL Lab",
    }),
  ],
  mode: 'development',
  devServer: {
    contentBase: './dist',
    host: "0.0.0.0",
    compress: true,
    port: 4200,
    disableHostCheck: true,
    historyApiFallback: true,
    hot: true,
  },
};