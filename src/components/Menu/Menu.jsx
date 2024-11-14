import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { authContext } from '../AuthProvider/AuthProvider';


const Menu = () => {
    const {user} = useContext(authContext);
    return (
        <div className=''>
            <div className="flex justify-center py-4 border bg-white">
                <ul className='flex gap-6'>
                     <NavLink to="/">Home</NavLink> 
                     <NavLink to="/About">About Us</NavLink> 
                     {
                        user &&  <NavLink to="/Dashboard">Dashboard</NavLink> 
                     }   
                     <NavLink to="/Contact">Contact Us</NavLink> 
                     
                     
                </ul>
            </div>
        </div>
    );
};

export default Menu;