// src/pages/Products/ProductList.tsx
import React from 'react';
import AdminLayout from '../../layout/AdminLayout';
import ProductTable from '../../components/ProductTable';

const ProductList: React.FC = () => {
  return (
    <AdminLayout>
      <h1 className="text-3xl font-bold mb-6">Products</h1>
      <ProductTable />
    </AdminLayout>
  );
};

export default ProductList;