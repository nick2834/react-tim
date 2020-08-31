/**
 * 路由组件
 * components 有许多指向是一样的，是页面中存在共用部分
 * 这样做之后显得部分代码冗余，后续找到更好的方式再做替换
 */
import Login from '../views/Login';
import Last from '../views/Last';
import Contacts from '../views/Contacts';
import Files from '../views/Files';

const Routers = [
    {
        path: "/last",
        redirect: true
    },
    {
        path: '/last',
        component: Last,
        auth: true,
        meta: {
            title: "信息",
            icon: require('../assets/images/last_normal.png'),
            activeIcon: require('../assets/images/last_selected.png')
        },
        childred: [
            {
                path: "/last/message",
                meta: {
                    title: "聊天"
                },
            }
        ]
    },
    {
        path: '/contacts',
        component: Contacts,
        auth: true,
        meta: {
            title: "联系人",
            icon: require('../assets/images/contacts_normal.png'),
            activeIcon: require('../assets/images/contacts_selected.png')
        }
    },
    {
        path: '/files',
        component: Files,
        auth: true,
        meta: {
            title: "文件",
            icon: require('../assets/images/file_normal.png'),
            activeIcon: require('../assets/images/file_selected.png')
        }
    },
    {
        path: '/login',
        component: Login,
        meta: {
            title: "信息"
        }
    }
]

export default Routers