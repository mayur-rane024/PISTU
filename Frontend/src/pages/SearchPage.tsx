// pages/SearchPage.tsx
import { useState, useEffect } from "react";
import { searchProductsByName } from "../functions/productService";
import { useNavigate } from "react-router-dom";
import slugify from "slugify";
import type { ProductWithId } from "@/types/product";
import { Input } from "@/components/ui/input";
import Footer from "./Footer";

const SearchPage = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<ProductWithId[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const delay = setTimeout(() => {
      const fetch = async () => {
        const res = await searchProductsByName(query.trim().toLowerCase());
        setResults(res);
      };
      if (query.trim()) fetch();
      else setResults([]);
    }, 300);

    return () => clearTimeout(delay);
  }, [query]);

  return (
    <div className="pt-6">
      <div className="px-4">
        <Input
          placeholder="Search products..."
          className="w-full border border-[#4d3716] px-4 py-2"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      <div className="mt-4 h-[60vh] overflow-y-auto">
        {query && results.length > 0 ? (
          results.map((product) => (
            <div
              key={product.id}
              className="px-4 py-2 border-b border-gray-200 text-[#4d3716] text-sm cursor-pointer hover:bg-[#f5e6cc]"
              onClick={() => {
                navigate(
                  `/category/${slugify(product.category, {
                    lower: true,
                  })}/${slugify(product.name, { lower: true })}`
                );
              }}
            >
              {product.name}
            </div>
          ))
        ) : query ? (
          <div className="px-4 py-2 text-sm text-gray-500">
            No suggestions found
          </div>
        ) : null}
      </div>
      <Footer />
    </div>
  );
};

export default SearchPage;
