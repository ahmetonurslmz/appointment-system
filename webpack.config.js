const path = require('path')

module.exports = {
  entry: './assets/src/main.js',
  output: {
    path: path.join(__dirname, '/assets/src/dist/'),
    filename: 'bundle.js'
  },
  watch: true,
  mode: 'development',
  performance: {
    hints: false,
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          'presets': ['env', 'stage-0']
        }
      }
    ]
  }
}
