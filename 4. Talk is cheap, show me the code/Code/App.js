import React from 'react';
import ReactDOM from 'react-dom/client'

const Header= () =>{
return (
    <div className="header-container">
        <div className='logo-container'>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXpWBdjls39DNpcyPgc3HV9XEMBhloF9W9Mg&s' 
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

const RestaurantCard = () =>{
    return(
        <div className='restro-cards'>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoPhgVJ_EdConWcowWxq3cZ9_3MxZMpxcn6A&s'
                alt='restro-cardImg'
                className='restro-cardImg'
                />
                <h3>Meghna Foods</h3>
                <h5>Chinese, Indian, Continental</h5>
                <h5>4.4 stars</h5>
        </div>
)}

const BodyComponent = () => {
    return(
        <div className='body-container'>
            <div className='search'>
                <button>Search</button>
            </div>
            <div className='resro-container'>
                <RestaurantCard />
                <RestaurantCard />
            </div>
        </div>
    )
}


const Footer = () => {

}



const AppLayout = () =>{
    return(
        <>
            <Header />
            <BodyComponent />
            <Footer />
        </>
    )}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<AppLayout />)