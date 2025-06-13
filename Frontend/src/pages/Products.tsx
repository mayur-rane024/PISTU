import img1 from "./../feature/About1.jpg";
import img2 from "./../feature/About2.jpg";
import img3 from "./../feature/About3.jpg";
import img4 from "./../feature/About4.jpg";

const productData = [
  {
    title: "Oxford Leather Shoes",
    image: img1,
  },
  {
    title: "Traditional Wallet",
    image: img2,
  },
  {
    title: "Leather Belt",
    image: img3,
  },
  {
    title: "Cable Organizer",
    image: img4,
  },
  // Add more items if needed
];

const Products = () => {
  // Repeat the products as needed (e.g., 3 rows of 4 items)
  const allProducts = Array(3)
    .fill(productData)
    .flat();

  return (
    <section
      className="min-h-screen w-full px-6 md:px-16 py-12 bg-white/90 backdrop-blur-lg"
      id="products"
    >
      {/* Section Header */}
      <div className="text-center mb-10 bg-transparent">
        <h1 className="text-4xl text-gray-800 mb-4" style={{ fontFamily: "font5" }}>
          Featured Collection
        </h1>
        <p className="text-gray-600 text-md max-w-2xl mx-auto" style={{ fontFamily: "font6" }}>
          Discover our handcrafted essentials, where form meets function in perfect harmony.
        </p>
      </div>
      <div className="w-20 h-0.5 bg-[#A37853] mx-auto mb-16"></div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {allProducts.map((product, index) => (
          <div key={index} className="transition overflow-hidden h-64 lg:h-96">
            <img
              src={product.image}
              alt={product.title}
              className="w-[100%] h-[60%] lg:w-[100%] lg:h-[60%] object-content lg:object-cover rounded-xl lg:rounded-2xl"
            />
            <div className="p-4">
              <h3
                className="text-md lg:text-2xl text-gray-800 mb-1"
                style={{ fontFamily: "font5" }}
              >
                {product.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
