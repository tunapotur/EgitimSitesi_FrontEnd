const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackTagsPlugin = require('html-webpack-tags-plugin');

const src_plugin_list = [
  { from: 'src/img', to: 'img/' },
  // { from: 'src/fonts', to: 'fonts/' },
  {
    from: 'node_modules/simplebar/dist/simplebar.min.js',
    to: 'vendors',
  },
  {
    from: 'node_modules/simplebar/dist/simplebar.min.css',
    to: 'vendors',
  },
  {
    from: 'node_modules/vanillajs-datepicker/dist/js/datepicker-full.min.js',
    to: 'vendors',
  },
  // {
  //   from: 'node_modules/vanillajs-datepicker/dist/css/datepicker.min.css',
  //   to: 'vendors',
  // },
  {
    from: 'node_modules/vanillajs-datepicker/dist/js/locales/tr.js',
    to: 'vendors',
  },
];

const html_tags_plugin = [
  'vendors/simplebar.min.js',
  'vendors/simplebar.min.css',
  'vendors/datepicker-full.min.js',
  // 'vendors/datepicker.min.css',
  'vendors/tr.js',
];
const data = require('./src/templates/data/data');
const fs = require('fs');

// işlenecek pug dosyalarını hazırlayan fonksiyon
const pugFiles = templateDir => {
  // template klasörü altındaki tüm elemanlar alınıyor
  const dirList = fs.readdirSync(path.resolve(__dirname, templateDir));

  const templateFiles = [];

  // elemanların içinden sadece pug dosyaları alınıyor
  dirList.forEach(item => {
    if (item.match(/\.pug$/)) {
      // Sadece dosya isimleri alınıyor
      const filename = item.substring(0, item.length - 4);

      // pug dosyaları için HtmlWebpackPlugin nesneleri oluşturuluyor
      templateFiles.push(
        new HtmlWebpackPlugin({
          template: templateDir + '/' + filename + '.pug',
          filename: filename + '.html',
          minify: {
            // bu satır eklenmeyince hata veriyor
            collapseWhitespace: true,
          },
        })
      );
    }
  });

  return templateFiles;
};

module.exports = {
  entry: ['@babel/polyfill', './src/js/index.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/bundle.js',
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: src_plugin_list,
    }),
    ...pugFiles('./src/templates'),
    new HtmlWebpackTagsPlugin({
      tags: html_tags_plugin,
      append: false,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.pug$/i,
        use: [
          {
            loader: 'pug-loader',
            options: {
              pretty: true,
            },
          },
          {
            loader: 'pug-html-loader',
            options: { data: data },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'img/js_images',
            },
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/',
            },
          },
        ],
      },
    ],
  },
};
