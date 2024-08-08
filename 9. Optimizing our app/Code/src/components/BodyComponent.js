import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import RestaurantCard from './RestaurantCard';
import resList from '../utils/restaurantData';
import Shimmer from './Shimmer';

const BodyComponent = () => {

  //to proof that with each state variable change, the whole component rerenders . Applicable even during searchText state change
  console.log("Header render")

  // const [listOfRestaurants, setListOfRestaurants] = useState(resList)
  const [listOfRestaurants, setListOfRestaurants] = useState([])

  const [searchText, setSearchText] = useState("");
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  useEffect( () =>{
    fetchData();
  }, []);
  
    const fetchData = async() =>{
      const data = await fetch(
        'https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
      );

      const json =await data.json();
      console.log(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

      //Right code which was giving error earlier
      setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
      setFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    // Conditional rendering
    // if(listOfRestaurants ===0){
    //   return (
    //     / <h1> Loading...</h1>
    //     <Shimmer />
    //   )
    // }
    return listOfRestaurants ===0 ? <Shimmer /> : 
      (
        <div className='body-container'> 
            <div className='filter'>
                <div className='search'>
                    <input type='text' className='search-box' value={searchText} 
                    onChange={ (e) =>{
                        setSearchText(e.target.value)
                        // console.log(e.target.value)
                      } 
                    } />
                    <button className='search-btn' 
                    onClick={ () => {
                      const searchedRestaurant = listOfRestaurants.filter(
                        (res) => res.data.name.toLowerCase().includes(searchText.toLowerCase())
                      )
                        setListOfRestaurants(searchedRestaurant);
                    } }
                  >Search</button>
                    {/* {console.log(searchText)} */}
                </div>

                <button className='filter-btn' onClick={ () =>{
                    let filteredList= listOfRestaurants.filter(
                        (res) => res.data.avgRating > 4 
                    );
                    setFilteredRestaurant(filteredList)
                }}>
                    Top Rated Restaurants</button>
            </div>
            <div className='restro-container'>
              
                {/* {
                  resList.map( (restaurant) => (<RestaurantCard key={restaurant.data.id} resData= {restaurant} />)
                )} */}

            {
                // filteredRestaurant.map( (restaurant) => (<RestaurantCard key={restaurant.info.id} resData= {restaurant} />)
                // filteredRestaurant.map(restaurant => <RestaurantCard key={restaurant.info.id} resData= {restaurant} />
                // 2nd one too gives same output

                filteredRestaurant.map( (restaurant) => (
                  <Link to={"/restaurant/"+ restaurant.info.id} key={restaurant.info.id}>
                    <RestaurantCard  resData= {restaurant} /> 
                  </Link>)
                  // Key should be on the parent tag of map function
                  //Link is a special component given to us by react-router-dom. But behind the scenes, link is using anchor tag and 
                  // this can be observed in the element tab of devtools. Link acts like a wrapper over anchor tag coz browser doesn't understand what is a link
            )}
                
            </div>
        </div>
    )
}
export default BodyComponent;