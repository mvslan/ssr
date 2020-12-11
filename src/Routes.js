import React from "react";
import Home from "./containers/home/";
import Login from "./containers/login";
import App from "./App";
import NotFound from "./notFound";

// 修改代码
export default [
  {
    path: "/",
    component: App,
    key: "home",
    routes: [
      {
        path: "/",
        component: Home,
        exact: true,
        loadData: Home.loadData,
        key: "home",
      },
      {
        path: "/login",
        component: Login,
        exact: true,
        key: "login",
      },
      {
        component: NotFound,
      },
    ],
  },
];
