"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _redux = require("redux");

var _reduxThunk = _interopRequireDefault(require("redux-thunk"));

var _reduxDevtoolsExtension = require("redux-devtools-extension");

var _reducers = _interopRequireDefault(require("./reducers"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * redux最核心的管理对象模块
 * redux-thunk 异步支持
 * redux-devtools-extension 浏览器调试插件
 * 最终向外暴露 store 对象（即 reducers 中定义的对象）
 */
// 向外暴露 store 对象
var _default = (0, _redux.createStore)(_reducers["default"], (0, _reduxDevtoolsExtension.composeWithDevTools)((0, _redux.applyMiddleware)(_reduxThunk["default"])));

exports["default"] = _default;