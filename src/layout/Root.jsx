import React, { createContext, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import { Toaster } from 'react-hot-toast';
export const productContext = createContext();
export const cartContext = createContext();

const Root = () => {
  const [clothItem, setClothItem] = useState(0);
  const [totalPrice,setTotalPrice] = useState(0);

  const [carts, setCarts] = useState([]);
  return (
    <productContext.Provider value={{clothItem, setClothItem,totalPrice,setTotalPrice}}>
      <cartContext.Provider value={[carts, setCarts]}>
        <div className="">
          <Navbar></Navbar>
          <div className="min-h-screen">
            <Outlet></Outlet>
          </div>
          <Footer></Footer>
        </div>
        <Toaster/>
      </cartContext.Provider>
    </productContext.Provider>
  );
};

export default Root;
