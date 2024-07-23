import React from 'react';
import { IMG_URL } from '../utils/constants';


const RestaurantCard = (props) =>{
    const {resData} = props
    const {name, cuisines, avgRating, costForTwo, sla} = resData?.info;

    return(
        <div className='restro-cards'>
                <img src={IMG_URL+'/' +resData.info.cloudinaryImageId}
                alt='restro-cardImg'
                className='restro-cardImg'
                />

                <h3>{name}</h3>
                <p>Cuisines: {cuisines.join(', ')}</p>
                <p>Rating: {avgRating}</p>
                <p>Cost: {costForTwo}</p>
                <p>ETA: {sla.slaString}</p>
        </div>
)}
export default RestaurantCard;