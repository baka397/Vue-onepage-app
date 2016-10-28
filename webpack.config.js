var webpack = require('webpack');

module.exports = {
  entry: './build/app.js', //入口文件
  output: {
    path: './public/javascripts/__build__/', //输出目录
    filename: 'app.min.js', //输出文件名
    publicPath: '/javascripts/__build__/' //文件中引用的输出文件链接地址
  },
  module: {
    loaders: [
      { //vue单页组件解析
        test: /\.vue$/,
        loader: 'vue'
      },
      { //babel解析器(es6语法，Object.assign语法)
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015'],
          plugins: ['transform-object-assign']
        }
      }
    ]
  },
  externals: {
    'Vue':'Vue'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': '"development"' //开发环境设置为development
      }
    })
  ]
}