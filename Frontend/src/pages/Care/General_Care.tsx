const General_Care = () => {
  return (
    <div className="relative mt-12 min-h-[50vh] flex items-center justify-center bg-[#fdf2e3] w-full sm:px-80  px-10 py-10 flex-col rounded-lg text-center">
      {/* <img
          alt="mandala left"
          src="./mandala-left.png"
          className="absolute top-22 left-0 w-1/3 sm:w-1/4 md:w-1/11 h-auto opacity-60"
        /> */}
        {/* <img
          alt="mandala right"
          src="./mandala-right.png"
          className="absolute top-25 right-0 w-1/3 sm:w-1/4 md:w-1/6 h-auto opacity-60"
        /> */}
      <h2
        className="text-lg mt-18 sm:text-3xl font-semibold mb-2 text-[#342b24]"
        style={{ fontFamily: "font5" }}
      >
        General Care
      </h2>
      <div className="w-20 sm:w-30 h-0.5 bg-[#A37853] mx-auto mb-3 mt-3"></div>
      <div className="text-sm text-[#5e4c3f]" style={{ fontFamily: "font6" }}>
        <p className="mb-2">
          • <strong>Keep Away from Direct Sunlight:</strong> Prolonged exposure
          to direct sunlight can fade the color of leather and cause it to dry
          out.
        </p>
        <p className="mb-2">
          • <strong>Avoid Excess Moisture:</strong> Leather is sensitive to
          water. If your product gets wet, gently pat it dry with a soft cloth
          and allow it to air dry at room temperature. Avoid using heat sources
          like hairdryers.
        </p>
        <p className="mb-2">
          • <strong>Handle with Clean Hands:</strong> Leather absorbs oils and
          dirt. Always handle your products with clean hands to maintain their
          pristine finish.
        </p>
      </div>
    </div>
  );
};

export default General_Care;
