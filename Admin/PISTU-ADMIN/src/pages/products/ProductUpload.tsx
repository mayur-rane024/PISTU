// src/pages/Products/ProductUpload.tsx
import React from 'react';
import AdminLayout from '../../layout/AdminLayout';

const ProductUpload: React.FC = () => {
  return (
    <AdminLayout>
      <h1 className="text-3xl font-bold mb-6">Upload Product</h1>
      <form className="bg-white p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="name">
            Product Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Enter product name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="price">
            Price
          </label>
          <input
            type="number"
            id="price"
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Enter price"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="image">
            Product Image
          </label>
          <input
            type="file"
            id="image"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Upload Product
        </button>
      </form>
    </AdminLayout>
  );
};

export default ProductUpload;