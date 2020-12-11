import React from "react";

const NotFound = (props) => {
  if (props.staticContext) {
    props.staticContext.NotFound = true;
  }
  return <div>404,page not found</div>;
};

export default NotFound;
