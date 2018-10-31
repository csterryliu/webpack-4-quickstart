// this is the configuration file for webpack 4

// in webpack 4, there's no need to spicify the entry/output/build mode
// you can specify the build mode on the command line (the scripts section in package.json)
// however, you still need a configuration file to set the loaders and plugins for webpack

// in order to let webpack process HTML files, you need to enable html-webpack-plugin and html-loader
// in order to let webpack process CSS files, you need to enable mini-css-extract-plugin and css-loader
// in order to compile the ES6 js code into the format which most browsers understand, you must use Babel as the loader for js and jsx files

// jsx is the things from React. but you don't have to to anything here except Babel. Since React is a kind of library, just make sure you have react and react-dom in package.json

const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
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
                loader: "html-loader",
                options: { minimize: true }
              }
            ]
        },
        {
            test: /\.css$/,
            use: [MiniCssExtractPlugin.loader, "css-loader"]
        }
      ]
    },
    plugins: [
        new HtmlWebPackPlugin({
          template: "./src/index.html",
          filename: "./index.html"
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        })
      ]
  };