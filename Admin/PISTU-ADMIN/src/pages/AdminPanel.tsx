import React from "react";
import ProductTable from "../components/ProductTable";

const sampleProducts = [
  {
    id: "1",
    name: "Clean & Clear Pimple Face Wash",
    brand: "Clean & Clear",
    category: "Wellness",
    price: 320,
    originalPrice: 299,
    sales: 2,
    stock: 2503,
    rating: 4,
  },
  {
    id: "2",
    name: "VitaWin Grape Seed Capsules",
    brand: "VITAWIN",
    category: "Wellness",
    price: 699,
    originalPrice: 650,
    sales: 3,
    stock: 8545,
    rating: 4,
  },
];

const ProductList: React.FC = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Product List</h2>
      <ProductTable products={sampleProducts} />
    </div>
  );
};

export default ProductList;
