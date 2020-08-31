import React from 'react';

class Message extends React.Component {
    componentDidMount() {
        const { params: { id } } = this.props.match;
    }
    componentDidUpdate(){
        const { params: { id } } = this.props.match;
    }
    render() {
        return (
            <div>Message</div>
        )
    }
}

export default Message