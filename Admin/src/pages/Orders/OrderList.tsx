// src/pages/Orders/OrderList.tsx
import React from 'react';
import AdminLayout from '../../layout/AdminLayout';

const OrderList: React.FC = () => {
  const orders = [
    { id: 1, customer: 'John Doe', total: 99.99, status: 'Shipped' },
    { id: 2, customer: 'Jane Smith', total: 149.99, status: 'Pending' },
    { id: 3, customer: 'Bob Johnson', total: 49.99, status: 'Delivered' },
  ];

  return (
    <AdminLayout>
      <h1 className="text-3xl font-bold mb-6">Orders</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-2 px-4 border-b">ID</th>
              <th className="py-2 px-4 border-b">Customer</th>
              <th className="py-2 px-4 border-b">Total</th>
              <th className="py-2 px-4 border-b">Status</th>
              <th className="py-2 px-4 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="hover:bg-gray-50">
                <td className="py-2 px-4 border-b">{order.id}</td>
                <td className="py-2 px-4 border-b">{order.customer}</td>
                <td className="py-2 px-4 border-b">${order.total}</td>
                <td className="py-2 px-4 border-b">{order.status}</td>
                <td className="py-2 px-4 border-b">
                  <button className="text-blue-500 hover:underline">View</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
};

export default OrderList;