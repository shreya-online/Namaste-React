import React from 'react';
import { LOGO_URL } from '../utils/constants';
import { useState } from 'react';

const Header= () =>{

    const [btnName, setBtnName] = useState("Login")
    // proof of when the state of a component changes, it re-renders the component
    console.log("Header render")
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
                    <button className='login-btn' 
                        onClick={() =>{
                            btnName==="Login" ? setBtnName("Logout") : setBtnName("Login");
                        }}>{btnName}</button>
                </ul>
            </div>
        </div>
    )}
export default Header;