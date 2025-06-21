import React from "react";
import { useParams } from "react-router-dom";
import slugify from "slugify";
import ProductImageSlider from "./ProductImageSlider";
import ProductDetails from "./ProductDetails";
import Navbar from "../Navbar";
import Footer from "../Footer";

// Updated mock product data with multiple colors
const mockProducts = [
  {
    name: "Belt",
    category: "dresses",
    price: "$27.90",
    oldPrice: "$35.90",
    description:
      "Rustic sleeveless crepe T-shirt with gathered detail on the side and a crew neck. Made of stretch fabric.",
    images: [
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSJKw5ls2zcYIHkUOiAcEU5SNEb48SiTxWY9IWMdgJbPCHJTD_TDMUehahfi5-w5hJUjdWTalgiIn3iyv0D86clPnm6wgV-RZ7wEtyVdxFylmP7V2RdyEnj-Q",
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQ7pLWly5y-5o30gl6FLeC2a8m9UUSA3EFy3RN_-s_VxVix_gz1NITjQK7VFDANb8mSIj_SOQmjPJFUB93Da-niLQCsJa8mOVpWJdRHfWmMrdg--r-hO-k",
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQaRER-zHFxcS6bxoQoGKFiglX6aAjTzruCwZ_UzpBwAQ0j_QZem6wxl8vfEBQRMK6bBBmPFfF94uTEgm5U-Fq1B5Mz6V83IPdwYTqKsIawZwUZwQR4rJGTkg",
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTmPQe6mEctkv2VT9NNlQJY5OsFWRsIekFDfqyVM7WocjbhKIsQjlrOXbvNTlvNmmjDSZTiPt6eyN8XoDRS6jpZmjj_CNd-NoT5iEcJDaBkMySSx_6NxYZv_g",
    ],
    extraDetails: {
      articleNumber: "3243314-505",
      modelSize: "S",
      modelHeight: "177 cm",
      colors: [
        "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSJKw5ls2zcYIHkUOiAcEU5SNEb48SiTxWY9IWMdgJbPCHJTD_TDMUehahfi5-w5hJUjdWTalgiIn3iyv0D86clPnm6wgV-RZ7wEtyVdxFylmP7V2RdyEnj-Q",
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQ7pLWly5y-5o30gl6FLeC2a8m9UUSA3EFy3RN_-s_VxVix_gz1NITjQK7VFDANb8mSIj_SOQmjPJFUB93Da-niLQCsJa8mOVpWJdRHfWmMrdg--r-hO-k",
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQaRER-zHFxcS6bxoQoGKFiglX6aAjTzruCwZ_UzpBwAQ0j_QZem6wxl8vfEBQRMK6bBBmPFfF94uTEgm5U-Fq1B5Mz6V83IPdwYTqKsIawZwUZwQR4rJGTkg",
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTmPQe6mEctkv2VT9NNlQJY5OsFWRsIekFDfqyVM7WocjbhKIsQjlrOXbvNTlvNmmjDSZTiPt6eyN8XoDRS6jpZmjj_CNd-NoT5iEcJDaBkMySSx_6NxYZv_g",
      ], // names or hex codes
    },
  },
  {
    name: "Striped T-shirt Brown",
    category: "tshirts",
    price: "$17.90",
    oldPrice: "$45.90",
    description:
      "Brown striped T-shirt with soft cotton fabric. Best for everyday wear.",
    images: [
      "https://via.placeholder.com/300x400?text=Brown+Front",
      "https://via.placeholder.com/300x400?text=Brown+Side",
      "https://via.placeholder.com/300x400?text=Brown+Back",
    ],
    extraDetails: {
      articleNumber: "112233-444",
      modelSize: "M",
      modelHeight: "180 cm",
      colors: [
        "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSJKw5ls2zcYIHkUOiAcEU5SNEb48SiTxWY9IWMdgJbPCHJTD_TDMUehahfi5-w5hJUjdWTalgiIn3iyv0D86clPnm6wgV-RZ7wEtyVdxFylmP7V2RdyEnj-Q",
        "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQ7pLWly5y-5o30gl6FLeC2a8m9UUSA3EFy3RN_-s_VxVix_gz1NITjQK7VFDANb8mSIj_SOQmjPJFUB93Da-niLQCsJa8mOVpWJdRHfWmMrdg--r-hO-k",
        "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQaRER-zHFxcS6bxoQoGKFiglX6aAjTzruCwZ_UzpBwAQ0j_QZem6wxl8vfEBQRMK6bBBmPFfF94uTEgm5U-Fq1B5Mz6V83IPdwYTqKsIawZwUZwQR4rJGTkg",
        "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTmPQe6mEctkv2VT9NNlQJY5OsFWRsIekFDfqyVM7WocjbhKIsQjlrOXbvNTlvNmmjDSZTiPt6eyN8XoDRS6jpZmjj_CNd-NoT5iEcJDaBkMySSx_6NxYZv_g",
      ], // brown, sandy brown, black
    },
  },
];

const ProductPage: React.FC = () => {
  const { categoryName, productName } = useParams();

  const product = mockProducts.find(
    (p) => slugify(p.name, { lower: true }) === productName
  );

  if (!product) {
    return (
      <div className="text-center mt-32">
        <Navbar />
        <h1 className="text-2xl text-red-500 font-semibold">
          Product Not Found
        </h1>
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
          oldPrice={product.oldPrice}
          description={product.description}
          extraDetails={product.extraDetails}
        />
      </div>
      <Footer />
    </div>
  );
};

export default ProductPage;
