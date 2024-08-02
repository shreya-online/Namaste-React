import React from "react";

class UserClass extends React.Component {
    render(){
        return (
            <div className='user-card'>
                <p>Data from class component</p>
                <h2>Name: Akshay</h2>
                <h3>Location: Dehradun</h3>
                <h4>Contact: @akshaymarch7</h4>
            </div>
        )
    }
}
export default UserClass;