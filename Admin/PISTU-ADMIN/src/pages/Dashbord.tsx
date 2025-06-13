import React from "react";

const Dashboard: React.FC = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      <p>Welcome to the admin dashboard! Here’s a quick summary:</p>
      <ul className="mt-4 list-disc list-inside">
        <li>Total Products: 120</li>
        <li>Orders Today: 34</li>
        <li>Pending Shipments: 12</li>
      </ul>
    </div>
  );
};

export default Dashboard;
