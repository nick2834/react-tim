"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Login = _interopRequireDefault(require("../views/Login"));

var _Last = _interopRequireDefault(require("../views/Last"));

var _Contacts = _interopRequireDefault(require("../views/Contacts"));

var _Files = _interopRequireDefault(require("../views/Files"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * 路由组件
 * components 有许多指向是一样的，是页面中存在共用部分
 * 这样做之后显得部分代码冗余，后续找到更好的方式再做替换
 */
var Routers = [{
  path: '/',
  component: _Last["default"],
  auth: true,
  meta: {
    title: "信息",
    icon: require('../assets/images/last_hover.png'),
    activeIcon: require('../assets/images/last_selected.png')
  }
}, {
  path: '/contacts',
  component: _Contacts["default"],
  auth: true,
  meta: {
    title: "联系人",
    icon: require('../assets/images/contacts_hover.png'),
    activeIcon: require('../assets/images/contacts_selected.png')
  }
}, {
  path: '/files',
  component: _Files["default"],
  auth: true,
  meta: {
    title: "文件",
    icon: require('../assets/images/file_hover.png'),
    activeIcon: require('../assets/images/file_selected.png')
  }
}, {
  path: '/login',
  component: _Login["default"],
  meta: {
    title: "信息"
  }
}];
var _default = Routers;
exports["default"] = _default;