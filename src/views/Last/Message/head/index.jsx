import React from 'react';
import { SettingOutlined, AppstoreOutlined, BookOutlined } from '@ant-design/icons';
import Layer from 'react-layui-layer';
class MessageHead extends React.Component {
    state = {
        isShow: false
    }
    showWindow = () => {
        this.setState({
            isShow: true
        });
    }
    onCancel = () => {
        this.setState({
            isShow: false
        });
    };
    render() {
        const { title, isShow } = this.props
        return (
            <div className="message_head">
                <span className="title" onClick={() => { this.showWindow() }}>{title}</span>
                <div className="icon_group">
                    <BookOutlined />
                    <AppstoreOutlined />
                    <SettingOutlined />
                </div>
                <Layer visible={isShow} onCancel={this.onCancel}>
                    <span>测试数据</span>
                </Layer>
            </div>
        )
    }
}

export default MessageHead