import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { cartContext, productContext } from "../../layout/Root";
import toast from "react-hot-toast";

const ProductDetail = ({ products }) => {
  const { id, image, name, price } = products;
  const {clothItem, setClothItem,totalPrice,setTotalPrice} = useContext(productContext);
  const [carts, setCarts] = useContext(cartContext);

  // Update the function to add the product to the existing array of cart items
  const handleToCart = (product) => {
    setCarts((prevCarts) => [...prevCarts, product]); // Append new product to the array
    toast.success('Successfully added in cart!');
    setClothItem(clothItem + 1);
    setTotalPrice(totalPrice + product.price)
  };

  return (
    <div>
      <div className=" bg-base-100 w-full shadow-xl hover:shadow-2xl">
        <figure>
          <img src={image} alt={name} />
        </figure>
        <div className="p-3">
          <h2 className="card-title center">{name}</h2>
          <p className="py-3 center">$ {price}</p>
          <div className="card-actions justify-center">
            <button onClick={() => handleToCart(products)} className=" w-full bg-transparent border px-6 py-2 hover:bg-[#4d5154] text-[#4d5154] duration-300 hover:text-white">Add to cart</button>
            <NavLink to={`/shirtDetails/${id}`} className=" w-full text-center bg-transparent border px-6 py-2 hover:bg-[#4d5154] text-[#4d5154] duration-300 hover:text-white">View Details</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
