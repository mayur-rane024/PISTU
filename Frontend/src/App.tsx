import { Routes, Route } from "react-router-dom";
import Navbar from "./pages/Navbar";
import Footer from "./pages/Footer";
import Home from "./pages/HeroPage/Hero";
import About from "./pages/About";
import Products from "./pages/Products";
import NewPage from "./pages/NewPage";
import CustomerStories from "./pages/CustomerStories/Reviews";
import OurPromise from "./pages/Promises";
import WishlistPage from "./pages/WishListPage/Wishlist";
import Care from "./pages/Care/Care";
import Team from "./pages/Team";
import About_Pistu from "./pages/About_PISTU";
import CategoryProducts from "./pages/Categories/Products";
import BestSeller from "./pages/BestSeller/BestSeller";
import LoginPopup from "./pages/LoginPage";
import ProductPage from "./pages/ProductPage/ProductPage";
import ScrollToTop from "./pages/ScrollToTop";
import CartPage from "./pages/CartPage/CartPage";
import Component from "./pages/Craft";
import UserSettings from "./pages/ProfileSetting";
import Terms_Conditions from "./pages/Policies/Terms_and_Conditions";
import Shipping_Policy from "./pages/Policies/Shipping_Policy";
import Refund_and_Returns_Policy from "./pages/Policies/Refund_and_Returns_Policy";
import Cookie_Policy from "./pages/Policies/Cookie_Policy";
import Disclaimer from "./pages/Policies/Disclaimer";
import Intellectual_Property_Notice from "./pages/Policies/Intellectual_Property_Notice";
import Privacy_Policy from "./pages/Policies/Privacy_policy";
import SearchPage from "./pages/SearchPage"; // adjust path
import { Signin } from "./app/auth/signin";
import { Signup } from "./app/auth/signup";
import NotAllowed from "./app/auth/not-allowed";

function App() {

  const SignupRoute = () => {
    const registrationType = import.meta.env.VITE_TYPE;

    if (registrationType === "public") {
      return <Signup />;
    } else {
      return <NotAllowed />;
    }
  };


  return (
    <>
      <ScrollToTop /> {/* ⬅ Automatically scrolls to top on route change */}
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
            <Route path="/login" element={<Signin />} />
        <Route path="/signup" element={<SignupRoute />} />
          <Route path="/about" element={<About />} />
          <Route path="/care" element={<Care />} />
          <Route path="/team" element={<Team />} />
          <Route path="/about-pistu" element={<About_Pistu />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/profile" element={<UserSettings />} />
          <Route path="/wishlist" element={<WishlistPage />} />
          <Route path="/category" element={<CategoryProducts />} />
          <Route path="/search" element={<SearchPage />} />
          {/* policies routing */}
          <Route path="/privacy-policy" element={<Privacy_Policy />} />
          <Route path="/terms-and-conditions" element={<Terms_Conditions />} />
          <Route
            path="/refund-and-returns-policy"
            element={<Refund_and_Returns_Policy />}
          />
          <Route path="/shipping-policy" element={<Shipping_Policy />} />
          <Route path="/cookie-policy" element={<Cookie_Policy />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route
            path="/intellectual-property-notice"
            element={<Intellectual_Property_Notice />}
          />
          <Route
            path="/category/:categoryName"
            element={<CategoryProducts />}
          />
          /
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
