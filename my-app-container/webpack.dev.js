const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('./package.json');
const Dotenv = require('dotenv-webpack');

const devConfig = {
  mode: 'development',
  output: {
    publicPath: '/',
  },
  devServer: {
    port: 3030,
    historyApiFallback: {
      disableDotRule: true,
      historyApiFallback: true,
    },
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'container',
      remotes: {
        report: `report@http://localhost:3031/remoteEntry.js`,
        profile: `profile@http://localhost:3033/remoteEntry.js`,
      },
      shared: {
        ...packageJson.dependencies,
        react: {
          singleton: true,
          requiredVersion: packageJson.dependencies.react,
        },
        'react-dom': {
          singleton: true,
          requiredVersion: packageJson.dependencies['react-dom'],
        }
      }
    }),
    new Dotenv({
      path: `./environments/.env.${process.env.NODE_ENV || 'dev'}`
    })
  ],
}

module.exports = merge(commonConfig, devConfig);