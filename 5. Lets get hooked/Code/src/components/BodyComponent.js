import React from 'react';
import RestaurantCard from './RestaurantCard';
import resList from '../utils/restaurantData';

const BodyComponent = () => {
    return(
        <div className='body-container'>
            <div className='search'>
                <button>Search</button>
            </div>
            <div className='filter'>
                <button className='filter-btn'>Top Rated Restaurants</button>
            </div>
            <div className='restro-container'>
              
                {
                  resList.map( (restaurant) => (<RestaurantCard resData= {restaurant} />)
                )}
                
            </div>
        </div>
    )
}
export default BodyComponent;