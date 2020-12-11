import express from "express";
import { render } from "./utils";
import getStore from "../store/";
import { matchRoutes } from "react-router-config";
import routes from "../Routes";
import proxy from "express-http-proxy";

const app = express();
const port = 3000;

app.use(express.static("public"));

// 我这个地方函数执行没有输出
app.use(
  "/api",
  proxy("localhost:3010", {
    proxyReqPathResolver: function (req) {
      return "/api" + req.url;
    },
  })
);

app.get("*", (req, res) => {
  const store = getStore();

  // 拿到异步数据
  // 需要结合路由地址，从相应的组件中的loadData中获取数据
  const matchedRoutes = matchRoutes(routes, req.path);

  //保存选中route的loadData方法
  const promises = [];

  matchedRoutes.forEach((item) => {
    if (item.route.loadData) {
      const promise = new Promise((resolve, reject) => {
        item.route.loadData(store).then(resolve).catch(resolve);
      });
      promises.push(promise);
    }
  });
  Promise.all(promises).then(() => {
    const context = {};
    const html = render(req, store, routes, context);
    if (context.NotFound) {
      res.status(404);
    }
    res.send(html);
  });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
