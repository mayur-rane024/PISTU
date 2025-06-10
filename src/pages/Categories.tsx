import Navbar from "../pages/Navbar";
import Footer from "../pages/Footer";

const Categories = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow flex items-center justify-center p-8">
        <h1 className="text-4xl font-semibold text-[#4d3716]">Welcome to Categories</h1>
      </main>
      <Footer />
    </div>
  );
};

export default Categories;
