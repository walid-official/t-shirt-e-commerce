import React, { useContext } from "react";
import { cartContext } from "../layout/Root";

const Dashboard = () => {
  const [carts] = useContext(cartContext);

  return (
    <div className="w-[60%] mx-auto">
      {carts.length > 0 ? (
        carts.map((cart, index) => (
          <div className="flex justify-between items-center mb-4 p-4 border-2">
            <div
              key={index}
              className="cart-item flex gap-4   "
            >
              <div className="">
                <img
                  src={cart.image}
                  alt={cart.name}
                  className="w-32 h-32 object-cover"
                />
              </div>
              <div className="">
                <p className="font-bold text-xl">{cart.name}</p>
                <p className="">${cart.price}</p>
                <p className="py-1">{cart.description}</p>
                <button className="border py-1 px-6 hover:bg-[#4d5154] hover:text-white ">
                  Buy Now
                </button>
              </div>
            </div>
            <div className="">
              <button className="btn">Close</button>
            </div>
          </div>
        ))
      ) : (
        <p>No items in the cart yet.</p>
      )}
    </div>
  );
};

export default Dashboard;
