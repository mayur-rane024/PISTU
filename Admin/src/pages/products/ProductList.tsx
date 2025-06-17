// src/pages/Products/ProductList.tsx
import React from 'react';
import AdminLayout from '../../layout/AdminLayout';
import ProductsPage from './ProductsPage';

const ProductList: React.FC = () => {
  return (
    <AdminLayout>
      <h1 className="text-3xl font-bold mb-6">Products</h1>
      <ProductsPage/>
    </AdminLayout>
  );
};

export default ProductList;