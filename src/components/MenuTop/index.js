// export { default } from "./MenuTop";
import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';

function MenuTop() {
  return (
    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
      <Menu.Item key="1">
        <Link to="/">Home</Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link to="/new-movies">New Movies</Link>
      </Menu.Item>
      <Menu.Item key="3">
        <Link to="/popular">Popular</Link>
      </Menu.Item>
      <Menu.Item key="4">
        <Link to="/search">Search</Link>
      </Menu.Item>
    </Menu>
  );
}

export default MenuTop;
