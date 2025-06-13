import { useState } from 'react';
import Header from './Header';
import StatsCards from './StatsCards';
import ProductsTable from './ProductsTable';
import AddProductPopup from './AddProductPopup';
import Sidebar from '../components/Sidebar';

// TypeScript interfaces for type safety
interface Product {
  id: number;
  name: string;
  category: string;
  subcategory: string;
  price: number;
  sales: number;
  stock: number;
  rating: number;
  description?: string;
  thirdLevelCategory?: string;
  oldPrice?: number;
  isFeatured?: string;
  brand?: string;
  discount?: number;
  rams?: string;
  weight?: number;
  size?: string;
}

// Mock data for products
const initialProducts: Product[] = [
  {
    id: 1,
    name: "flipflops ladi...",
    category: "Footwear",
    subcategory: "Women Footwear",
    price: 450.00,
    sales: 5,
    stock: 8543,
    rating: 4,
  },
];

const Dashboard: React.FC = () => {
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  // Show the popup when Add Product is clicked
  const handleAddProduct = () => {
    setIsPopupOpen(true);
  };

  // Handle form submission from the popup
  const handleFormSubmit = (newProduct: Omit<Product, 'id' | 'sales'>) => {
    const productWithId: Product = {
      ...newProduct,
      id: products.length + 1,
      sales: 0, // Default sales for new product
    };
    setProducts([...products, productWithId]);
    setIsPopupOpen(false); // Close the popup after submission
  };

  // Toggle sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 md:flex-row">
      {/* Sidebar: Hidden on mobile, shown on toggle */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-white transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 md:static md:w-60 transition-transform duration-300 ease-in-out`}
      >
        <Sidebar />
        <button
          className="md:hidden p-4 text-gray-600"
          onClick={toggleSidebar}
        >
          Close
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4 md:p-6">
        {/* Mobile Menu Button */}
        <button
          className="md:hidden mb-4 p-2 bg-blue-600 text-white rounded"
          onClick={toggleSidebar}
        >
          Menu
        </button>

        <Header onAddProduct={handleAddProduct} />
        <StatsCards />
        <ProductsTable products={products} onAddProduct={handleAddProduct} />

        {/* Popup for Adding Product */}
        {isPopupOpen && (
          <AddProductPopup
            onClose={() => setIsPopupOpen(false)}
            onSubmit={handleFormSubmit}
          />
        )}
      </div>

      {/* Overlay for mobile sidebar */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  );
};

export default Dashboard;