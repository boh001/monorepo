import * as path from 'path';
import * as webpack from 'webpack';
import 'webpack-dev-server'
import merge from "webpack-merge";
import commonConfig from "./webpack.config.common"
import pkg from "../package.json"

const PORT = 3002

const config: webpack.Configuration = {
  mode: 'development',
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    port: PORT,
  },
  output: {
    chunkFilename: '[name].[contenthash].js',
    clean: true,
    publicPath: `http://localhost:${PORT}/`,
  },
  plugins: [
    new webpack.container.ModuleFederationPlugin({
      name: 'registration',
      filename: 'remoteEntry.js',
      exposes: {
        './App': "./src/App"
      },
      shared: Object.fromEntries(Object.entries(pkg.dependencies).map(deps => ([
        [deps[0]], {
          singleton: true,
          eager: true,
          requiredVersion: deps[1]
        }
      ])))
    })],
};

export default merge(config, commonConfig)