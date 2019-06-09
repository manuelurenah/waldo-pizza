import React from 'react';

const Button = ({ customClass, onButtonClick, text, type, ...otherProps }) => (
  <button
    onClick={onButtonClick}
    className={`btn btn-${type} ${customClass}`}
  >
    {text}
  </button>
);

export default Button;
