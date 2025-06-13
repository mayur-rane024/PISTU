import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const AdminLayout = () => {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <main style={{ flex: 1, padding: "20px" }}>
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
