import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { connect } from "react-redux";
import { initUser, updateUser } from "../../redux/actions";
import Routers from '../../routes';
import "./index.less";
import Cookies from 'js-cookie';
import SubMenu from './subMenu'
const { Sider } = Layout;
class Navbar extends React.Component {
    state = {
        activeId: 0,
        subActiveId: null,
        list: [
            {
                info: "在线",
                status: "Online",
            },
            {
                info: "忙碌",
                status: "Busy",
            },
            {
                info: "隐身",
                status: "Invisible",
            },
            {
                info: "离线",
                status: "Away",
            },
        ],
        isShow: false,
    }
    componentDidMount() {
        let activeId = Cookies.get('activeId')
        this.setState({
            activeId: activeId ? Number(activeId) : 0
        })
    }
    selectMenu = (index) => {
        this.setState({ activeId: Number(index), subActiveId: null }, () => {
            Cookies.set('activeId', Number(index))
        })
    }
    selectSubMenu = (index) => {
        this.setState({
            subActiveId: Number(index)
        })
    }
    showStatus = () => {
        this.setState({ isShow: !this.state.isShow })
    }
    changeStatus = (item) => {
        this.props.updateUser(item);
        this.setState({
            isShow: false,
        });
    }
    render() {
        let menuList = Routers.filter(item => item.auth);
        const path = this.props.location.pathname;
        const { activeId, list, isShow, subActiveId } = this.state;
        const { userInfo } = this.props;
        return (
            <Sider className="left-nav" defaultCollapsed="true" collapsedWidth="55">
                <div className="logo">
                    <img className="avatar" src={require('../../assets/images/avatar.jpg')} alt="" />
                    <img className="status_icon" src={require(`../../assets/images/${userInfo.status}.png`)} alt="" onClick={() => { this.showStatus() }} />
                    <ul className="status_list" style={{ display: isShow ? 'block' : 'none' }}>
                        {
                            list.map(item => {
                                return (
                                    <li className="item" key={item.status} onClick={() => this.changeStatus(item)}>
                                        <img className="icon" src={require(`../../assets/images/${item.status}.png`)} alt="" />
                                        <span className="info">{item.info}</span>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className="menus">
                    <Menu theme="light" mode="inline" selectedKeys={[path]}>
                        {
                            menuList.map((item, index) => {
                                return (
                                    <Menu.Item key={item.path} title={item.meta.title}>
                                        <Link to={item.path} onClick={() => this.selectMenu(index)} >
                                            <img className="menu_icon" src={activeId === index ? item.meta.activeIcon : item.meta.icon} alt="" />
                                        </Link>
                                    </Menu.Item>
                                )
                            })
                        }
                    </Menu>
                </div>

                <div className="menus sub_menu">
                    <Menu theme="light" mode="inline">
                        {
                            SubMenu.map((item, index) => {
                                return <Menu.Item key={index} title={item.title} onClick={() => this.selectSubMenu(index)}>
                                    <img className="menu_icon" src={subActiveId === index ? item.activeIcon : item.icon} alt="" />
                                </Menu.Item>
                            })
                        }
                    </Menu>
                </div>
            </Sider>
        )
    }
}

export default connect((state) => ({ userInfo: state.user }), {
    initUser,
    updateUser,
})(withRouter(Navbar));
// export default withRouter(Navbar)
