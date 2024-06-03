### Q: What is Emmet?
ANS: Emmet is a plugin for many popular text editors that greatly improves HTML and CSS workflow. It's essentially a shorthand system that allows developers to write large chunks of code quickly and efficiently. Emmet uses an abbreviation system that expands into full-fledged HTML or CSS code.
Example ->
Type html:5 and press Tab to generate a basic HTML5 template:
```
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Document</title>
            </head>
            <body>
                
            </body>
            </html>
```

### Q: What is CDN? Why do we use it?
ANS: A Content Delivery Network (CDN) is a network of geographically distributed servers that work together to deliver web content to users more efficiently. Instead of serving content from a single origin server, CDNs cache static content, such as images, CSS files, JavaScript files, videos, and other types of web assets, on multiple servers located in different geographic locations.

When a user requests content from a website or web application, the CDN delivers the content from the server that is geographically closest to the user, reducing latency and speeding up content delivery. This distributed approach to content delivery improves website performance, enhances scalability, and provides better reliability and availability.

CDNs offer several key benefits:

1. Faster Content Delivery: By serving content from servers located closer to users, CDNs reduce the time it takes to retrieve and load web pages, resulting in faster page load times and improved user experience.
2. Improved Website Performance: CDNs help offload traffic from origin servers, reducing their load and improving overall website performance and responsiveness, especially during periods of high traffic or traffic spikes.
3. Scalability: CDNs can handle large volumes of traffic and scale dynamically to accommodate fluctuations in demand, ensuring consistent performance and availability even under heavy load.
4. Redundancy and Reliability: CDNs offer redundancy and failover capabilities, ensuring high availability and reliability. If one CDN server goes down or experiences issues, requests can be automatically rerouted to other healthy servers in the network, minimizing downtime and service disruptions.
5. Security: Many CDNs provide security features such as DDoS protection, web application firewalls, SSL/TLS encryption, and content security policies, helping to protect websites and web applications from various cyber threats and attacks.


### Q: Why do we include two CDN react links, one for react and other for react-dom while including React via CDN?
ANS: When including React via CDN in a web application, you typically see two different CDN links: one for react and one for react-dom. 
1. react
The react package contains the core React library. It includes the foundational components and APIs for creating React elements, components, hooks, and other functionalities that allow you to define and manage the component structure of your application.

2. react-dom
The react-dom package provides DOM-specific methods that allow you to manage the React component tree and interact with the DOM. This package contains methods for rendering components to the DOM, handling events, and managing the virtual DOM.

Why Separate Packages?
Modularity: Keeping react and react-dom separate allows for better modularity and maintainability. The core react package can be used in environments where a DOM is not present, such as server-side rendering with react-dom/server, mobile development with React Native, or even other platforms like React VR.

Flexibility: This separation allows React to be more flexible and adaptable to different environments. For instance, React Native uses the react package but not react-dom since it does not work with the browser DOM.


### Q: What is crossorigin in script tag?
ANS: The crossorigin attribute in a "script" tag is used to handle CORS (Cross-Origin Resource Sharing) requests for the script. It specifies how the script should be fetched and whether it should be executed with cross-origin privileges. This attribute can take one of the following values:

anonymous: This value tells the browser to perform the CORS request without including credentials (cookies, HTTP authentication, and client-side SSL certificates). This is the most common use case for publicly available resources.

use-credentials: This value tells the browser to include credentials in the CORS request. This is typically used when the resource requires authentication.

Why Use crossorigin?
Using the crossorigin attribute is important when fetching scripts from a different origin, especially when dealing with the following scenarios:

1. Subresource Integrity (SRI): When using the integrity attribute for Subresource Integrity to ensure that the fetched resource has not been tampered with, the crossorigin attribute must be set correctly. If the script is fetched from a different origin, the browser needs to perform a CORS request, and the crossorigin attribute helps to determine how this request is handled.
```
 <script src="https://unpkg.com/react@17/umd/react.development.js"
            integrity="sha384-XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
            crossorigin="anonymous"></script>
    <!-- ReactDOM with SRI and crossorigin -->
    <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"
            integrity="sha384-XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
            crossorigin="anonymous"></script>
```

2. Access-Control-Allow-Origin Header: The server hosting the script must send the appropriate CORS headers, such as Access-Control-Allow-Origin, to allow the browser to load the script. The crossorigin attribute helps to match the CORS policy of the server.

### Q: What will happen if we change the order of script tags in our index.html file?
ANS: **Case 1** If we call <script src="./App.js"></script> at the beginning of the body tag before te React CDN links ->
We will get this error
        Uncaught ReferenceError: React is not defined
        <anonymous> http://127.0.0.1:5500/1. Inception/Code/App.js:1
This is because App.js contains react code which is using React and before defining React through the CDN links we are trying to access that React code

**Case 2** If we interchange the position of the CDN links like calling the react-dom CDN link before the react CDN link, we will get this error ->
        Uncaught TypeError: React is undefined
        React 3
        Uncaught TypeError: ReactDOM.createRoot is not a function
        <anonymous> http://127.0.0.1:5500/1. Inception/Code/App.js:5
This is because React-dom is depended on react and it won't get called without calling react first

### Q: What is the difference between a library and a framework?
ANS: # Library vs. Framework

| Aspect           | Library                                      | Framework                                    |
|------------------|----------------------------------------------|----------------------------------------------|
| **Definition**   | It is a collection of pre-written code to optimize tasks. | It is a platform providing a foundation and predefined structure for building applications. |
| **Control**      | In a library, the developer is in control. The developer calls the library functions as needed. |  In a framework, the framework is in control. It calls the developer's code at specific points, a concept often referred to as "Inversion of Control" (IoC). |
| **Usage**        | Libraries are used to perform specific tasks or add specific functionalities to a program. For example, you might use a library for making HTTP requests, handling dates, or creating user interfaces. | Frameworks provide a comprehensive solution for building applications. They typically include libraries, tools, and a set of conventions for structuring and organizing code. |
| **Flexibility**  | Libraries offer more flexibility, allowing developers to choose when and how to integrate them into their projects. | Frameworks enforces a specific way of doing things and integrates multiple functionalities. |
| **Examples**     | jQuery, Lodash, React.                       | Angular, Django, Spring.                     |


