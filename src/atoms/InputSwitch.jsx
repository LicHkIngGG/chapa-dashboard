import React from 'react';

const InputSwitch = ({ isOn, onToggle, label }) => (
    <div className="switch-container">
        <label>{label}</label>
        <input
            type="checkbox"
            checked={isOn}
            onChange={onToggle}
            className="toggle-switch"
        />
    </div>
);

export default InputSwitch;
