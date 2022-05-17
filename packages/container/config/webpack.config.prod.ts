import * as path from 'path';
import * as webpack from 'webpack';
import 'webpack-dev-server'
import pkg from "../package.json"
import merge from "webpack-merge";
import commonConfig from "./webpack.config.common"

const config: webpack.Configuration = {
  mode: 'production',
  output: {
    chunkFilename: 'name.[contenthash].js',
    clean: true,
    publicPath: '/container/latest/',
  },
  plugins: [
    new webpack.container.ModuleFederationPlugin({
      name: 'container',
      remotes: {
        landing: "landing@http://localhost:8000/landing/latest/remoteEntry.js"
      },
      shared: Object.fromEntries(Object.entries(pkg.dependencies).map(deps => ([
        [deps[0]], {
          singleton: true,
          eager: true,
          requiredVersion: deps[1]
        }
      ])))
    }),
  ],
};

export default merge(config, commonConfig)