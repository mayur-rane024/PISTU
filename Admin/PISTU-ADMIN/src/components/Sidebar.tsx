// src/components/Sidebar.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar: React.FC = () => {
  return (
    <div className="w-64 h-screen bg-gray-800 text-white fixed top-0 left-0">
      <div className="p-4 text-2xl font-bold">Admin Panel</div>
      <nav className="mt-4">
        <ul>
          <li className="p-4 hover:bg-gray-700">
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li className="p-4 hover:bg-gray-700">
            <Link to="/orders">Orders</Link>
          </li>
          <li className="p-4 hover:bg-gray-700">
            <Link to="/products">Products</Link>
          </li>
          <li className="p-4 hover:bg-gray-700">
            <Link to="/users">Users</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;