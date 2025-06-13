import { Routes, Route } from "react-router-dom";
import AdminLayout from "../layout/AdminLayout";
import Dashboard from "../pages/Dashbord";
import ProductList from "../pages/products/ProductList";
import ProductUpload from "../pages/products/ProductUpload";

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<AdminLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="products" element={<ProductList />} />
        <Route path="products/upload" element={<ProductUpload />} />
        {/* Add more nested routes */}
      </Route>
    </Routes>
  );
};

export default AdminRoutes;
