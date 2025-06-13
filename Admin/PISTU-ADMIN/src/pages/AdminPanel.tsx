// src/pages/AdminPanel.tsx
import React from 'react';
import { Navigate } from 'react-router-dom';

const AdminPanel: React.FC = () => {
  return <Navigate to="/dashboard" />;
};

export default AdminPanel;