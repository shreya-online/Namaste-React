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