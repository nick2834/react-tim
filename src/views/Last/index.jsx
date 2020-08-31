import React from 'react';
import { Layout, List, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import RouterMap from '../../routes/RouterMap';
import Searchbar from '../../components/Searchbar';
import Todo from '../../components/Todo';
import "./index.less";
const { Content, Sider } = Layout;



class Last extends React.Component {
    state = { chatList: [], hasTodo: true }
    componentDidMount() {
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
    chatStyle = () => {
        const { hasTodo } = this.state;
        return {
            height: hasTodo ? 'calc(100vh - 107px)' : 'calc(100vh - 67px)'
        }
    }
    render() {
        const { chatList } = this.state
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
                                <Link to={`/last/message/${item.id}`}>
                                    <List.Item>
                                        <List.Item.Meta avatar={<Avatar size={40} src={item.avatar} />} title={item.nickname} description={item.lastMsg} />
                                    </List.Item>
                                </Link>
                            )}
                        />
                    </Sider>
                    <Content>
                        <RouterMap />
                    </Content>
                </Layout>
            </div>
        )
    }
}


export default Last