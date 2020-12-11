import { CHANGE_LIST } from "./constants";

export const getHomeList = () => {
  return (dispatch, getState, axiosInstance) => {
    return axiosInstance.get("/api/list").then((res) => {
      const list = res.data.list;
      dispatch({
        type: CHANGE_LIST,
        list,
      });
    });
  };
};
