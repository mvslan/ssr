import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { renderRoutes } from "react-router-config";

export const render = (req, store, routes, context) => {
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path} context={context}>
        <div>{renderRoutes(routes)}</div>
      </StaticRouter>
    </Provider>
  );

  const cssStr = context.css ? context.css : "";

  return `<html>
        <title>index页面</title>
        <style>${cssStr}</style>
        <body>
        <div id="root"> ${content}</div>
        <script>
        window.context={
          state:${JSON.stringify(store.getState())},
          cssStr:${JSON.stringify(cssStr)}
        }
        </script>
        <script src="/main.js"></script>
        </body>
    </html>`;
};
