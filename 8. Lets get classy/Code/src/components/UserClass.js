import React from "react";

class UserClass extends React.Component {

    constructor(props){
        super(props);
        console.log(props)
    }
    // render(){
    //     return (
    //         <div className='user-card'>
    //             <p>Data from class component</p>
    //             <h2>Name: {this.props.name}</h2>
    //             <h3>Location: {this.props.location}</h3>
    //             <h4>Contact: @akshaymarch7</h4>
    //         </div>
    //     )
    // }


    // With destructuring the above code can be written as below
    render(){
        const {name, location} = this.props
        return(
            <div className='user-card'>
                <p>Data from class component</p>
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
            </div>
        )
    }
}
export default UserClass;