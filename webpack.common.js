const path = require(`path`);
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: `./src/index.ts`
  },
  output: {
    filename: `[name].bundle.js`,
    path: path.resolve(__dirname, `build`),
    clean: true,
  },
  target: ['web', 'es5'],
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-typescript"]
          }
        }
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin(
      {
        title: "Boilerplate",
      }
    ),
  ],
};