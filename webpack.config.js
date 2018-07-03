const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    index:'./src/index/js/index.js'
  },
  devtool:'inline-source-map',
  devServer:{
    contentBase : './dist'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.bundle.js'
  },
  plugins:[
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      filename:'index.html',
      template:'./src/index/index.html',
      chunks:['index'] 
    })
  ],
  module:{
    rules:[
      {
        test: /\.js$/,
        exclude: /node_modules/, 
        loader: "babel-loader"
      },
      {
        test: /\.scss$/,
        use: [
            "style-loader",
            "css-loader",
            "sass-loader" 
        ]
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test:/\.(png|svg|jpg|gif)$/,
        use:[
          {
            loader:'file-loader',
            options:{
              name: '[name][hash].[ext]',
              outputPath: 'images/'
            }
          }
          
        ]
      },
      {
        test: /\.(html|htm|)$/,
        use: [
          'html-withimg-loader'
        ]
      }
    ]
  }
};