import React from 'react';
import { elastic as Menu } from 'react-burger-menu';
import './Sidebar.css';

export default props => {
  return (
    <Menu isOpen={ true } >
      <a className="menu-item" href="/">
        Home
      </a>
      <a className="menu-item" href="/salads">
        Salads
      </a>
      <a className="menu-item" href="/pizzas">
        Pizzas
      </a>
      <a className="menu-item" href="/desserts">
        Desserts
      </a>
    </Menu>
  );
};