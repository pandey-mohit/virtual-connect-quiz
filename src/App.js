import React from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { Layout } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined
} from '@ant-design/icons';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Sidebar from './Sidebar';
import Millionaire from './Millionaire';
import Know from './Know';
import Dream from './Dream';
import Scoreboard from './Scoreboard';


const { Header, Content } = Layout;


class App extends React.Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    const { collapsed } = this.state
    return (
      <Router>
        <Layout style={{ maxHeight: '100vh' }}>
          <Sidebar collapsed={collapsed} />
          <Layout className="site-layout">
            <Header className="site-layout-background" style={{ padding: 0 }}>
              {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                className: 'trigger',
                onClick: this.toggle,
              })}
              <span className="heading">Funday</span>
            </Header>
            <Content
              className="site-layout-background"
              style={{
                margin: '24px 16px',
                padding: 24,
                minHeight: 'calc(100vh - 112px)',
                flex: 'none'
              }}
            >
              <Switch>
                <Route exact path="/"><Millionaire /></Route>
                <Route exact path="/youknowme"><Know /></Route>
                <Route exact path="/mydream"><Dream /></Route>
              </Switch>
            </Content>
          </Layout>
          <Scoreboard />
        </Layout>
      </Router>
    );
  }
}

export default App