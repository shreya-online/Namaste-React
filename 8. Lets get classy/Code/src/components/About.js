import React from "react";
import User from "./User";
import UserClass from "./UserClass";


const About= () =>{

    return(
        <div>
            <h1>About us page</h1>
            <User name={"Akshay Saini(functional comp)"}/>
            <UserClass name={"Akshay Saini (Class Comp)"} location={"Dehradun Class"}/>
        </div>
    )
}
export default About;