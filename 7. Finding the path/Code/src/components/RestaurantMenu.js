import React from 'react'
import { useEffect, useState } from 'react';
import Shimmer from './Shimmer';

const RestaurantMenu = () =>{

    const [resInfo, setResInfo]= useState(null);
    

    useEffect(()=>{
        fetchMenu();
    },[])

    const fetchMenu= async() =>{
        const data = await fetch('https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=65797&catalog_qa=undefined&submitAction=ENTER')
        const jsonData = await data.json();
        console.log(jsonData.data)
        setResInfo(jsonData.data)
    }

    if (resInfo === null) return <Shimmer/> 
    
    const {name, costForTwoMessage, cuisines, id, avgRating , locality, totalRatingsString, sla} = resInfo?.cards[2]?.card?.card?.info;
    const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[7].card?.card

    console.log( "11",resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[7].card?.card)

    return (
        <div>
            <h1>{name}</h1>
            <h4>{avgRating}{" (" + totalRatingsString+ ")"} - {costForTwoMessage}</h4>
            <h4>{cuisines.join(", ")}</h4>
            
            <ul>
                <li>Biriyani</li>

            </ul>
        </div>
    )
}
export default RestaurantMenu;