## Q: What is `Monolith architecture`?
ANS: Monolithic architecture is a traditional software design approach where an entire application is developed as a single unit or codebase, typically comprising a frontend user interface, backend server-side application, and database. In this architecture, all components of the application are tightly coupled and interconnected, sharing the same runtime process and resources. Monoliths are characterized by simplicity in development and deployment, as they are easier to set up and maintain initially. However, as the application grows in size and complexity, monolithic architectures can become challenging to scale and maintain due to their inherent tight coupling and the need to redeploy the entire application for updates or changes which can slow down development and release cycles.


## Q: What is `Microservice`?
ANS: Microservices is an architectural style that structures an application as a collection of small, autonomous services modeled around a business domain. Each service runs in its own process, can be developed and deployed independently, and communicates with other services through well-defined APIs, typically using HTTP/REST or messaging protocols. This approach contrasts with the traditional monolithic architecture, where all components are interwoven and deployed as a single unit. Microservices offer several benefits, including improved scalability, flexibility, and resilience, as each service can be scaled, updated, and maintained independently. Additionally, they enable organizations to use a diverse set of technologies and languages for different services, fostering innovation and quicker adaptation to changing business needs. However, the microservices architecture also introduces challenges, such as increased complexity in managing inter-service communication, data consistency, and operational overhead.


## Q: What is Separation of Concerns (SoC) in microservices?
ANS:  Separation of Concerns (SoC) in the context of microservices is a design principle that aims to organize software so that distinct sections or modules address different aspects of the application's functionality. This principle is foundational to the microservices architecture, where the entire application is divided into small, self-contained services, each responsible for a specific business capability or domain.

#### Key Aspects of Separation of Concerns in Microservices
- `Single Responsibility Principle:` Each microservice is designed to handle a single, specific function or business capability. For example, a service might handle user authentication, while another deals with order processing.

- `Modularization:` The application is broken down into independent modules (microservices) that encapsulate their own data and logic. This modular approach simplifies understanding, development, and maintenance of each service.

- `Independent Deployment:` Each microservice can be developed, tested, deployed, and scaled independently of others. This allows for more agile and flexible updates and scaling of individual components without affecting the entire system.

- `Encapsulation:` Services encapsulate their implementation details and expose only necessary interfaces. This ensures that internal changes within a service do not impact other services, promoting loose coupling.

- `Clear Boundaries:` Defined boundaries between services help in maintaining a clean architecture. Each service has a well-defined API for communication, minimizing dependencies and interactions with other services.


#### Benefits of Separation of Concerns in Microservices

- `Scalability:` Individual services can be scaled independently based on demand. For example, a service experiencing high load can be scaled out without affecting other services.

- `Maintainability:` Smaller codebases are easier to manage and understand. Bugs and enhancements can be addressed within the specific service, reducing the risk of introducing issues in unrelated parts of the application.

- `Agility:` Teams can work on different services simultaneously, using different technologies and frameworks best suited for each service. This parallel development accelerates the delivery of new features and improvements.

- `Resilience:` The failure of one service does not necessarily bring down the entire application. Other services can continue to operate, and the system can be designed to handle such failures gracefully.


#### Challenges of Separation of Concerns in Microservices

- `Complexity in Management:` Managing multiple services, each with its own deployment pipeline, can be complex. Proper tools and practices are required to handle this complexity effectively.

- `Data Consistency:` Ensuring data consistency across services can be challenging. Distributed data management and transactions need careful handling.

- `Inter-Service Communication:` Efficiently managing communication between services, including latency, fault tolerance, and data transformation, requires robust design and implementation.


## Q: What is `CORS`?
ANS: CORS (Cross-Origin Resource Sharing) is a security feature implemented by web browsers that allows or restricts web pages from making requests to a domain different from the one that served the web page. This is essential for protecting users from cross-site request forgery (CSRF) attacks and other malicious activities that can arise from unauthorized cross-origin requests.

=> `How CORS Works`

1. `Same-Origin Policy:`
- By default, web browsers enforce a same-origin policy, which means that scripts running on a web page can only make requests to the same domain from which the page was loaded. This policy prevents malicious websites from accessing sensitive information on other sites without permission.

2. `CORS Headers:`
- To allow cross-origin requests, the server must include specific HTTP headers in its responses. These headers inform the browser that it is safe to permit the cross-origin request.

3. `Preflight Requests:`
- For certain types of requests, particularly those that are not simple GET or POST requests with standard headers, browsers send an HTTP OPTIONS request to the server before the actual request. This preflight request checks whether the server will allow the actual request.

=> `Key CORS Headers`

1. `Access-Control-Allow-Origin:`
- Specifies which origins are permitted to access the resource. A wildcard (*) can be used to allow any origin, but this is often discouraged for security reasons.
- Example: Access-Control-Allow-Origin: https://example.com

2. `Access-Control-Allow-Methods:`
- Specifies the HTTP methods (e.g., GET, POST, PUT, DELETE) that are allowed when accessing the resource.
- Example: Access-Control-Allow-Methods: GET, POST, PUT

3. `Access-Control-Allow-Headers:`
- Specifies the headers that can be used in the actual request.
- Example: Access-Control-Allow-Headers: Content-Type, Authorization

4. `Access-Control-Allow-Credentials:`
- Indicates whether the response to the request can be exposed when the credentials flag is true. This is used for requests that include credentials such as cookies, HTTP authentication, or client-side SSL certificates.
- Example: Access-Control-Allow-Credentials: true

5. `Access-Control-Max-Age:`
- Indicates how long the results of a preflight request can be cached.
- Example: Access-Control-Max-Age: 3600

=> `Example Scenario`
Suppose you have a web application hosted at https://example.com that needs to make a request to an API at https://api.example.com.

`Client-Side JavaScript`

``` fetch('https://api.example.com/data', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
  credentials: 'include' // To send cookies or other credentials
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));
```

`Server-Side Configuration (Express.js Example)`

```
const express = require('express');
const cors = require('cors');
const app = express();

const corsOptions = {
  origin: 'https://example.com', // Allow requests from this origin
  methods: 'GET,POST,PUT,DELETE',
  allowedHeaders: 'Content-Type,Authorization',
  credentials: true, // Allow credentials (e.g., cookies)
};

app.use(cors(corsOptions));

app.get('/data', (req, res) => {
  res.json({ message: 'This is a CORS-enabled response.' });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
```

=> `Common CORS Issues`

1. `Missing CORS Headers:` If the server does not include the necessary CORS headers, the browser will block the request and log a CORS error in the console.

2. `Incorrect Configuration:` Misconfigured CORS settings can lead to unintended access issues. For example, not specifying the correct origin or allowed methods can prevent legitimate requests from being processed.

3. `Preflight Request Failures:` If the server does not handle preflight OPTIONS requests correctly, the actual request will be blocked by the browser.

=> `Best Practices for CORS`

1. `Restrict Origins:` Only allow specific origins that need access to your resources. Avoid using the wildcard (*) unless absolutely necessary.

2. `Limit Methods and Headers:` Specify only the HTTP methods and headers that are necessary for your application.

3. `Use Secure Protocols:` Ensure that both the client and server are using HTTPS to protect data in transit.

4. `Handle Credentials Securely:` Only allow credentials when necessary and ensure proper authentication and authorization mechanisms are in place.