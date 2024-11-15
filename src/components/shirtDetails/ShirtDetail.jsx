import React, { useContext, useEffect, useState } from "react";
import { NavLink, useLoaderData, useParams } from "react-router-dom";
import { productContext, cartContext } from "../../layout/Root";
import { Rating } from "@smastrom/react-rating";
import toast from "react-hot-toast";
import "@smastrom/react-rating/style.css";

const ShirtDetail = () => {
  const shirtData = useLoaderData();
  const { shirtId } = useParams();
  const [clothItemDetails, setClothItemDetails] = useState({});
  
  // Destructuring contexts
  const { clothItem, setClothItem, totalPrice, setTotalPrice } = useContext(productContext);
  const [carts, setCarts] = useContext(cartContext);

  useEffect(() => {
    const shirtItem = shirtData.find((item) => item.id == shirtId);
    setClothItemDetails(shirtItem);
  }, [shirtData, shirtId]);

  // Function to add the product to the cart
  const handleDetailsAddToCart = () => {
    setCarts((prevCarts) => [...prevCarts, clothItemDetails]);
    toast.success('Successfully added to cart!');
    setClothItem(clothItem + 1);
    setTotalPrice(totalPrice + clothItemDetails.price);
  };

  const {
    image,
    name,
    price,
    description,
    size = [],
    rating,
    availability,
  } = clothItemDetails;

  return (
    <div className="w-11/12 mx-auto">
      <div className="card card-side bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt="cloth" />
        </figure>
        <div className="p-6">
          <h2 className="font-bold text-3xl">{name}</h2>
          <p className="py-3">{description}</p>
          <h2 className="font-bold text-xl pb-3">${price}</h2>
          <div className="pb-4"> 
            <Rating style={{ maxWidth: 180 }} value={rating} readOnly />
          </div>
          <h2 className="font-bold text-xl ">Size</h2>
          <div className="my-6">
            {size.map((singleSize) => (
              <NavLink key={singleSize} className="border py-2 px-5">{singleSize}</NavLink>
            ))}
          </div>

          <div className="card-actions justify-start">
            <button onClick={handleDetailsAddToCart} className="btn">Add To Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShirtDetail;
