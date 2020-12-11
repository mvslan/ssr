const express = require("express");

const app = express();

const list = {
  success: true,
  list: [
    {
      id: 1,
      title: "title1",
    },
    {
      id: 2,
      title: "title2",
    },
    {
      id: 3,
      title: "title3",
    },
  ],
};

app.get("/", (req, res, next) => {
  console.log("next");
  next();
});

app.get("/api/list", (req, res) => {
  res.json(list);
});

app.listen(3010, () => {
  console.log("node服务器启动成功");
});
