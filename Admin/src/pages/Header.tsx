interface HeaderProps {
  onAddProduct: () => void;
}

const Header: React.FC<HeaderProps> = ({ onAddProduct }) => {
  return (
    <div className="flex justify-between items-center mb-6">
      <div>
        <h1 className="text-3xl font-bold text-[#3A2E25]">
          Welcome, <span className="text-[#3A2E25]">Parikshit Rajpurohit</span>
        </h1>
        <p className="text-gray-600">
          Here’s what happening on your store today. See the statistics at once.
        </p>
      </div>
      <button
        onClick={onAddProduct}
        className="mt-4 px-6 py-3 bg-transparent text-[#3A2A1B] border-[#3A2A1B] rounded-4xl border hover:bg-[#d7b788] cursor-pointer transition shadow-md"
      >
        + Add Product
      </button>
    </div>
  );
};

export default Header;