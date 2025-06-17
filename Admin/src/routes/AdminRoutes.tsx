// src/routes/AdminRoutes.tsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AdminPanel from '../pages/AdminPanel';
import Dashboard from '../pages/Dashbord';
import OrderList from '../pages/Orders/OrderList';
import ProductList from '../pages/products/ProductList';
import UserList from '../pages/Users/UserList';
import CategoryTable from '../pages/Category/CategoryTable';
import HomeBanner from '../pages/HomeSlide/HomeBanner';


const AdminRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<AdminPanel />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/orders" element={<OrderList />} />
      <Route path="/category" element={<CategoryTable/>} />
      <Route path="/products" element={<ProductList />} />
      <Route path="/users" element={<UserList />} />
      <Route path="/Home" element={<HomeBanner />} />

    </Routes>
  );
};

export default AdminRoutes;