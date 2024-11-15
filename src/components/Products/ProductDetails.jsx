import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import ProductDetail from "./ProductDetail";

const ProductDetails = () => {
  const productsData = useLoaderData();
  const [productsCard, setProductsCard] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const { productId } = useParams();

  useEffect(() => {
    let filteredProducts = productsData;

    // Filter by category if productId is present
    if (productId) {
      filteredProducts = filteredProducts.filter(
        (product) => product.category === productId
      );
    }

    // Filter by search term
    if (searchTerm) {
      filteredProducts = filteredProducts.filter((product) =>
        product.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setProductsCard(filteredProducts);
  }, [productsData, productId, searchTerm]);

  return (
    <div className="pb-32">
      <div className="mb-4">
        <label className="input w-[25%] focus-within:w-[50%] input-bordered flex items-center gap-2 transition-all duration-300">
          <input
            type="text"
            className="grow w-full outline-none placeholder-gray-400"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)} // Update search term
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-3">
        {productsCard.map((singleProduct, index) => (
          <ProductDetail key={index} products={singleProduct}></ProductDetail>
        ))}
      </div>
    </div>
  );
};

export default ProductDetails;
