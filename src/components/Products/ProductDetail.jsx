import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { cartContext, productContext } from "../../layout/Root";

const ProductDetail = ({ products }) => {
  const { id, image, name, price } = products;
  const {clothItem, setClothItem,totalPrice,setTotalPrice} = useContext(productContext);
  const [carts, setCarts] = useContext(cartContext);

  // Update the function to add the product to the existing array of cart items
  const handleToCart = (product) => {
    setCarts((prevCarts) => [...prevCarts, product]); // Append new product to the array
    setClothItem(clothItem + 1);
    setTotalPrice(totalPrice + product.price)
  };

  return (
    <div>
      <div className="card bg-base-100 w-full shadow-xl">
        <figure>
          <img src={image} alt={name} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p className="py-3">$ {price}.00</p>
          <div className="card-actions justify-start">
            <button onClick={() => handleToCart(products)} className="btn">Add to cart</button>
            <NavLink to={`/shirtDetails/${id}`} className="btn">View Details</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
