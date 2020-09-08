import React from 'react';
import { Layout, List, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import RouterMap from '@/routes/RouterMap';
import Searchbar from '@/components/Searchbar';
import Placeholder from '@/components/Placeholder';
import Todo from '@/components/Todo';
import { connect } from "react-redux";
import { updateChat } from "../../redux/actions";
import "./index.less";
const { Content, Sider } = Layout;

class Last extends React.Component {
    state = { chatList: [], hasTodo: true, chatId: null }
    componentDidMount() {
        console.log(this.props)
        this.$http.get('/chat/list', {}).then(({ result }) => {
            if (result && result.list) {
                this.setState({
                    chatList: result.list
                })
            }
        })
    }
    closeTodo = () => {
        this.setState({ hasTodo: false })
    }
    todoContainer = () => {
        if (this.state.hasTodo) {
            return <Todo onClose={() => this.closeTodo()} />
        }
    }
    selectChat = (chatId) => {
        this.props.updateChat({ chatId })
    }
    chatStyle = () => {
        const { hasTodo } = this.state;
        return {
            height: hasTodo ? 'calc(100vh - 107px)' : 'calc(100vh - 67px)'
        }
    }
    render() {
        const { chatList } = this.state;
        const { chatData: { chatId } } = this.props;
        return (
            <div className="main_container">
                <Layout>
                    <Sider theme="light" width={240}>
                        <Searchbar />
                        {this.todoContainer()}
                        <List
                            className="chat-list"
                            style={this.chatStyle()}
                            dataSource={chatList}
                            renderItem={item => (
                                <Link to={`/last/message/${item.id}`} onClick={() => this.selectChat(item.id)} className={chatId === item.id ? 'active' : ''}>
                                    <List.Item>
                                        <List.Item.Meta avatar={<Avatar size={40} src={item.avatar} />} title={item.nickname} description={item.lastMsg} />
                                    </List.Item>
                                </Link>
                            )}
                        />
                    </Sider>
                    <Content>
                        {
                            chatId ? <RouterMap /> : <Placeholder />
                        }
                    </Content>
                </Layout>
            </div>
        )
    }
}


export default connect((state) => ({ chatData: state.chat }), { updateChat })(Last)