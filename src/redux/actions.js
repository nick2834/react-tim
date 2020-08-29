const INIT = (value) => ({ type: "INIT_USER", data: value });
const UPDATE = (value) => ({ type: "UPDATE_USER", data: value });
//用户初始化
export const initUser = (value) =>{
  return (dispatch) => {
    dispatch(INIT(value));
  };
}
//修改用户在线状态
export const updateUser = (value) => {
  return (dispatch) => {
    dispatch(UPDATE(value));
  };
};