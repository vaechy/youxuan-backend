
import React, { Suspense } from "react";
import './index.styl';
import { Layout, Menu, Breadcrumb } from 'antd';
import { Avatar } from '@/components/heder/avatar'
import { Link, Outlet  } from "react-router-dom";
import {
  ShopOutlined,
  PieChartOutlined,
  FileOutlined,
  SettingOutlined
} from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const Container = () => {
  return (
    <>
     <Layout style={{ minHeight: '100vh' }}>
     <Sider trigger={null} collapsible >
          <div className="logo" />
        <Menu theme="dark"  mode="inline" >
          <Menu.Item key="dashboard" icon={<PieChartOutlined />}>
            <Link to="/dashboard">首页</Link>
          </Menu.Item>
          <SubMenu key="show" icon={< ShopOutlined />} title="商品管理">
            <Menu.Item key="details">
              <Link to="/show/details">详情</Link>
            </Menu.Item>
            <Menu.Item key="category">
              <Link to="/show/category">分类</Link>
            </Menu.Item>
          </SubMenu>
          <SubMenu  key="system" icon={< SettingOutlined />} title="系统管理">
            <Menu.Item key="user">
              <Link to="/system/user">用户管理</Link>
            </Menu.Item>
            <Menu.Item key="rule">
              <Link to="/system/rule">角色管理</Link>
            </Menu.Item>
            <Menu.Item key="power">
              <Link to="/system/power">权限管理</Link>
            </Menu.Item>
            <Menu.Item key="menu">
              <Link to="/system/menu">菜单管理</Link>    
            </Menu.Item>
          </SubMenu>
          <Menu.Item key="about" icon={<FileOutlined />}>
            <Link to="/about">关于</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
            <Avatar></Avatar>
        </Header>
        <Content style={{ margin: '0 16px',overflow:'initial' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              <Suspense fallback="">
                <Outlet />
              </Suspense>
            </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </Layout> 
    </>  
  );
}

export { Container }
