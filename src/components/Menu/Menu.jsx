import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = () => {
    return (
        <div className=''>
            <div className="flex justify-center py-4 border bg-white">
                <ul className='flex gap-6'>
                    <li> <NavLink>Home</NavLink> </li>
                    <li> <NavLink>About Us</NavLink> </li>
                    <li> <NavLink>Dashboard</NavLink> </li>
                    <li> <NavLink>Contact Us</NavLink> </li>
                </ul>
            </div>
        </div>
    );
};

export default Menu;