import React from 'react';
import './Button.styles.scss';

const styles = [
  'btn--primary--solid',
  'btn--warning--solid',
  'btn--danger--solid',
  'btn--success--solid',
  'btn--primary--outline',
  'btn--warning--outline',
  'btn--danger--outline',
  'btn--success--outline',
];

const sizes = ['btn--medium', 'btn--large'];

const Button = ({ children, type, onClick, buttonStyle, buttonSize }) => {
  const checkButtonStyle = styles.includes(buttonStyle)
    ? buttonStyle
    : styles[0];

  const checkButtonSize = sizes.includes(buttonSize) ? buttonSize : sizes[0];

  return (
    <button
      className={`btn ${checkButtonStyle} ${checkButtonSize}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
