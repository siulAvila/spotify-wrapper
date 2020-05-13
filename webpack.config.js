const { join } = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: './src/main',
  mode: 'development',
  target: 'node',
  devtool: 'source-map',

  externals: [nodeExternals()],
  output: {
    path: join(__dirname, 'dist'),
    libraryTarget: 'umd',
    library: 'spotify-wrapper',
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
};
