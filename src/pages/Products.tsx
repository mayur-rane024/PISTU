function Products () {
  return (
    <section
        className="min-h-screen w-full px-6 md:px-16 py-12 bg-[#fff9f1]"
        id="products"
      >
        {/* Section Header */}
        <div className="text-center bg-[#fff9f1] mb-20 ">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className=" transition overflow-hidden">
            <img
              src={`./feature/About1.jpg`}
              alt="Oxford Leather Shoes"
              className="w-72 h-72 object-cover  rounded-2xl"
            />
            <div className="p-4">
              <h3 className="text-xl text-gray-800 mb-2" style={{ fontFamily: "font5" }}>
                Oxford Leather Shoes
              </h3>
              <p className="text-gray-600 text-sm" style={{ fontFamily: "font6" }}>
                Hand-stitched premium leather Oxford shoes crafted with
                traditional Indian artisanship.
              </p>
            </div>
          </div>
          <div className=" transition overflow-hidden">
            <img
              src={`./feature/About5.jpg`}
              alt="Oxford Leather Shoes"
              className="w-72 h-72 object-cover rounded-2xl"
            />
            <div className="p-4">
              <h3 className="text-xl text-gray-800 mb-2" style={{ fontFamily: "font5" }}>
                Traditional Wallet
              </h3>
              <p className="text-gray-600 text-sm" style={{ fontFamily: "font6" }}>
                Fusion of Indian craftsmanship with Italian leather, featuring hand-painted Warli art.
              </p>
            </div>
          </div>
          <div className=" transition overflow-hidden">
            <img
              src={`./feature/About3.jpg`}
              alt="Oxford Leather Shoes"
              className="w-72 h-72 object-cover  rounded-2xl"
            />
            <div className="p-4">
              <h3 className="text-xl text-gray-800 mb-2" style={{ fontFamily: "font5" }}>
                Leather Belt
              </h3>
              <p className="text-gray-600 text-sm" style={{ fontFamily: "font6" }}>
                Classic design with traditional Indian motifs and premium brass buckle.
              </p>
            </div>
          </div>
          <div className=" transition overflow-hidden">
            <img
              src={`./feature/About4.jpg`}
              alt="Oxford Leather Shoes"
              className="w-72 h-72 object-cover rounded-4xl"
            />
            <div className="p-4">
              <h3 className="text-xl text-gray-800 mb-2" style={{ fontFamily: "font5" }}>
                Cable Organizer
              </h3>
              <p className="text-gray-600 text-sm" style={{ fontFamily: "font6" }} >
                Modern functionality meets traditional Indian leather craftsmanship.
              </p>
            </div>
          </div>
        </div>
      </section>
  );
}
export default Products;