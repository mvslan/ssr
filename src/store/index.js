import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import homeReducer from "../containers/home/store/";
import serverAxios from "../server/request";
import clientAxios from "../client/request";

const reducer = combineReducers({
  home: homeReducer,
});

const getStore = () => {
  return createStore(
    reducer,
    applyMiddleware(thunk.withExtraArgument(serverAxios))
  );
};

export const getClientStore = () => {
  // console.log(JSON.parse(window.context.cssStr));

  const defaultState = window.context.state;
  return createStore(
    reducer,
    defaultState,
    applyMiddleware(thunk.withExtraArgument(clientAxios))
  );
};

export default getStore;
