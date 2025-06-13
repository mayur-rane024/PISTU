import Navbar from "./pages/Navbar";
import Footer from "./pages/Footer";
import Home from "./pages/Home";
import About from "./pages/BestSeller/About";
import Products from "./pages/Products";
import { Routes, Route } from "react-router-dom";
import NewPage from "./pages/NewPage";
import CustomerStories from "./pages/Reviews";
import OurPromise from "./pages/Promises";
import SubscribeSection from "./pages/Contact";
import Categories from "./pages/Categories/Categories";
import Policies from "./pages/Policies/Policies";
import Care from "./pages/Care";
import Team from "./pages/Team";
import About_Pistu from "./pages/About_PISTU";
import Vision_Mission from "./pages/Vision_Mission";
import CategoryProducts from "./pages/Categories/Products";

function App() {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      {/* Add a new page route if needed */}
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
              <About />
              <SubscribeSection />
              <Footer />
            </>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/policies" element={<Policies />} />
        <Route path="/care" element={<Care />} />
        <Route path="/team" element={<Team />} />
        <Route path="/about-pistu" element={<About_Pistu />} />
        <Route path="/vision--mission" element={<Vision_Mission />} />
        <Route path="/products" element={<CategoryProducts/>} />
      </Routes>
    </div>
  );
}

export default App;
