export default function Component() {
  const steps = [
    {
      number: "01",
      title: "Material Selection",
      description:
        "We source only the finest high-grain, mild, Italian, and mold leathers, inspecting each hide for quality and character.",
      alignRight: true,
    },
    {
      number: "02",
      title: "Design & Pattern Making",
      description:
        "Our artisans draft patterns that balance timeless design with functional excellence, focusing on every detail.",
      alignRight: false,
    },
    {
      number: "03",
      title: "Cutting & Preparation",
      description:
        "Each piece is carefully cut by hand, preserving the natural beauty and unique characteristics of the leather.",
      alignRight: true,
    },
    {
      number: "04",
      title: "Crafting & Stitching",
      description:
        "Using traditional techniques, our master craftsmen hand-stitch each piece with precision and patience.",
      alignRight: false,
    },
    {
      number: "05",
      title: "Finishing & Quality Control",
      description:
        "Every product undergoes rigorous quality checks before receiving its final finishing touches and PISTU signature.",
      alignRight: true,
    },
  ];

  return (
    <div className="min-h-screen  bg-white/90 backdrop-blur-lg py-16 px-4 text-center relative">
      {/* Mobile-only top mandala */}
      <img
        alt="mandala top"
        src="./mandala-top.png"
        className="absolute top-0  left-1/2 -translate-x-1/2 -z-10 w-3/4 h-auto opacity-55 md:hidden"
      />

      {/* Desktop-only side mandalas */}
      <img
        alt="mandala left"
        src="./mandala-left.png"
        className="absolute left-0 top-0 w-1/2 mt-80 h-auto opacity-55 hidden md:block lg:w-1/5 xl:w-1/6"
      />
      <img
        alt="mandala right"
        src="./mandala-right.png"
        className="absolute right-0 top-0 mt-80 w-1/6 h-auto opacity-55 hidden md:block lg:w-1/5 xl:w-1/6"
      />
      <div className="max-w-6xl mx-auto">
        <h2
          className="text-4xl sm:text-5xl items-center text-[#342b24] mb-4"
          style={{ fontFamily: "font5" }}
        >
          The Craft
        </h2>
        <p
          className="text-lg sm:text-xl text-[#57463a] max-w-2xl mx-auto mb-12"
          style={{ fontFamily: "font6" }}
        >Every PISTU creation goes through a meticulous process, combining traditional techniques with modern precision.
        </p>
        <div className="w-20 h-0.5 bg-[#A37853] mx-auto mb-16"></div>
        <div className="relative space-y-16">
          {steps.map((step) => (
            <div
              key={step.number}
              className={`flex ${step.alignRight ? "justify-end" : "justify-start"}`}
            >
              <div className="flex items-start gap-8 max-w-2xl">
                {step.alignRight ? (
                  <>
                    <div className="flex-shrink-0 w-20 h-20 rounded-full border-2 mt-5 border-[#8f6a4f]  flex items-center justify-center bg-white">
                      <span className="text-[#8f6a4f]  font-serif text-lg font-medium ">{step.number}</span>
                    </div>
                    <div className="pt-2">
                      <h3 className="text-2xl font-serif text-[#342b24] mb-3" style={{fontFamily : "font6"}}>{step.title}</h3>
                      <p className="text-[#5e4c3f] leading-relaxed" style={{fontFamily : "font6"}}>{step.description}</p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="pt-2 text-right">
                      <h3 className="text-2xl font-serif text-[#342b24] mb-3 " style={{fontFamily : "font6"}}>{step.title}</h3>
                      <p className="text-[#5e4c3f]  sm:text-md max-w-2xl leading-relaxed" style={{fontFamily : "font6"}}>{step.description}</p>
                    </div>
                    <div className="flex-shrink-0 w-20 h-20 rounded-full border-2 mt-5 border-[#8f6a4f] flex items-center justify-center bg-white">
                      <span className="text-[#8f6a4f] font-serif text-lg font-medium">{step.number}</span>
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
