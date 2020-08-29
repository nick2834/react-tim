import React from 'react';
import { Layout } from 'antd';
import { Link, Route } from 'react-router-dom';
import RouterMap from '../../routes/RouterMap';

const { Content, Sider } = Layout;
class Last extends React.Component {
    render() {
        return (
            <div className="main_container">
                <Layout>
                    <Sider theme="light" width={240}>
                        <ul className="item">
                            <li>
                                <Link to="/last/message">跳转Message</Link>
                            </li>
                        </ul>
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