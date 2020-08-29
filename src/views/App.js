import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import '../styles/App.less';
import Navbar from '../components/Navbar';
import { Layout } from 'antd';
import Routers from '../routes'
const { Content } = Layout;
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Layout>
            <Navbar />
            <Layout className="site-layout">
              <Content
                className="site-layout-background"
              >
                {
                  Routers.map(item => {
                    return <Route key={item.path} path={item.path} exact component={item.component}></Route>
                  })
                }
              </Content>
            </Layout>
          </Layout>
        </div>
      </Router>
    );
  }
}

export default App;