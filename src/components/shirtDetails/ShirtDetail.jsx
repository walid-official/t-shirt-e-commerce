import React, { useContext, useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { productContext } from "../../layout/Root";

const ShirtDetail = () => {

  const shirtData = useLoaderData();
  const { shirtId } = useParams();
  const [clothItem, setClothItem] = useContext(productContext);
  const [clothItemDetails,setClothItemDetails] = useState([]);
 
  useEffect(() => {
    const shirtItem = shirtData.find((item) => item.id == shirtId);
    setClothItemDetails(shirtItem);

  }, [shirtData, shirtId]);

  const {image,price} = clothItemDetails;


  return (
    <div className="w-11/12 mx-auto">
      <div className="card card-side bg-base-100 shadow-xl">
        <figure>
          <img
            src={image}
            alt="cloth"
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
