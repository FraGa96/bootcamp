import React from 'react';
import NavItem from '../NavItem/NavItem';
import './Sidebar.css';

const Sidebar = (props) => (
  <div className="Sidebar">
    {props.items.map(item => (
      <NavItem
        exact={item.exact}
        key={item.title}
        path={item.path}
        title={item.title}
        vertical
      />
    ))}
  </div>
);

export default Sidebar;