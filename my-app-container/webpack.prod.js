const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('./package.json');
const Dotenv = require('dotenv-webpack');

const containerDomain = process.env.REACT_APP_CONTAINER_DOMAIN;

const profileDomain = process.env.REACT_APP_PROFILE_DOMAIN;
const reportDomain = process.env.REACT_APP_REPORT_DOMAIN;

const prodConfig = {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js',
    publicPath: `${containerDomain}/`,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'container',
      remotes: {
        profile: `profile@${profileDomain}/remoteEntry.js`,
        report: `report@${reportDomain}/remoteEntry.js`,
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
      path: `.env`
    })
  ],
}

module.exports = merge(commonConfig, prodConfig);