"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Http =
/*#__PURE__*/
function () {
  function Http() {
    _classCallCheck(this, Http);
  }

  _createClass(Http, null, [{
    key: "get",
    value: function get(api, param) {
      return new Promise(function (res, rej) {
        _axios["default"].get(api, param).then(function (result) {
          res(result);
        });
      });
    }
  }, {
    key: "post",
    value: function post(api, params) {
      return new Promise(function (res, rej) {
        _axios["default"].post(api, params).then(function (result) {
          res(result);
        });
      });
    }
  }, {
    key: "delete",
    value: function _delete(api, params) {
      return new Promise(function (res, rej) {
        _axios["default"]["delete"](api, params).then(function (result) {
          res(result);
        });
      });
    }
  }, {
    key: "put",
    value: function put(api, param) {
      return new Promise(function (res, rej) {
        _axios["default"].put(api, param).then(function (result) {
          res(result);
        });
      });
    }
  }]);

  return Http;
}();

var _default = Http;
exports["default"] = _default;