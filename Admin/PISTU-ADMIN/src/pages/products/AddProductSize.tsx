// src/pages/Products/AddProductSize.tsx
import React from 'react';
import AdminLayout from '../../layout/AdminLayout';

const AddProductSize: React.FC = () => {
  return (
    <AdminLayout>
      <h1 className="text-3xl font-bold mb-6">Add Product Size</h1>
      <form className="bg-white p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="size">
            Size
          </label>
          <input
            type="text"
            id="size"
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Enter size (e.g., Small, Medium, Large)"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add Size
        </button>
      </form>
    </AdminLayout>
  );
};

export default AddProductSize;