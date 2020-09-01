import React from 'react';
import { Layout } from 'antd';
import "./index.less";
import { RightOutlined, LeftOutlined } from '@ant-design/icons';
const { Sider } = Layout;
class Sidebar extends React.Component {
    state = {
        isCollapsed: true
    }
    showSidebar = () => {
        this.setState({ isCollapsed: !this.state.isCollapsed })
    }
    render() {
        const { isCollapsed } = this.state
        return (
            <Sider width={240} theme="light" className="sidebar" collapsedWidth="0" collapsed={isCollapsed} onClick={(e) => e.stopPropagation()}>
                <div className={['close_bar', isCollapsed ? 'show_bar' : 'hide_bar'].join(' ')} onClick={() => this.showSidebar()}>
                    {
                        isCollapsed ?
                            <RightOutlined /> :
                            <LeftOutlined />
                    }
                </div>
                <div className="notice">
                    <div className="head">
                        <span>群公告</span>
                        <RightOutlined />
                    </div>
                    <div className="content">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, facere, autem, libero soluta quae nostrum voluptates ullam ipsa maiores eius voluptatem nulla impedit ab nam! Reprehenderit quidem doloribus consequatur illo!
                    </div>
                </div>
            </Sider>
        )
    }
}

export default Sidebar