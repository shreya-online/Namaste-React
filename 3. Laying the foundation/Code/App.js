import React from 'react';
import ReactDOM from 'react-dom/client'

// written using core react.
/*   Here, React.createElement creates  => ReactElement (which is a JS Object) gets converted to =>  HTMLElement(by root.render)
*/
const heading = React.createElement("h1", {id: "heading"}, "Hello there!!!") 
const root =ReactDOM.createRoot(document.getElementById('root')) 
root.render(heading)

// same code as above but written with jsx
/*   Here, JSX converted to (by babel)=> React.createElement creates  => ReactElement (which is a JS Object) gets converted to => 
     HTMLElement(by root.render)
*/
const jsxHeading = <h1 id='heading'>Hi i am jsx !!</h1>
root.render(jsxHeading)

//React Element
const titleElement =(
     <h1>
          Namaste
     </h1>
);

// Component Compositions -> composing 2 components into one another
const Title =() =>{
     <h1>
          Namaste React Title
     </h1>
}
const FunComponent = () =>{
     <div>
          <Title />
          <h1>
               Welcome to the course
          </h1>
     </div>
}
root.render(<FunComponent />)

//How to insert React Element inside a functional omponent
const titleElement2 =(
     <h1>
          React Element2
     </h1>
);
const funcComponent2 = () =>{
     {titleElement2}
}

// How to insert a React Element inside another React element
const titleElement3 =(
     <span>
          React Element3
     </span>
);
const elem = (
     {titleElement3}
)