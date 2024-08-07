import React from "react";
import User from "./User";
import UserClass from "./UserClass";


// Converting parent functional component into a parent class component (parent of UserClass.js)
    class About extends React.Component{
        constructor(props){
            super(props);
            // console.log("Parent Constructor")
        }

        componentDidMount(){
            // console.log("Parent ComponentDidMount")
        }
        
        render(){
            // console.log("Parent render")
            return(
                <div>
                    <h1>About us page Class component</h1>
                    {/* <User name={"Akshay Saini(functional comp)"}/> */}
                    <UserClass name={"First Child"} location={"Dehradun Class"}/>
                    {/* <UserClass name={"Second Child"} location={"US Class"}/> */}
                </div>
                )
            }
}   

// const About= () =>{

//     return(
//         <div>
//             <h1>About us page</h1>
//             {/* <User name={"Akshay Saini(functional comp)"}/> */}
//             <UserClass name={"Akshay Saini (Class Comp)"} location={"Dehradun Class"}/>
//         </div>
//     )
// }
export default About;