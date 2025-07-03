import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./pages/Navbar";
import Footer from "./pages/Footer";
import Home from "./pages/HeroPage/Hero";
import About from "./pages/About";
import Products from "./pages/Products";
import NewPage from "./pages/NewPage";
import CustomerStories from "./pages/CustomerStories/Reviews";
import OurPromise from "./pages/Promises";
import WishlistPage from "./pages/WishListPage/Wishlist";
import Policies from "./pages/Policies/Policies";
import Care from "./pages/Care";
import Team from "./pages/Team";
import About_Pistu from "./pages/About_PISTU";
import CategoryProducts from "./pages/Categories/Products";
import BestSeller from "./pages/BestSeller/BestSeller";
import LoginPopup from "./pages/LoginPage";
import ProductPage from "./pages/ProductPage/ProductPage";
import ScrollToTop from "./pages/ScrollToTop"; // ⬅️ Add this line
import CartPage from "./pages/CartPage/CartPage";
import Component from "./pages/Craft";
import UserSettings from "./pages/ProfileSetting";

function App() {
  return (
    <>
      <ScrollToTop /> {/* ⬅️ Automatically scrolls to top on route change */}
      <div></div>
      <div className="flex flex-col min-h-screen overflow-x-hidden">
        <Routes>
          <Route path="/newpage" element={<NewPage />} />
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Home />
                <Products />
                <CustomerStories />
                <OurPromise />
                <BestSeller />
                <Component />
                <About />
                <Footer />
              </>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/policies" element={<Policies />} />
          <Route path="/care" element={<Care />} />
          <Route path="/team" element={<Team />} />
          <Route path="/about-pistu" element={<About_Pistu />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/profile" element={<UserSettings />} />
          <Route path="/wishlist" element={<WishlistPage />} />
          <Route path="/category" element={<CategoryProducts />} />
          <Route
            path="/category/:categoryName"
            element={<CategoryProducts />}
          />
          <Route
            path="/category/:categoryName/:productName"
            element={<ProductPage />}
          />
          <Route
            path="/login-up"
            element={
              <LoginPopup
                isOpen={true}
                onClose={() => {
                  throw new Error("Function not implemented.");
                }}
              />
            }
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
