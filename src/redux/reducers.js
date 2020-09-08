import { combineReducers } from "redux";
//初始用户数据
import { userInfo, chatData } from "./state";

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
function chat(state = chatData, action) {
  switch (action.type) {
    case "UPDATE_CHAT":
      return { ...state, ...action.data };
    default:
      return chatData;
  }
}

export default combineReducers({
  user,
  chat,
});
