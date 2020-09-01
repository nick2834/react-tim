import React from 'react';
import './index.less'
import { Input, Dropdown, Menu } from 'antd';
import { SearchOutlined, PlusOutlined } from '@ant-design/icons';
class Searchbar extends React.Component {
    menu = () => {
        return (
            <Menu>
                <Menu.Item key="0"> 加好友/加群 </Menu.Item>
                <Menu.Item key="1"> 创建群聊 </Menu.Item>
            </Menu>
        )
    }
    render() {
        return (
            <div className="search_container">
                <Input placeholder="搜索" prefix={<SearchOutlined />} />
                <Dropdown overlay={this.menu} trigger={['click']}>
                    <span className="add_plus" onClick={e => e.preventDefault()}>
                        <PlusOutlined />
                    </span>
                </Dropdown>

            </div>
        )
    }
}

export default Searchbar