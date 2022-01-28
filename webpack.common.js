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
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        use: "babel-loader"
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