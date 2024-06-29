import React from 'react';
import { LOGO_URL } from '../utils/constants';

const Header= () =>{
    return (
        <div className="header-container">
            <div className='logo-container'>
                <img src={LOGO_URL} 
                alt='logo' 
                className='logo'
                />
            </div>
            <div className='navItems-container'>
                <ul>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Offers</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )}
export default Header;