import React from 'react';
import './index.less'
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
class Searchbar extends React.Component {
    render() {
        return (
            <div className="search_container">
                <Input
                    placeholder="Enter your username"
                    prefix={<SearchOutlined className="site-form-item-icon" />}
                />
            </div>
        )
    }
}

export default Searchbar