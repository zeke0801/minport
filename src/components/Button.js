import React from 'react';
import './CSS/Button.css'; 

const Button = ({ href, children, className = '' }) => {
  return (
    <a href={href} className={`btn ${className}`} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
};

export default Button;
