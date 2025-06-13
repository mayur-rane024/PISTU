// src/pages/Dashboard.tsx
import React from 'react';
import AdminLayout from '../layout/AdminLayout';

const Dashboard: React.FC = () => {
  return (
    <AdminLayout>
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold">Total Orders</h2>
          <p className="mt-2 text-3xl font-bold">150</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold">Total Products</h2>
          <p className="mt-2 text-3xl font-bold">50</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold">Total Users</h2>
          <p className="mt-2 text-3xl font-bold">30</p>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Dashboard;