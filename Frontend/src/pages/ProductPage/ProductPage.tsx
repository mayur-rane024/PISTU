import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";
import ProductImageSlider from "./ProductImageSlider";
import ProductDetails from "./ProductDetails";
import { fetchProductBySlug } from "../../functions/productService";
import type { ProductWithId } from "../../types/product";
import ReviewSection from "../../components/ReviewSection"

const ProductPage: React.FC = () => {
  const { productName } = useParams<{ productName: string }>();
  const [product, setProduct] = useState<ProductWithId | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const fetchedProduct = await fetchProductBySlug(productName!);
        setProduct(fetchedProduct);
      } catch (error) {
        console.error("Failed to fetch product:", error);
        setProduct(null);
      } finally {
        setLoading(false);
      }
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
      <div className="bg-white">
      <div className="flex flex-col md:flex-row justify-center  items-start p-5 mt-20">
        <div className="w-full md:sticky top-24 z-10">
          <ProductImageSlider images={product.images} />
        </div>
        <ProductDetails
          id={product.id}
          name={product.name}
          price={product.price}
          discount={product.discount}
          description={product.description}
          detailedDescription={product.detailedDescription}
          colors={product.colors}
          images={product.images}
          stock={product.in_out_stock}
        />
      </div>
          { product.id && <ReviewSection productId={product.id} /> }
          </div>
      <Footer />
    </div>
  );
};

export default ProductPage;
