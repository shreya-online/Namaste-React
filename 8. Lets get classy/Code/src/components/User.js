import React, { useEffect } from 'react'
import {useState} from 'react'

const User = ({name}) =>{

    const [count]= useState(0);
    const [count2, setCount]= useState(1);

    // replication ofcomponentDidUpdate in Functional component
    useEffect(()=>{
        const timer =setInterval(()=>{
            console.log("SetInterval from functional component")
        },1000);

        // replication ofcomponentWillUnmount in Functional component
        return() =>{
            clearInterval(timer)
            console.log("SetInterval Cancelled replicating componentWillUnmount")
        };
    }, []);

    return(
        <div className='user-card'>
            <p>Data from functional component</p>
            <h5>Count = {count}</h5>
            <h5>Count2: {count2}</h5>
            <h2>Name: {name}</h2>
            <h3>Location: Dehradun</h3>
            <h4>Contact: @akshaymarch7</h4>
        </div>
    )
}
export default User;