import React from 'react';
import './index.less'
import { Input } from 'antd';
import { SearchOutlined, PlusOutlined } from '@ant-design/icons';
class Searchbar extends React.Component {
    render() {
        return (
            <div className="search_container">
                <Input placeholder="搜索" prefix={<SearchOutlined />}  />
                <span className="add_plus">
                    <PlusOutlined />
                </span>
            </div>
        )
    }
}

export default Searchbar