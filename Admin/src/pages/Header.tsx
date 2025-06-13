interface HeaderProps {
  onAddProduct: () => void;
}

const Header: React.FC<HeaderProps> = ({ onAddProduct }) => {
  return (
    <div className="flex justify-between items-center mb-6">
      <div>
        <h1 className="text-3xl font-bold text-blue-900">
          Welcome, <span className="text-blue-600">Parikshit Rajpurohit</span>
        </h1>
        <p className="text-gray-600">
          Here’s what happening on your store today. See the statistics at once.
        </p>
      </div>
      <button
        onClick={onAddProduct}
        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
      >
        + Add Product
      </button>
    </div>
  );
};

export default Header;