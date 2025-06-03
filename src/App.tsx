import Navbar from "./pages/Navbar";
import Footer from "./pages/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import { Routes, Route } from "react-router-dom";
import NewPage from "./pages/NewPage";
import CustomerStories from "./pages/Reviews";
import OurPromise from "./pages/Promises";
import SubscribeSection from "./pages/Contact";

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
      </Routes>
    </div>
  );
}

export default App;
