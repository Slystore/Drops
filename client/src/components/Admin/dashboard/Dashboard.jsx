import React from 'react';
import FeatureTop from './FeatureTop';
import Chart from './Chart';
import ChartTwo from './ChartTwo';
const Dashboard = () => {
    return (
        <div style={{ overflow: 'scroll', overflowX: 'hidden', height: '100vh' }}>
            <FeatureTop />
            <Chart />
            <ChartTwo />
        </div>
    );
};

export default Dashboard;