import * as webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin'
import 'webpack-dev-server'

const config: webpack.Configuration = {
  entry: './src/index',
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
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};

export default config