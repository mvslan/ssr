// 服务器端不需要把path所有内容都打包，而浏览器端需要，所以target是node
const path = require("path");

const baseConfig = {
  mode: "development",
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
        },
      },
    ],
  },
};

module.exports = baseConfig;
