// SubscribeSection.jsx
export default function SubscribeSection() {
  return (
    <div className="bg-[#f8f3ed] py-16 px-4 text-center">
      <h2 className="text-3xl md:text-4xl font-serif text-[#3e2c1c] mb-4">Join Our Journey</h2>
      <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
        Be the first to know about new collections, exclusive offers, and the stories behind our craft.
      </p>
      <div className="flex justify-center items-center gap-0 max-w-md mx-auto">
        <input
          type="email"
          placeholder="Your email address"
          className="p-3 w-64 sm:w-80 border border-gray-300 focus:outline-none"
        />
        <button className="bg-[#3e2c1c] text-white px-6 py-3">
          Subscribe
        </button>
      </div>
    </div>
  );
}
