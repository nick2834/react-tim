import React from 'react';
import { Layout, List, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import RouterMap from '../../routes/RouterMap';
import Searchbar from '../../components/Searchbar';
const { Content, Sider } = Layout;


class Last extends React.Component {
    state = { chatList: [] }
    componentDidMount() {
        this.$http.get('/chat/list', {}).then(({ result }) => {
            console.log(result)
            if (result && result.list) {
                this.setState({
                    chatList: result.list
                })
            }
        })
    }
    render() {
        const { chatList } = this.state
        return (
            <div className="main_container">
                <Layout>
                    <Sider theme="light" width={240}>
                        <Searchbar />
                        <List
                            itemLayout="horizontal"
                            dataSource={chatList}
                            renderItem={item => (
                                <Link to={`/last/message?id=${item.id}`}>
                                    <List.Item>
                                        <List.Item.Meta avatar={<Avatar src={item.avatar} />} title={item.nickname} description={item.lastMsg} />
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