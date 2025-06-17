import React, { useState } from "react";
import AddBannerPopup from "./AddBannerPopup";
import AdminLayout from "../../layout/AdminLayout";

interface Category {
  id: number;
  image: string;
}

const HomeBanner: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([
    { id: 1, image: "fashion-icon.png" },
    { id: 2, image: "electronics-icon.png" },
    { id: 3, image: "bags-icon.png" },
    { id: 4, image: "footwear-icon.png" },
    { id: 5, image: "groceries-icon.png" },
    { id: 6, image: "beauty-icon.png" },
  ]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleAddCategory = (_name: string, image: File | null) => {
    if (image) {
      const newCategory: Category = {
        id: categories.length + 1,
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
    setCategories(categories.filter((category) => category.id !== id));
  };

  return (
    <AdminLayout>
      <div className="p-4 bg-gray-100 rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Home Banner</h2>
          <button
            onClick={() => setIsPopupOpen(true)}
            className="mt-4 px-6 py-3 bg-transparent text-[#3A2A1B] border-[#3A2A1B] rounded-4xl border hover:bg-[#d7b788] transition cursor-pointer shadow-md"
          >
            Add Category
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-4 py-2 text-left">Image</th>
                <th className="px-4 py-2 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {categories.map((category) => (
                <tr key={category.id} className="border-t">
                  <td className="px-4 py-2">
                    <img
                      src={category.image}
                      alt={`Category ${category.id}`}
                      className="w-8 h-8"
                    />
                  </td>
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
          <AddBannerPopup
            onClose={() => setIsPopupOpen(false)}
            onAdd={handleAddCategory}
          />
        )}
      </div>
    </AdminLayout>
  );
};

export default HomeBanner;
