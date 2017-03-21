var path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
     path: path.resolve(__dirname, "dist"),
     filename: "app.bundle.js",
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: "babel-loader"
    },
    {
      test: /\.css$/,
      loader: "style-loader!css-loader"
    },
    {
      test:/\.less$/,
      loader: "style-loader!css-loader!less-loader"
    }]
  },
  devtool: "#source-map"
};