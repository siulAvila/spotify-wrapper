const { join } = require('path');

module.exports = {
  entry: './src/main',
  mode: 'production',
  devtool: 'source-map',

  output: {
    path: join(__dirname, 'dist'),
    libraryTarget: 'umd',
    library: 'spotify-wrapper-test-tdd',
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
