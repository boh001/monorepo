import * as path from 'path';
import * as webpack from 'webpack';
import 'webpack-dev-server'
import pkg from "../package.json"
import merge from "webpack-merge";
import commonConfig from "./webpack.config.common"

const PORT = 3000

const config: webpack.Configuration = {
  mode: 'development',
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    port: PORT,
  },
  output: {
    chunkFilename: '[contenthash].js',
    clean: true,
    publicPath: `http://localhost:${PORT}/`,
  },
  plugins: [
    new webpack.container.ModuleFederationPlugin({
      name: 'container',
      remotes: {
        landing: "landing@http://localhost:3001/remoteEntry.js"
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