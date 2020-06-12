import React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from "react-router-dom";
import { DollarCircleOutlined, AntCloudOutlined, WechatOutlined } from '@ant-design/icons';

const { Sider } = Layout;


const Sidebar = (props) => {
  let selected = ''
  switch(window.location.pathname) {
    case '/youknowme':
      selected = '2'
      break;
    case '/mydream':
      selected = '3'
      break
    default:
      selected = '1'
  }
  return (
    <Sider trigger={null} collapsible collapsed={props.collapsed}>
      <div className="logo" />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={[selected]}>
        <Menu.Item key="1" icon={<DollarCircleOutlined />}>
          <Link to="/">Millionaire</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<WechatOutlined />}>
          <Link to="/youknowme">Know Me</Link>
        </Menu.Item>
        <Menu.Item key="3" icon={<AntCloudOutlined />}>
          <Link to="/mydream">My Dream</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  )
}
 export default Sidebar