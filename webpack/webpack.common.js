const copy = require("copy-webpack-plugin");
const path = require("path");

const src = "../src/";

module.exports = {
  entry: {
    login: path.join(__dirname, `${src}login.ts`),
  },
  output: {
    path: path.join(__dirname, "../dist/js"),
    filename: "[name].js"
  },
  optimization: {
    splitChunks: {
      name: "vendor",
      chunks: "initial"
    }
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".js"]
  },
  plugins: [new copy([{ from: ".", to: "../" }], { context: "public" })]
};
