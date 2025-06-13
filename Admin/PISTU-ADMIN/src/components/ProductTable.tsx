import React from "react";

export interface Product {
  id: string;
  name: string;
  brand: string;
  category: string;
  price: number;
  originalPrice: number;
  sales: number;
  stock: number;
  rating: number; // value from 0 to 5
}

interface ProductTableProps {
  products: Product[];
}

const ProductTable: React.FC<ProductTableProps> = ({ products }) => {
  return (
    <div className="overflow-x-auto border rounded-lg shadow-sm">
      <table className="min-w-full bg-white">
        <thead className="bg-gray-100 text-gray-700 text-sm uppercase">
          <tr>
            <th className="px-6 py-3 text-left">Product</th>
            <th className="px-6 py-3 text-left">Brand</th>
            <th className="px-6 py-3 text-left">Category</th>
            <th className="px-6 py-3 text-left">Price</th>
            <th className="px-6 py-3 text-left">Sales</th>
            <th className="px-6 py-3 text-left">Stock</th>
            <th className="px-6 py-3 text-left">Rating</th>
          </tr>
        </thead>
        <tbody className="text-gray-700">
          {products.length === 0 ? (
            <tr>
              <td colSpan={7} className="text-center py-4 text-gray-500">
                No products available.
              </td>
            </tr>
          ) : (
            products.map((product) => (
              <tr key={product.id} className="border-t hover:bg-gray-50">
                <td className="px-6 py-3">{product.name}</td>
                <td className="px-6 py-3">{product.brand}</td>
                <td className="px-6 py-3">{product.category}</td>
                <td className="px-6 py-3">
                  <span className="line-through text-gray-400 mr-1">
                    ₹{product.originalPrice}
                  </span>
                  <span className="text-blue-600 font-medium">₹{product.price}</span>
                </td>
                <td className="px-6 py-3">{product.sales}</td>
                <td className="px-6 py-3">{product.stock}</td>
                <td className="px-6 py-3">
                  {"★".repeat(product.rating)}
                  {"☆".repeat(5 - product.rating)}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
