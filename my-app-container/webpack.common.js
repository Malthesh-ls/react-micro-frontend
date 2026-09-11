const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  module: {
    rules: [
      {
        test: /\.?js$/,
        type: 'javascript/auto',
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      },
      {
        test: /\.scss$/i,
        use: [
          {
            // Adds CSS to the DOM by injecting a `<style>` tag
            loader: 'style-loader'
          },
          {
            // Interprets `@import` and `url()` like `import/require()` and will resolve them
            loader: 'css-loader'
          },
          {
            // Loads a SASS/SCSS file and compiles it to CSS
            loader: 'sass-loader',
            options: {
              sassOptions: {
                // Silences warnings coming from node_modules
                quietDeps: true,
                // Specifically suppresses the new Sass if() deprecations
                silenceDeprecations: ["import", "color-functions"],
              },
            },
          }
        ]
      },
      {
        test: /\.(PNG|png|jpg|gif|ttf|eot|svg|ico|woff(2)?)(\?[a-z0-9]+)?$/,
        use: {
          loader: 'file-loader',
          options: {
            outputPath: 'images',
            name: '[name].[ext]'
          }
        }
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json', '.png', '.jpg', '.gif', '.svg']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html' //path.join(__dirname, "public", "index.html"),
    }),
  ],
};