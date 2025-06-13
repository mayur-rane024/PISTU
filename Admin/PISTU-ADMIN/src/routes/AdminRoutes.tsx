// src/routes/AdminRoutes.tsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AdminPanel from '../pages/AdminPanel';
import Dashboard from '../pages/Dashbord';
import OrderList from '../pages/Orders/OrderList';
import ProductList from '../pages/products/ProductList';
import AddProductSize from '../pages/products/AddProductSize';
import ProductUpload from '../pages/products/ProductUpload';
import UserList from '../pages/Users/UserList';

const AdminRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<AdminPanel />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/orders" element={<OrderList />} />
      <Route path="/products" element={<ProductList />} />
      <Route path="/products/add-size" element={<AddProductSize />} />
      <Route path="/products/upload" element={<ProductUpload />} />
      <Route path="/users" element={<UserList />} />
    </Routes>
  );
};

export default AdminRoutes;