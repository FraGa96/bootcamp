import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = (props) => (
  <button
    className={`Button ${props.className}`}
    onClick={props.onClick}
    type={props.submit ? 'submit' : 'button'}
  >
    {props.children}
  </button>
);


Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Button;
