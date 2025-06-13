// src/layout/AdminLayout.tsx
import React from 'react';
import Sidebar from '../components/Sidebar';

const AdminLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="ml-64 flex-1 p-6 bg-gray-100 min-h-screen">
        {children}
      </div>
    </div>
  );
};

export default AdminLayout;