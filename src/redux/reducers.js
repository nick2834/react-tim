import { combineReducers } from "redux";
//初始用户数据
import { userInfo } from "./state";

function user(state = userInfo, action) {
  switch (action.type) {
    case "INIT_USER":
      return { ...state, ...action.data };
    case "UPDATE_USER":
      return { ...state, ...action.data };
    default:
      return userInfo;
  }
}
export default combineReducers({
  user,
});