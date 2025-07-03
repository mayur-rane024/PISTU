import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";
import ProductImageSlider from "./ProductImageSlider";
import ProductDetails from "./ProductDetails";
import { fetchProductBySlug } from "../../functions/productService";
import type { Product } from "../../types/product";

const ProductPage: React.FC = () => {
  const { productName } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProduct = async () => {
      const fetchedProduct = await fetchProductBySlug(productName!);
      setProduct(fetchedProduct);
      setLoading(false);
    };

    getProduct();
  }, [productName]);

  if (loading) {
    return (
      <div className="text-center mt-32">
        <Navbar />
        <p className="text-xl font-medium">Loading product...</p>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="text-center mt-32">
        <Navbar />
        <h1 className="text-2xl text-red-500 font-semibold">Product Not Found</h1>
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <div className="flex flex-col md:flex-row justify-center items-start p-4 mt-24">
        <ProductImageSlider images={product.images} />
        <ProductDetails
          name={product.name}
          price={product.price}
          discount={product.discount}
          description={product.description}
          colors={product.colors}
          images={product.images}
        />
      </div>
      <Footer />
    </div>
  );
};

export default ProductPage;
