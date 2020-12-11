// 服务器端不需要把path所有内容都打包，而浏览器端需要，所以target是node
const nodeExternals = require("webpack-node-externals"); // 保证不会把express这种node使用的包打包进去
const { merge } = require("webpack-merge");
const path = require("path");
const baseConfig = require("./webpack.base.js");

const serverConfig = {
  target: "node",
  entry: "./src/server/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build"),
  },
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          "isomorphic-style-loader",
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
module.exports = merge(baseConfig, serverConfig);
