import React from 'react';

class MessageHead extends React.Component {
    render() {
        const { title } = this.props
        return (
            <div className="message_head">
                <span className="title">{title}</span>
            </div>
        )
    }
}

export default MessageHead