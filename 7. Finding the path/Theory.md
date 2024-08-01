## Q: What are the 2 types of routing?
ANS: `Server-side`: When browsing, the adjustment of a URL can make a lot of things happen. This will happen regularly by clicking on a link, which in turn will request a new page from the server. This is what we call a server-side route. A whole new document is served to the user.

A server-side request causes the whole page to refresh. This is because a new GET request is sent to the server which responds with a new document, completely discarding the old page altogether.

A server-side route will only request the data that’s needed. No more, no less.

`Client-side`: A client-side route happens when the route is handled internally by the JavaScript that is loaded on the page. When a user clicks on a link, the URL changes but the request to the server is prevented. The adjustment to the URL will result in a changed state of the application. The changed state will ultimately result in a different view of the webpage. This could be the rendering of a new component, or even a request to a server for some data that the application will turn into some HTML elements.

It is important to note that the whole page won’t refresh when using client-side routing. There are just some elements inside the application that will change.
- `React Router`: This is the most popular library for client-side routing in React applications. It allows developers to define routes and render different components based on the URL path. React Router manipulates the browser's history API to ensure that navigation is efficient and smooth, without full page reloads. It provides various hooks like useHistory, useLocation, and useParams to help manage routing logic.


## Q: What is a single page application(SPA)
ANS: A Single Page Application (SPA) is a web application that interacts with the user by dynamically rewriting the current page rather than loading entire new pages from the server. This approach allows for a more fluid, responsive user experience, similar to a desktop application.

Key Characteristics of Single Page Applications:
`Dynamic Content Loading:` SPAs load a single HTML file initially, and then use JavaScript to dynamically update the content as users interact with the app. This means that after the initial page load, only data is exchanged between the client and server, usually via AJAX requests or APIs, without requiring a full page reload.

`Smooth User Experience:` The absence of full page reloads allows for a more seamless and responsive user experience. Navigation between different views or states within the application feels instantaneous because the browser doesn't need to refresh and re-render the entire page.

`Use of Client-Side Routing:` SPAs typically use client-side routing, where the URL changes do not trigger a full page reload but instead are managed by JavaScript. This allows for deep linking and bookmarking while maintaining the single-page experience.

`Rich Interactivity:` SPAs can offer a high level of interactivity and complex user interfaces, often resembling traditional desktop applications. Features like real-time data updates, drag-and-drop functionality, and rich media can be easily integrated.