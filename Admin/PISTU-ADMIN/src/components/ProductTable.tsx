// src/components/ProductTable.tsx
import React from 'react';

const ProductTable: React.FC = () => {
  const products = [
    { id: 1, name: 'Product A', price: 29.99, stock: 100 },
    { id: 2, name: 'Product B', price: 49.99, stock: 50 },
    { id: 3, name: 'Product C', price: 19.99, stock: 200 },
  ];

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="py-2 px-4 border-b">ID</th>
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">Price</th>
            <th className="py-2 px-4 border-b">Stock</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id} className="hover:bg-gray-50">
              <td className="py-2 px-4 border-b">{product.id}</td>
              <td className="py-2 px-4 border-b">{product.name}</td>
              <td className="py-2 px-4 border-b">${product.price}</td>
              <td className="py-2 px-4 border-b">{product.stock}</td>
              <td className="py-2 px-4 border-b">
                <button className="text-blue-500 hover:underline">Edit</button>
                <button className="ml-2 text-red-500 hover:underline">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;