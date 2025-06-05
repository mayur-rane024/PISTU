import img1 from "./../feature/About1.jpg";
import img2 from "./../feature/About2.jpg";
import img3 from "./../feature/About3.jpg";
import img4 from "./../feature/About4.jpg";

function Products () {
  return (
    <section
        className="min-h-screen w-full px-6 md:px-16 py-12 bg-white/90 backdrop-blur-lg  "
        id="products"
      >
        {/* Section Header */}
        <div className="text-center mb-20 bg-transparent ">
          <h1
            className="text-4xl text-gray-800 mb-4"
            style={{ fontFamily: "font5" }}
          >
            Featured Collection
          </h1>
          <p
            className="text-gray-600 text-md max-w-2xl mx-auto"
            style={{ fontFamily: "font6" }}
          >
            Discover our handcrafted essentials, where form meets function in
            perfect harmony.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4  gap-8">
          <div className=" transition overflow-hidden  h-64 lg:h-96">
            <img
              src={img1}
              alt="Oxford Leather Shoes"
              className="w-[100%] h-[45%] lg:w-[100%] lg:h-[60%] object-content lg:object-cover rounded-xl lg:rounded-2xl"
            />
            <div className="p-4">
              <h3 className="text-md lg:text-2xl text-gray-800 mb-1 " style={{ fontFamily: "font5" }}>
                Oxford Leather Shoes
              </h3>
              <p className="text-gray-600 text-[1.5vh] lg:text-sm" style={{ fontFamily: "font6" }}>
                Hand-stitched premium leather Oxford shoes crafted with
                traditional Indian artisanship.
              </p>
            </div>
          </div>
          <div className=" transition overflow-hidden h-64 lg:h-96">
            <img
              src={img2}
              alt="Oxford Leather Shoes"
              className="w-[100%] h-[45%] lg:w-[100%] lg:h-[60%] object-content lg:object-cover rounded-xl lg:rounded-2xl"
            />
            <div className="p-4">
              <h3 className="text-md lg:text-2xl text-gray-800 mb-1" style={{ fontFamily: "font5" }}>
                Traditional Wallet
              </h3>
              <p className="text-gray-600 text-[1.5vh] lg:text-sm" style={{ fontFamily: "font6" }}>
                Fusion of Indian craftsmanship with Italian leather, featuring hand-painted Warli art.
              </p>
            </div>
          </div>
          <div className=" transition overflow-hidden h-64 lg:h-96">
            <img
              src={img3}
              alt="Oxford Leather Shoes"
              className="w-[100%] h-[45%] lg:w-[100%] lg:h-[60%] object-content lg:object-cover rounded-xl lg:rounded-2xl"
            />
            <div className="p-4">
              <h3 className="text-md lg:text-2xl text-gray-800 mb-1" style={{ fontFamily: "font5" }}>
                Leather Belt
              </h3>
              <p className="text-gray-600 text-[1.5vh] lg:text-sm" style={{ fontFamily: "font6" }}>
                Classic design with traditional Indian motifs and premium brass buckle.
              </p>
            </div>
          </div>
          <div className=" transition overflow-hidden h-64 lg:h-96">
            <img
              src={img4}
              alt="Oxford Leather Shoes"
              className="w-[100%] h-[45%] lg:w-[100%] lg:h-[60%] object-content lg:object-cover rounded-xl lg:rounded-2xl"
            />
            <div className="p-4">
              <h3 className="text-md lg:text-2xl text-gray-800 mb-1" style={{ fontFamily: "font5" }}>
                Cable Organizer
              </h3>
              <p className="text-gray-600 text-[1.5vh] lg:text-sm" style={{ fontFamily: "font6" }} >
                Modern functionality meets traditional Indian leather craftsmanship.
              </p>
            </div>
          </div>
        </div>
      </section>
  );
}
export default Products;