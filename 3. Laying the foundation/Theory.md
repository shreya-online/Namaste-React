## Q: What is `JSX`?
ANS: `JSX` stands for JavaScript XML. It is a syntax extension for JavaScript commonly used with React. JSX allows developers to write HTML-like code within JavaScript, making it easier to describe the UI structure in a way that is both readable and maintainable.

`Transpiling JSX`
Since browsers do not understand JSX natively, it needs to be transpiled into JavaScript. This is typically done using Babel:
npx babel src --out-dir dist -> This command transpiles the JSX files in the src directory and outputs the JavaScript files in the dist directory.
[Transpilation, a portmanteau of transformation and compilation, is the process of converting source code from one high-level programming language to another. Unlike traditional compilers, transpilers don't convert code into machine language; instead, they transform it into another source code language.]


## Q: What is `Babel`?
ANS: Babel is a JavaScript compiler that allows developers to use next-generation JavaScript (ES6/ES7/ES8, etc.) today by converting it into a version of JavaScript that can run in current and older browsers. Babel can also transform JSX syntax used by React into standard JavaScript. It is a powerful tool in modern web development for enabling the use of the latest language features and syntactic sugar without waiting for browser support.

Key Features of Babel
- Transpilation: 
  - ES6+ to ES5: Babel converts ECMAScript 2015+ (ES6+) code into backward-compatible JavaScript that can run in older browsers.
  - JSX to JavaScript: Transforms JSX syntax used in React applications into standard JavaScript function calls.

- Plugins and Presets:
  - Plugins: Babel's functionality can be extended using plugins that allow you to transform specific language features. For example, there are plugins for class properties, async/await, and more.
  - Presets: Presets are collections of plugins that work together to transpile code in a specific way. Common presets include @babel/preset-env for ECMAScript features and @babel/preset-react for React.

- Polyfilling: Babel can also include polyfills for new JavaScript features that are not supported in all environments. This is often done using a tool like core-js.
- Source Maps: Babel can generate source maps to help with debugging by mapping the transpiled code back to the original source code.


## Q: What is a `Component Composition` in React?
ANS: Component composition in React involves combining smaller, independent components to create complex UIs. Each sub-component can contain further components, enhancing code readability. This process breaks down the UI into manageable pieces, aiding traceability, scalability, and maintenance.

## References:
- [Babel](https://babeljs.io/)
- [Attribute Type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script#attr-type)
- [JS Modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)
- [Babel Playground](https://babeljs.io/repl#)
- [React without JSX](https://reactjs.org/docs/react-without-jsx.html)
