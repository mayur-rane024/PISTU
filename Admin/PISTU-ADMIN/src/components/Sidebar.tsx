import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside style={{ width: "220px", backgroundColor: "#f0f0f0", height: "100vh" }}>
      <nav>
        <ul>
          <li><NavLink to="/">Dashboard</NavLink></li>
          <li><NavLink to="/products">Product List</NavLink></li>
          <li><NavLink to="/products/upload">Upload Product</NavLink></li>
          <li><NavLink to="/orders">Orders</NavLink></li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
