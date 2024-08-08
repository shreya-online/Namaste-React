import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () =>{
//this will give us all the errors in the path. All the errors which are thrown, react router dom will catch and give it to us in this object
    const err = useRouteError();
    console.log(err);
    return(
        <div>
            <h1>Opps its not you!!! Its us.  Something went wrong</h1>
            <h3>{err.status}: {err.statusText}</h3>
        </div>
    )
}
export default Error;