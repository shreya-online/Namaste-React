import React from 'react'

const User = ({name}) =>{
    return(
        <div className='user-card'>
            <p>Data from functional component</p>
            <h2>Name: {name}</h2>
            <h3>Location: Dehradun</h3>
            <h4>Contact: @akshaymarch7</h4>
        </div>
    )
}
export default User;