"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateUser = exports.initUser = void 0;

var INIT = function INIT(value) {
  return {
    type: "INIT_USER",
    data: value
  };
};

var UPDATE = function UPDATE(value) {
  return {
    type: "UPDATE_USER",
    data: value
  };
}; //用户初始化


var initUser = function initUser(value) {
  return function (dispatch) {
    dispatch(INIT(value));
  };
}; //修改用户在线状态


exports.initUser = initUser;

var updateUser = function updateUser(value) {
  return function (dispatch) {
    dispatch(UPDATE(value));
  };
};

exports.updateUser = updateUser;