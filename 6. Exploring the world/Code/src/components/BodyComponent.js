import React, { useState, useEffect } from 'react';
import RestaurantCard from './RestaurantCard';
import resList from '../utils/restaurantData';

const BodyComponent = () => {

  const [listOfRestaurants, setListOfRestaurants] = useState(resList)

  
    return(
        <div className='body-container'>
            <div className='search'>
                <button>Search</button>
            </div>
            <div className='filter'>
                <button className='filter-btn' onClick={ () =>{
                    let filteredList= listOfRestaurants.filter(
                        (res) => res.data.avgRating > 4 
                    );
                    setListOfRestaurants(filteredList)
                }}>
                    Top Rated Restaurants</button>
            </div>
            <div className='restro-container'>
              
                {/* {
                  resList.map( (restaurant) => (<RestaurantCard key={restaurant.data.id} resData= {restaurant} />)
                )} */}

            {
                listOfRestaurants.map( (restaurant) => (<RestaurantCard key={restaurant.data.id} resData= {restaurant} />)
            )}
                
            </div>
        </div>
    )
}
export default BodyComponent;