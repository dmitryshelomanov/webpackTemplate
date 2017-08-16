module.exports = function () { 
  return {
    module: {
      rules: [
        {
          test: /\.(jpg|png|gif|svg)$/,
          loader: 'file-loader',
          options: {
            name: 'images/[name].[ext]'
          }
        }
      ]
    }
  }
}