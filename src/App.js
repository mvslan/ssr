import React from "react";
import Home from "./components/Header";
import { renderRoutes } from "react-router-config";

const App = (props) => {
  return (
    <div>
      <Home />
      {renderRoutes(props.route.routes)}
    </div>
  );
};

export default App;
