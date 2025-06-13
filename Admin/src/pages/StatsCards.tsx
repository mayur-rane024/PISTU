const StatsCards: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
      <div className="bg-green-500 text-white p-6 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold">Total Users</h2>
        <p className="text-3xl font-bold">1797</p>
      </div>
      <div className="bg-blue-500 text-white p-6 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold">Total Orders</h2>
        <p className="text-3xl font-bold">440</p>
      </div>
      <div className="bg-purple-500 text-white p-6 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold">Total Products</h2>
        <p className="text-3xl font-bold">50</p>
      </div>
      <div className="bg-red-500 text-white p-6 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold">Total Category</h2>
        <p className="text-3xl font-bold">8</p>
      </div>
    </div>
  );
};

export default StatsCards;