import React from 'react';
import ReactDOM from 'react-dom/client'

const heading = React.createElement("h1",{
    id: "heading"
}, "Namaste React")

        const root = ReactDOM.createRoot(document.getElementById("root"));

        root.render(heading);


/*  *******Nested Structure of createElement with parent child structure like -> ********* 
<div id="parent" >
    <div id="child">
        <h1>Nested parent child structure of createElement</h1>
    </div>
</div>  
*/
const parent = React.createElement("div",{id: "parent"}, 

        React.createElement("div", {id: "child"}, 
        React.createElement("h1", {id: "heading"}, "Nested parent child structure of createElement")
    )   
);

root.render(parent)


/*  *******Nested Structure of createElement with sibling like structure-> ********* 
<div id="parent">
    <div id="child">
        <h1>Tag 1</h1>
        <h2>Tag 2</h2>
    </div>
</div>  
*/

const parent1 = React.createElement("div", {id: "parent"},
    
        React.createElement("div", {id: "child"},[
            React.createElement("h1",{id: 'tagOne'}, "Tag 1"),
            React.createElement("h2",{id: "tagTwo"}, "Tag 2")
        ])
);
root.render(parent1)

/*  *******Nested Structure of createElement with sibling like and parent child structure-> ********* 
<div id="parent">
    <div id="child">
        <h1>Tag 1</h1>
        <h2>Tag 2</h2>
    </div>
    <div id="child2">
        <h1>Tag 3</h1>
        <h2>Tag 4</h2>
    </div>
</div>  
*/

const parent3 = React.createElement("div", {id: "parent"}, [
        React.createElement("div", {is: "child1"},[
            React.createElement("h1",{},"Tag 1"),
            React.createElement("h2", {}, "Tag 2")
        ])
    ],
    [React.createElement("div", {id: "child2"},[
        React.createElement("h1",{}, "Tag 3"),
        React.createElement("h2",{}, "Tag 4")
    ])
  ]
);
root.render(parent3)
