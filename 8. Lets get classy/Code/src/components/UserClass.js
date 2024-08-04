import React from "react";

class UserClass extends React.Component {

    constructor(props){
        super(props);
        console.log(props)
        this.state = {
            count: 0,
            count2: 2,
        }
    }

    // render(){
    //     return (
    //         <div className='user-card'>
    //             <p>Data from class component</p>
    //             <p>Count: {this.state.count}</p>
    //             <p>Count2: {this.state.count2}</p>
    //             <h2>Name: {this.props.name}</h2>
    //             <h3>Location: {this.props.location}</h3>
    //             <h4>Contact: @akshaymarch7</h4>
    //         </div>
    //     )
    // }


    // With destructuring the above code can be written as below
    render(){
        const {name, location} = this.props
        const {count, count2} = this.state

        return(
            <div className='user-card'>
                <p>Data from class component</p>
                <h3>Count: {count}</h3>
                <button onClick={()=>{
                    // NEVER UPDATE STATE VARIABLES DIRECTLY AS SHOWN BELOW
                    // this.state.count= this.state.count + 1
                    this.setState({
                        count: this.state.count + 1
                        // We can update other state variable here as well
                    })
                }}>Count Increase</button>
                <p>Count2: {count2}</p>
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
            </div>
        )
    }
}
export default UserClass;