const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: './src/index',
  mode: 'production',
  module: {
    rules: [{
      test: /\.js$/,
      use: ['babel-loader']
    },
    {
      test: /\.(scss|css)$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
    }]
  },
  output: {
    path: path.resolve('../../web-dev/Portfolio.SethGreco/gallery'),
    filename: "bundle.js"
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public", "index.html")
    })],
}