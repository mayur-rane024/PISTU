const Cleaning = () => {
  return (
    <div className="relative min-h-[43vh] flex items-center justify-center bg-[#fff9f1] w-full sm:px-80 px-10 py-10 flex-col rounded-lg text-center">      <h2
        className="text-lg  sm:text-3xl font-semibold mb-2 text-[#342b24]"
        style={{ fontFamily: "font5" }}
      >
        Cleaning
      </h2>
            <div className="w-20 sm:w-30 h-0.5 bg-[#A37853] mx-auto mb-3 mt-3"></div>

      <div className="text-sm text-[#5e4c3f]" style={{ fontFamily: "font6" }}>
        <p className="mb-2">
          • <strong>Dusting:</strong> Use a soft, dry cloth to gently dust off
          your leather products regularly.
        </p>
        <p className="mb-2">
          • <strong>Spot Cleaning:</strong> For minor stains, dampen a soft
          cloth with clean, lukewarm water and gently wipe the affected area.
          Avoid rubbing.
        </p>
        <p className="mb-2">
          • <strong>Deep Cleaning:</strong> Use a leather cleaner specifically
          designed for genuine leather. Apply a small amount to a soft cloth and
          gently rub in circular motions. Wipe off any residue with a clean,
          damp cloth.
        </p>
      </div>
    </div>
  );
};
export default Cleaning;
