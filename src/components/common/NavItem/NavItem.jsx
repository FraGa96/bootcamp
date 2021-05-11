import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavItem.css';

const NavItem = (props) => {
  const classNames = ['Nav-item'];

  if (props.vertical) {
    classNames.push('Nav-item-vertical');
  }

  return (
    <NavLink 
      to={props.path} 
      exact={props.exact}
      className={classNames.join(' ')}
      activeClassName="Nav-item-selected"
    >
      {props.title}
    </NavLink>
  );
};

export default NavItem;