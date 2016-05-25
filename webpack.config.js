module.exports = {
  entry: './src/static/js/index.js',
  output: {
    filename: 'bundle.js',
    path: './public/js',
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: [/\.js$/],
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015'],
        },
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass'],
      }
    ],
  },
};
