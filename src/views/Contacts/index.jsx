import React from 'react';
import { Layout } from 'antd';
import RouterMap from '../../routes/RouterMap';
import Searchbar from '../../components/Searchbar'
const { Content, Sider } = Layout;
class Contacts extends React.Component{
    render(){
        return(
            <div className="main_container">
                <Layout>
                    <Sider theme="light" width={240}>
                        <Searchbar />
                    </Sider>
                    <Content>
                        <RouterMap />
                    </Content>
                </Layout>
            </div>
        )
    }
}


export default Contacts