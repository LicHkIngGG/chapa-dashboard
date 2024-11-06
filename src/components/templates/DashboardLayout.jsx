import React, { useState } from 'react';
import DashboardHeader from '../components/organisms/DashboardHeader';
import MainContent from '../components/organisms/MainContent';

const DashboardLayout = ({ children, tabs }) => {
    const [activeTab, setActiveTab] = useState(tabs[0].id);

    return (
        <div className="dashboard-layout">
            <DashboardHeader tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
            <MainContent>{children}</MainContent>
        </div>
    );
};

export default DashboardLayout;
