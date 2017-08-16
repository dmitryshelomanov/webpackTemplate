module.exports = (paths) => {
  return {
    module: {
      rules: [
        {
          test: /\.sass$/,
          include: paths,
          use: [
            'style-loader',
            'css-loader',
            'sass-loader'
          ]
        }
      ]
    }
  }
};