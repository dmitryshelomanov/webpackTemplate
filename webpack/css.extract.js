const ETWP = require('extract-text-webpack-plugin');

module.exports = (paths) => {
  return {
    module: {
      rules: [
        {
          test: /\.sass$/,
          include: paths,
          use: ETWP.extract({
            publicPath: '../',
            fallback: 'style-loader',
            use: [
              {
                loader: 'css-loader',
                options: {
                  minimize: true
                }
              },
              {
                loader: 'sass-loader'
              }
            ],
          })
        },
        {
          test: /\.css$/,
          include: paths,
          use: ETWP.extract({
            fallback: 'style-loader',
            use: [
              {
                loader: 'css-loader',
                options: {
                  minimize: true
                }
              }
            ]
          })
        }
      ]
    },
    plugins: [
      new ETWP('/css/[name].css')
    ]
  }
};