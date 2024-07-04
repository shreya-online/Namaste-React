import React, { useState, useEffect } from 'react';
import RestaurantCard from './RestaurantCard';
import resList from '../utils/restaurantData';

const BodyComponent = () => {

  const [listOfRestaurants, setListOfRestaurants] = useState(resList)

  useEffect( () =>{
    fetchData();
  }, []);
  
    const fetchData = async() =>{
      const data = await fetch(
        'https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
      );

      const json =await data.json();
      console.log(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

      //Right code but giving error
      setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    if(listOfRestaurants ===0){
      return (
        <h1> Loading...</h1>
      )
    }
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
                listOfRestaurants.map( (restaurant,index) => (<RestaurantCard key={restaurant.data.id} resData= {restaurant} />)
            )}
                
            </div>
        </div>
    )
}
export default BodyComponent;