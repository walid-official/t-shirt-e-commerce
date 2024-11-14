import React from "react";

const ProductDetail = ({ products }) => {
  const { id, image,name, price } = products;
  // console.log(products);
  return (
    <div>
      <div className="card bg-base-100 w-full shadow-xl">
        <figure>
          <img
            src={image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {name}
          </h2>
          <p className="py-3">$ {price}.00</p>
          <div className="card-actions justify-start">
            <div className="btn">Add to cart</div>
            <div className="btn">view Details</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
