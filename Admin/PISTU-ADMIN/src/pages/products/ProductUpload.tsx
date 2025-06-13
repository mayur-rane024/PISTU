import React, { useState } from "react";

interface ProductForm {
  name: string;
  category: string;
  price: number;
  stock: number;
}

const ProductUpload: React.FC = () => {
  const [formData, setFormData] = useState<ProductForm>({
    name: "",
    category: "",
    price: 0,
    stock: 0,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: name === "price" || name === "stock" ? +value : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitting:", formData);
    // TODO: Call backend API here
    alert("Product uploaded successfully!");
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Upload New Product</h2>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
        <div>
          <label className="block font-medium">Product Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded px-3 py-2 w-full"
          />
        </div>

        <div>
          <label className="block font-medium">Category</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded px-3 py-2 w-full"
          >
            <option value="">Select Category</option>
            <option value="Wellness">Wellness</option>
            <option value="Fashion">Fashion</option>
            <option value="Groceries">Groceries</option>
          </select>
        </div>

        <div>
          <label className="block font-medium">Price (₹)</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded px-3 py-2 w-full"
          />
        </div>

        <div>
          <label className="block font-medium">Stock</label>
          <input
            type="number"
            name="stock"
            value={formData.stock}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded px-3 py-2 w-full"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Upload Product
        </button>
      </form>
    </div>
  );
};

export default ProductUpload;
