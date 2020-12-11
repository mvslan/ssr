import { CHANGE_LIST } from "./constants";

const defaultState = {
  name: "yang",
  newList: [],
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_LIST:
      return {
        ...state,
        newList: action.list,
      };
    default:
      return state;
  }
};

export default reducer;
