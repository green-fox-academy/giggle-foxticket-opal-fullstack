import React from 'react';
import './Button.styles.scss';

const Button = ({ children, type, onClick }) => {
  return (
    <button onClick={onClick} type={type}>
      {children}
    </button>
  );
};

export default Button;
