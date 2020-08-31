import React from 'react';
import './index.less';
import MessageHead from './head'
class Message extends React.Component {
    state = {
        title:"Web前端（JS|React|Angular|V"
    }
    componentDidMount() {
        const { params: { id } } = this.props.match;
    }
    render() {
        const {title} = this.state;
        return (
            <div className="message">
                <MessageHead title={title}/>
                <div className="message_body"></div>
                <div className="message_foot"></div>
            </div>
        )
    }
}

export default Message