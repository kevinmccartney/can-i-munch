import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPizzaSlice } from '@fortawesome/free-solid-svg-icons'
import { Link, withRouter } from 'react-router-dom';
import { Location } from 'history'; 

import './app-shell.css';

const AppShellComponent: React.FC<{
  location: Location
}> = ({ children, location }) => {
  const { pathname } = location;

  return (
    <Layout className="h-screen">
      <Layout.Header className="flex">
        <Link to="/" className="flex items-center mr-4">
        <FontAwesomeIcon
          icon={faPizzaSlice}
          size="lg"
          className="text-white h-5 w-5"
        />
        </Link>
        <Menu className="flex-grow-1" mode="horizontal" theme="dark" style={{ lineHeight: '64px' }}>
          <Menu.Item
            className={pathname === '/messaging' ? 'main-menu-item__active' : 'main-menu-item'}
          >
            <Link to="/messaging">
              Messaging
            </Link>
          </Menu.Item>
          <Menu.Item
            className={pathname === '/users' ? 'main-menu-item__active' : 'main-menu-item'}
          >
            <Link to="/users">
              Users
            </Link>
          </Menu.Item>
        </Menu>
        <Link to="/account/profile">
          <Icon type="user" className="text-white" style={{ fontSize: '24px' }}/>
        </Link>
      </Layout.Header>
      <Layout className="p-6">
        {children}
      </Layout>
      <Layout.Footer className="p-6">footer</Layout.Footer>
    </Layout>
  );
}

const AppShell = withRouter(AppShellComponent);

export { AppShell };
