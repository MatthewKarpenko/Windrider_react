const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require('copy-webpack-plugin');
const path = require('path')

module.exports = {
  entry: ["babel-polyfill", "./app/index.js"],
  output: {
      path: path.join(__dirname, "/dist"),
      filename: "index.js"
  },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        {
          test: /\.html$/,
          use: [
            {
              loader: "html-loader"
            }
          ]
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
          test: /\.(gif|png|jpe?g|svg)$/i,
          use: [
              'url-loader',
              'file-loader'
          
          ],
      }
      ]
    },
    devServer: {
      historyApiFallback: true,
      contentBase: path.join(__dirname, 'dist'),
      compress: true,
      port: 9000
  },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./app/index.html"
    }),
    new CopyPlugin([
        { from: path.join(__dirname, "/app/assets/"), to: path.join(__dirname, "/dist/assets/") }
    ])
    ] 
      
    
  };