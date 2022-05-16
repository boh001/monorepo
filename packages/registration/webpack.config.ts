const HtmlWebpackPlugin = require('html-webpack-plugin');
const container = require('webpack').container;
const path = require('path');

module.exports = {
  entry: './src/index',
  mode: 'development',
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    port: 3001,
  },
  output: {
    publicPath: 'auto',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-react', '@babel/preset-typescript'],
        },
      },
    ],
  },
  plugins: [
    new container.ModuleFederationPlugin({
      name: 'landing',
      exposes: {
        './App': "./src/App"
      },
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};