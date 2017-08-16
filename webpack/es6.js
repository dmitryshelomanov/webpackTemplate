module.exports = () => { 
  return {
    module: {
      rules: [
        {
          test: /\.js$/,
          loader: 'babel-loader',
          query: {
            presets: ['es2015']
          }
        }
      ]
    }
  }
};