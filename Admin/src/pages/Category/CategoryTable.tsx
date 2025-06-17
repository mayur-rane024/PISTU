import React, { useState } from 'react';
import AddCategoryPopup from './AddCategoryPopup';
import AdminLayout from '../../layout/AdminLayout';

interface Category {
  id: number;
  name: string;
  image: string;
}

const CategoryTable: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([
    { id: 1, name: 'Fashion', image: 'fashion-icon.png' },
    { id: 2, name: 'Electronics', image: 'electronics-icon.png' },
    { id: 3, name: 'Bags', image: 'bags-icon.png' },
    { id: 4, name: 'Footwear', image: 'footwear-icon.png' },
    { id: 5, name: 'Groceries', image: 'groceries-icon.png' },
    { id: 6, name: 'Beauty', image: 'beauty-icon.png' },
  ]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleAddCategory = (name: string, image: File | null) => {
    if (name && image) {
      const newCategory: Category = {
        id: categories.length + 1,
        name,
        image: URL.createObjectURL(image),
      };
      setCategories([...categories, newCategory]);
    }
    setIsPopupOpen(false);
  };

  const handleEdit = (id: number) => {
    console.log(`Edit category with id: ${id}`);
  };

  const handleDelete = (id: number) => {
    setCategories(categories.filter(category => category.id !== id));
  };

  return (
    <AdminLayout>
    <div className="p-4 bg-gray-100 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Category List</h2>
        <button
          onClick={() => setIsPopupOpen(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Add Category
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2 text-left">Image</th>
              <th className="px-4 py-2 text-left">Category Name</th>
              <th className="px-4 py-2 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {categories.map(category => (
              <tr key={category.id} className="border-t">
                <td className="px-4 py-2">
                  <img src={category.image} alt={category.name} className="w-8 h-8" />
                </td>
                <td className="px-4 py-2">{category.name}</td>
                <td className="px-4 py-2 flex space-x-2">
                  <button
                    onClick={() => handleEdit(category.id)}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    ✏️
                  </button>
                  <button
                    onClick={() => handleDelete(category.id)}
                    className="text-red-600 hover:text-red-800"
                  >
                    🗑️
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4 flex justify-between items-center">
        <div>
          Rows per page: 
          <select className="ml-2 border rounded p-1">
            <option>10</option>
            <option>20</option>
            <option>50</option>
          </select>
        </div>
        <div>
          1-{categories.length} of {categories.length}
        </div>
      </div>

      {isPopupOpen && (
        <AddCategoryPopup
          onClose={() => setIsPopupOpen(false)}
          onAdd={handleAddCategory}
        />
      )}
    </div>
    </AdminLayout>
  );
};

export default CategoryTable;