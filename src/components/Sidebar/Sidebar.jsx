import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = ({categories}) => {
    // const [categoryBtn,setCategoryBtn] = useState([]);
    // useEffect(() => {
    //     fetch('/Categories.json')
    //     .then(res => res.json())
    //     .then(data => setCategoryBtn(data))
    // },[])
    return (
        <div className=''>
            <NavLink to="/" className="btn w-full mb-2">All Products</NavLink>
            {
                categories.map((category,index) => <NavLink to={`/productDetails/${category.category}`} className="" key={index} ><button className="btn w-full my-2" >{category.category}</button></NavLink>)
            }
        </div>
    );
};

export default Sidebar;