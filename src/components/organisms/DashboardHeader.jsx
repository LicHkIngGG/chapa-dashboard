import React from 'react';
import Title from '../atoms/Title';
import TabBar from '../molecules/TabBar';

const DashboardHeader = ({ tabs, activeTab, onTabChange }) => (
    <header className="dashboard-header">
        <Title text="Dashboard de Control de Acceso" level={1} />
        <TabBar tabs={tabs} activeTab={activeTab} onTabChange={onTabChange} />
    </header>
);

export default DashboardHeader;
