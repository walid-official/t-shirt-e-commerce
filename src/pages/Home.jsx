import React from 'react';
import Banner from '../components/Banner/Banner';
import ProductDetails from '../components/Products/ProductDetails';
import Sidebar from '../components/Sidebar/Sidebar';
import ProductTitle from '../components/ProductTitle/ProductTitle';
import { Outlet, useLoaderData } from 'react-router-dom';

const Home = () => {
    const categories = useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <ProductTitle></ProductTitle>
            <div className="lg:flex gap-6 w-11/12 mx-auto">
                <div className="lg:w-[20%] md:w-[30%]">
                    <Sidebar categories={categories}></Sidebar>
                </div>
                <div className="lg:w-[80%] md:[70%]">
                    <Outlet></Outlet>
                </div>    
            </div>
        </div>
    );
};

export default Home;