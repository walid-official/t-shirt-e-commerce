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
            <div className="flex gap-6 w-11/12 mx-auto">
                <Sidebar categories={categories}></Sidebar>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Home;