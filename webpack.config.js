var baseDir = __dirname + '/api/static/js';
var BundleTracker = require('webpack-bundle-tracker');

module.exports = {
  context: baseDir + '/src',
  entry: baseDir + '/tapingo.jsx',
  output: {
    path: baseDir + '/dist',
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },

  resolve: {
    //tells webpack where to look for modules
    modules: ['node_modules'],
    //extensions that should be used to resolve modules
    extensions: ['', '.js', '.jsx']
  },

  plugins: [
    new BundleTracker({ filename: './webpack-stats.json' })
  ]
};
