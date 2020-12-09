import React from 'react';
import { Layout, Menu } from 'antd';

import CarouselBlock from "../carousel/carousel";

const { Header, Content, Footer } = Layout;

export default function BaseLayout() {
  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal">
          <Menu.Item key="1">Top</Menu.Item>
          <Menu.Item key="2">Contacts</Menu.Item>
          <Menu.Item key="3">About Us</Menu.Item>
          <Menu.Item key="4">Make an order</Menu.Item>
        </Menu>
      </Header>
        <CarouselBlock />
      <Content style={{ padding: '0 50px', minHeight: '80vh' }}>
        <div className="site-layout-content">Content</div>
      </Content>
      <Footer style={{ textAlign: 'center', backgroundColor: '#333' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
  );
}