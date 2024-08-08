import React from 'react'
// import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useRestaurantMenu from '../utils/useRestaurantMenu';

import Shimmer from './Shimmer';
// import {MENU_API} from '../utils/constants'

const RestaurantMenu = () =>{

    // const [resInfo, setResInfo]= useState(null);
    
    // const params = useParams();
    // console.log(params)
    // we can destructure the above code and write as 

    const {resId} = useParams();

    const resInfo = useRestaurantMenu(resId)

    // useEffect(()=>{
    //     fetchMenu();
    // },[])

    // const fetchMenu= async() =>{
    //     const data = await fetch(MENU_API+resId)
    //     const jsonData = await data.json();
    //     // console.log(jsonData.data)
    //     setResInfo(jsonData.data)
    // }

    if (resInfo === null) return <Shimmer/> 
    
    const {name, costForTwoMessage, cuisines, id, avgRating , locality, totalRatingsString, sla} = resInfo?.cards[2]?.card?.card?.info;
    const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[7].card?.card


    return (
        <div>
            <h1>{name}</h1>
            <h4>{avgRating}{" (" + totalRatingsString+ ")"} - {costForTwoMessage}</h4>
            <h4>{cuisines.join(", ")}</h4>
            
            <ul>
            {itemCards.map(item => 
                <li key={item.card.info.id}>
                    {item.card.info.name} - Rs {(item.card.info.price)/100} 
                </li>
            )}
               
               {/* <li>{itemCards[0]?.card?.info?.name}</li> 
               <li>{itemCards[1]?.card?.info?.name}</li> */}
               {/* Here "item" acts an iteration(i), and then we iterate it with the required output parameter ->  item.card.info.name */}

            </ul>
        </div>
    )
}
export default RestaurantMenu;