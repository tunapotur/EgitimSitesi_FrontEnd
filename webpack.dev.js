const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');

module.exports = merge(commonConfig, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    index: 'index.html',
    // host: '192.168.1.120',
    port: 3200,
    // Hot Module Replacement. Bu ayar hız kazandırabilir
    // Pug dosyasında değişiklik yapıldığında sayfa yenilenmek zorunda
    hot: true,
    // hotOnly: true,
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              url: false,
            },
          },
          {
            loader: 'resolve-url-loader',
            options: {
              debug: true,
              sourceMap: true,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              implementation: require('sass'),
            },
          },
        ],
      },
    ],
  },
});
