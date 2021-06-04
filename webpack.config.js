const path = require('path')
module.exports = {
  mode: "development",
  entry: "./src/main.tsx",
  output: {
    path: `${__dirname}/dist`,
    filename: "main.js"
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader"
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  },
  target: ["web", "es5"],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
  },
};