import React from 'react';
import { AppstoreOutlined,MenuOutlined } from '@ant-design/icons';
const SubMenus = [
    {
        title:"更多",
        icon:<AppstoreOutlined />,
        activeIcon:require('../../assets/images/more_selected.png'),
        children:[
            {
                title:"空间",
                icon:require('../../assets/images/qzone.png')
            },
            {
                title:"日程",
                icon:require('../../assets/images/calender.png')
            },
            {
                title:"待办",
                icon:require('../../assets/images/todo.png')
            },
            {
                title:"收藏",
                icon:require('../../assets/images/favorite.png')
            },
            {
                title:"邮箱",
                icon:require('../../assets/images/mail.png')
            }
        ]
    },
    {
        title:"菜单",
        icon:<MenuOutlined />,
        activeIcon:require('../../assets/images/main_selected.png'),
        children:[
            {
                title:"窗口置顶",
            },
            // {
            //     isDivier: true
            // },
            {
                title:"设置",
                path:""
            },
            {
                title:"安全",
                path:"",
                children:[]
            },
            {
                title:"帮助",
                path:"",
                children:[]
            },
            {
                title:"备份与恢复",
                path:""
            },
            {
                title:"升级",
                path:""
            },
            {
                title:"反馈问题",
                path:""
            },
            // {
            //     isDivier: true
            // },
            {
                title:"切换账号",
                path:""
            },
            {
                title:"退出",
                path:""
            },
        ]
    }
]
export default SubMenus