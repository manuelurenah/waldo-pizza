import React from 'react';

const Button = ({ customClass, text, type }) => (
  <a
    href="#top"
    className={`btn btn-${type} ${customClass}`}
  >
    {text}
  </a>
);

export default Button;
