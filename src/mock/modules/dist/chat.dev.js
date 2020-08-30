"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getList = getList;

var _mockjs = _interopRequireDefault(require("mockjs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var avatars = ['https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png', // Alipay
'https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png', // Angular
'https://gw.alipayobjects.com/zos/rmsportal/dURIMkkrRFpPgTuzkwnB.png', // Ant Design
'https://gw.alipayobjects.com/zos/rmsportal/sfjbOqnsXXJgNCjCzDBL.png', // Ant Design Pro
'https://gw.alipayobjects.com/zos/rmsportal/siCrBXXhmvTQGWPNLBow.png', // Bootstrap
'https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png', // React
'https://gw.alipayobjects.com/zos/rmsportal/ComBAopevLwENQdKWiIn.png', // Vue
'https://gw.alipayobjects.com/zos/rmsportal/nxkuOJlFJuAUhzlMTCEe.png' // Webpack
]; // 生成数据列表

var chatList = [];

for (var i = 0; i < Math.floor(Math.random() * 20 + 1); i++) {
  // let csentence = Mock.mock('@csentence()')
  chatList.push(_mockjs["default"].mock({
    'id': '@id',
    "nickname": "@name",
    'lastMsg': "@cparagraph(10)",
    //标题
    // 'avatar': `@image(100x100, @color, #FFF, ${csentence.substr(0, 1)})`,
    "avatar": avatars[i % 8]
  }));
}

function getList() {
  return {
    // isOpen: false,
    url: '/chat/list',
    type: 'get',
    data: {
      'msg': 'success',
      'code': 0,
      'result': {
        'totalCount': chatList.length,
        'pageSize': 10,
        'totalPage': 1,
        'currPage': 1,
        'list': chatList
      }
    }
  };
}