## Q: Difference between .js and .jsx entension?
ANS: 
In React development, the choice between .js and .jsx file extensions primarily revolves around the type of syntax used within the file to define React components:

`.js (JavaScript):`

- Files with .js extension contain React components written using standard JavaScript syntax.
- In a .js file, you would typically use React.createElement or createReactClass (if using older versions of React) to create React elements.
- You can still include JSX syntax within a .js file, but you need to ensure that your build system (like Babel) is configured to transform JSX into JavaScript.

`.jsx (JSX):`
- Files with .jsx extension contain React components written using JSX (JavaScript XML) syntax.
- JSX allows you to write HTML-like syntax directly in your JavaScript code, making it easier and more intuitive to define the structure of your React components.
- JSX needs to be compiled into regular JavaScript for the browser to understand. Tools like Babel are commonly used in React projects to transpile JSX into JavaScript.


## Q: Difference between reconciliation, react fiber and diffing algorithm in react
ANS:
1. Reconciliation:

`Definition:` Reconciliation in React refers to the process of comparing the previous state of the virtual DOM with the new state and determining the minimal set of changes needed to update the actual DOM.
`Purpose:` When components are re-rendered due to changes in state or props, React performs reconciliation to efficiently update the UI without re-rendering everything from scratch.
`Key Points:`
React uses a diffing algorithm during reconciliation to identify changes between the previous and current virtual DOM representations.
It aims to update only the parts of the DOM that have changed, optimizing performance by reducing unnecessary DOM manipulations.

2. React Fiber:

`Definition:` React Fiber is a complete rewrite of React's core algorithm for rendering called the "reconciliation algorithm." It was introduced in React 16.
`Purpose:` The primary goal of React Fiber is to improve the ability of React to handle large component trees and make React more predictable in terms of rendering priorities.
`Key Points:`
- React Fiber introduces a new reconciliation engine that can pause and resume work, allowing React to prioritize and schedule updates more efficiently.
- It enables features like async rendering (allowing updates to be interrupted and resumed) and better support for concurrent rendering in the future.

3. Diffing Algorithm:

`Definition:` The diffing algorithm (or reconciliation algorithm) is the specific algorithm used by React to determine the minimal set of changes required to update the UI.
`Purpose:` It ensures that React updates the DOM efficiently by comparing the previous virtual DOM with the current one and identifying which parts need to be updated, inserted, or deleted.
`Key Points:`
- The diffing algorithm aims to optimize performance by reducing unnecessary updates and minimizing DOM manipulations.
- It is fundamental to how React updates the UI in response to changes in state or props, ensuring that the user interface remains in sync with the application's data.

Relationships:

- Reconciliation is the overarching process of comparing virtual DOM states and updating the actual DOM accordingly.
- React Fiber is the implementation of a new reconciliation algorithm (including a diffing algorithm) that enhances React's rendering capabilities and performance.
- Diffing algorithm is a specific part of reconciliation that focuses on efficiently determining the differences between previous and current virtual DOM representations to minimize DOM updates.

[Github Link for React Fiber architecture](https://github.com/acdlite/react-fiber-architecture)