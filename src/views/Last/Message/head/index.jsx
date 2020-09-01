import React from 'react';
import { SettingOutlined, AppstoreOutlined, BookOutlined } from '@ant-design/icons';
class MessageHead extends React.Component {
    render() {
        const { title } = this.props
        return (
            <div className="message_head">
                <span className="title">{title}</span>
                <div className="icon_group">
                    <BookOutlined />
                    <AppstoreOutlined />
                    <SettingOutlined />
                </div>
            </div>
        )
    }
}

export default MessageHead