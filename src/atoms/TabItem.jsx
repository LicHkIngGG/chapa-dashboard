import React from 'react';

const TabItem = ({ isActive, label, onClick }) => (
    <div
        className={`tab-item ${isActive ? 'active' : ''}`}
        onClick={onClick}
    >
        {label}
    </div>
);

export default TabItem;
