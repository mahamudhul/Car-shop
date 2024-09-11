import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='p-5'>
            {/* className='p-5 my-5 mx-14' */}
            <div className='flex justify-between items-center gap-3'>
                <div className=''>
                    <h1 className='title'>MOLLY PARADISE</h1>
                </div>
                <NavLink className='space-x-5'>
                    <Link to="/">HOME</Link>
                    <Link to="/about">ABOUT</Link>
                    <Link to="/menu">MENU</Link>
                    <Link to="/gallary">GALLERY</Link>
                    <Link to="/chefs">CHEFS</Link>
                    <Link to="/review">REVIEW</Link>
                    <Link to="/contact">CONTACT</Link>
                </NavLink>
            </div>
        </div>
    );
};

export default Header;