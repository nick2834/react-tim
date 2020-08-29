import React from 'react';
import { Layout } from 'antd';
const { Content, Sider } = Layout;
class Contacts extends React.Component{
    render(){
        return(
            <div className="main_container">
                <Layout>
                    <Sider theme="light" width={240}>
                        123131
                    </Sider>
                    <Content>

                    </Content>
                </Layout>
            </div>
        )
    }
}


export default Contacts