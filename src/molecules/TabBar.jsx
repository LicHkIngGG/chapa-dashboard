import React from 'react';
import TabItem from '../atoms/TabItem';

const TabBar = ({ tabs, activeTab, onTabChange }) => (
    <div className="tab-bar">
        {tabs.map((tab) => (
            <TabItem
                key={tab.id}
                isActive={tab.id === activeTab}
                label={tab.label}
                onClick={() => onTabChange(tab.id)}
            />
        ))}
    </div>
);

export default TabBar;
