// src/components/Sidebar.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/logo.png"

const Sidebar: React.FC = () => {
  return (
    <div className="w-64 h-screen bg-[#f5e6cc] text-[#A37853] fixed top-0 left-0">
      <div className='ml-20 m-4 flex items-center'>

      <img className='h-14' src={logo} alt="logo" />
      </div>
      <nav className="mt-4">
        <ul>
          <li className="p-4 ">
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li className="p-4 ">
            <Link to="/orders">Orders</Link>
          </li>
          <li className="p-4 ">
            <Link to="/products">Products</Link>
          </li>
          <li className="p-4 ">
            <Link to="/users">Users</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;