import React from 'react';
import './index.less';
import MessageHead from './head';
import Sidebar from './Sidebar';
import { Layout } from 'antd';

const { Content } = Layout;
class Message extends React.Component {
    state = {
        title: "Web前端（JS|React|Angular|V"
    }
    componentDidMount() {
        const { params: { id } } = this.props.match;
    }
    render() {
        const { title } = this.state;
        return (
            <div className="message">
                <MessageHead title={title} />
                <Layout className="message_body">
                    <Layout>
                        <Content>

                        </Content>
                    </Layout>
                    <Sidebar></Sidebar>
                </Layout>
            </div>
        )
    }
}

export default Message