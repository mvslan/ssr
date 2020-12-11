const { merge } = require("webpack-merge");
const path = require("path");
const baseConfig = require("./webpack.base.js");

const clientConfig = {
  entry: "./src/client/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "public"),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true,
              importLoaders: 1,
            },
          },
        ],
      },
    ],
  },
};

module.exports = merge(baseConfig, clientConfig);
