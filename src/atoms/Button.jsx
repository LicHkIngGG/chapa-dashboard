import React from 'react';

const Button = ({ text, onClick, icon, styleType = 'primary' }) => (
    <button className={`btn btn-${styleType}`} onClick={onClick}>
        {icon && <span className="btn-icon">{icon}</span>}
        {text}
    </button>
);

export default Button;
