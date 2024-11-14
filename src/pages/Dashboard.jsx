import React, { useContext } from 'react';
import { cartContext } from '../layout/Root';

const Dashboard = () => {
  const [carts] = useContext(cartContext);

  return (
    <div className="w-11/12 mx-auto">
      {carts.length > 0 ? (
        carts.map((cart, index) => (
          <div key={index} className="cart-item mb-4 p-4 border">
            <img src={cart.image} alt={cart.name} className="w-32 h-32 object-cover" />
            <p>{cart.name}</p>
            <p>${cart.price}.00</p>
          </div>
        ))
      ) : (
        <p>No items in the cart yet.</p>
      )}
    </div>
  );
};

export default Dashboard;
