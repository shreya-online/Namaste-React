import React, { useState } from 'react';
import RestaurantCard from './RestaurantCard';
import resList from '../utils/restaurantData';

const BodyComponent = () => {

    const restaurantJson =[
        {
            data: {
              id: '121603',
              name: 'Kannur Food Point',
              uuid: '51983905-e698-4e31-b0d7-e376eca56320',
              city: '1',
              area: 'Tavarekere',
              totalRatingsString: '10000+ ratings',
              cloudinaryImageId: 'bmwn4n4bn6n1tcpc8x2h',
              cuisines: ['Kerala', 'Chinese'],
              costForTwo: 30000,
              costForTwoString: '₹300 FOR TWO',
              deliveryTime: 24,
              minDeliveryTime: 24,
              maxDeliveryTime: 24,
              avgRating: '3.9',
              totalRatings: 10000,
              new: false,
        },
          },
          {
            data: {
              id: '229',
              name: 'Meghana Foods',
              uuid: '4fdd19e2-5d0f-4bde-9c7f-dc3e8d36021f',
              city: '1',
              area: 'Koramangala',
              totalRatingsString: '10000+ ratings',
              cloudinaryImageId: 'xqwpuhgnsaf18te7zvtv',
              cuisines: [
                'Biryani',
                'Andhra',
                'South Indian',
                'North Indian',
                'Chinese',
                'Seafood',
              ],
              costForTwo: 50000,
              costForTwoString: '₹500 FOR TWO',
              deliveryTime: 16,
              minDeliveryTime: 16,
              maxDeliveryTime: 16,
              avgRating: '4.4',
              totalRatings: 10000,
          },
        },
          {
            data: {
              id: '428',
              name: 'Biryani Pot',
              uuid: '6db20a8b-dd85-4148-b750-107169f7f826',
              city: '1',
              area: 'Btm Layout',
              totalRatingsString: '10000+ ratings',
              cloudinaryImageId: 'mdipoyzfzsa7n7igskht',
              cuisines: ['North Indian', 'Biryani'],
              costForTwo: 50000,
              costForTwoString: '₹500 FOR TWO',
              deliveryTime: 19,
              minDeliveryTime: 19,
              maxDeliveryTime: 19,
              avgRating: '3.9',
              totalRatings: 10000,
          },
        },
          {
            data: {
              id: '223',
              name: 'Truffles',
              uuid: '8250cc38-4752-4f42-928b-4da5f01e5cbe',
              city: '1',
              area: 'Koramangala',
              totalRatingsString: '10000+ ratings',
              cloudinaryImageId: 'cd832b6167eb9f88aeb1ccdebf38d942',
              cuisines: ['American', 'Continental', 'Desserts', 'Italian'],
              costForTwo: 45000,
              costForTwoString: '₹450 FOR TWO',
              deliveryTime: 30,
              minDeliveryTime: 30,
              maxDeliveryTime: 30,
              avgRating: '4.4',
              totalRatings: 10000,
              
            },
          },
          
        
    ]

    // with demo data of restaurantJson
    // const [listOfRestaurants, setListOfRestaurants] = useState(restaurantJson)    

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