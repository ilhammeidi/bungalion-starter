import React, { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import DashboardTemplate from '../components/Templates/Dashboard';

const Dashboard = lazy(() => import('../pages/dashboard'));
const Dashboard2 = lazy(() => import('../pages/dashboard2'));
const Error = lazy(() => import('../pages/error'));

function Application() {
  return (
    <div>
      <DashboardTemplate>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/v2" element={<Dashboard2 />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </DashboardTemplate>
    </div>
  );
}

export default Application;
