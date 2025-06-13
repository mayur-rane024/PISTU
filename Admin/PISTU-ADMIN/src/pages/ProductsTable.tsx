import { useState } from 'react';

interface Product {
  id: number;
  name: string;
  category: string;
  subcategory: string;
  price: number;
  sales: number;
  stock: number;
  rating: number;
}

interface ProductsTableProps {
  products: Product[];
  onAddProduct: () => void;
}

const ProductsTable: React.FC<ProductsTableProps> = ({ products, onAddProduct }) => {
  const [categoryFilter, setCategoryFilter] = useState<string>("");
  const [subcategoryFilter, setSubcategoryFilter] = useState<string>("");
  const [thirdLevelFilter, setThirdLevelFilter] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Handle Filter Changes
  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategoryFilter(e.target.value);
    console.log("Category filter:", e.target.value);
  };

  const handleSubcategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSubcategoryFilter(e.target.value);
    console.log("Subcategory filter:", e.target.value);
  };

  const handleThirdLevelChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setThirdLevelFilter(e.target.value);
    console.log("Third Level filter:", e.target.value);
  };

  // Handle Search
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    console.log("Search query:", e.target.value);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Products</h2>
        <button
          onClick={onAddProduct}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          Add Product
        </button>
      </div>

      {/* Filters and Search */}
      <div className="flex flex-col md:flex-row gap-4 mb-4">
        <select
          value={categoryFilter}
          onChange={handleCategoryChange}
          className="border p-2 rounded-md"
        >
          <option value="">Category By</option>
          <option value="Footwear">Footwear</option>
        </select>
        <select
          value={subcategoryFilter}
          onChange={handleSubcategoryChange}
          className="border p-2 rounded-md"
        >
          <option value="">Sub Category By</option>
          <option value="Women Footwear">Women Footwear</option>
        </select>
        <select
          value={thirdLevelFilter}
          onChange={handleThirdLevelChange}
          className="border p-2 rounded-md"
        >
          <option value="">Third Level Sub Category By</option>
        </select>
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearch}
          placeholder="Search here..."
          className="border p-2 rounded-md flex-1"
        />
      </div>

      {/* Products Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2 text-left">
                <input type="checkbox" />
              </th>
              <th className="border p-2 text-left">PRODUCT</th>
              <th className="border p-2 text-left">CATEGORY</th>
              <th className="border p-2 text-left">SUB CATEGORY</th>
              <th className="border p-2 text-left">PRICE</th>
              <th className="border p-2 text-left">SALES</th>
              <th className="border p-2 text-left">STOCK</th>
              <th className="border p-2 text-left">RATING</th>
              <th className="border p-2 text-left">ACTION</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id} className="hover:bg-gray-100">
                <td className="border p-2">
                  <input type="checkbox" />
                </td>
                <td className="border p-2">{product.name}</td>
                <td className="border p-2">{product.category}</td>
                <td className="border p-2">{product.subcategory}</td>
                <td className="border p-2">₹{product.price.toFixed(2)}</td>
                <td className="border p-2">{product.sales} sale</td>
                <td className="border p-2">{product.stock}</td>
                <td className="border p-2">
                  {"★".repeat(product.rating)}
                  {"☆".repeat(5 - product.rating)}
                </td>
                <td className="border p-2">
                  <button className="text-blue-600 hover:underline">Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductsTable;