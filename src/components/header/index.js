import React from 'react';
import { Menu } from 'antd';


import s from './header.module.css';

const HeaderBlock = () => {
  return (
    <div className={s.header}>
      <Menu mode="horizontal">
        <Menu.Item key="1">Top</Menu.Item>
        <Menu.Item key="2">Contacts</Menu.Item>
        <Menu.Item key="3">About Us</Menu.Item>
        <Menu.Item key="4">Make an order</Menu.Item>
      </Menu>
    </div>
  );
};

export default HeaderBlock;