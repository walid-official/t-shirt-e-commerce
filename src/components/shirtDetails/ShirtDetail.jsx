import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const ShirtDetail = () => {

  const shirtData = useLoaderData();
  const { shirtId } = useParams();
  const [clothItem, setClothItem] = useState([]);

  console.log(shirtData);

  useEffect(() => {
    const shirtItem = shirtData.find((item) => item.id == shirtId);
    setClothItem(shirtItem);
  }, [shirtData, shirtId]);

  const {image,price} = clothItem;


  return (
    <div>
      <div className="card card-side bg-base-100 shadow-xl">
        <figure>
          <img
            src={image}
            alt="Movie"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">New movie is released!</h2>
          <p>Click the button to watch on Jetflix app.</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Watch</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShirtDetail;
