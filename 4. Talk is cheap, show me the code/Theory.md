## Q: What is `<React.Fragment></React.Fragment>` and `<></>`?

A: `<React.Fragment></React.Fragment>` is a feature in React that allows you to return multiple elements from a React component by allowing you to group a list of children without adding extra nodes to the DOM.
`<></>` is the shorthand tag for `React.Fragment`. The only difference between them is that the shorthand version does not support the key attribute.


## Q: What is `Config Driven UI`?
ANS:  A Config-Driven UI is an approach to user interface development where the structure and behavior of the UI are determined by external configuration files rather than hard-coded into the application. This allows for greater flexibility, reusability, and ease of maintenance, as changes to the UI can be made by modifying configuration files without altering the application code.

`Key Concepts of Config-Driven UI`
- Configuration Files: These are usually written in JSON, YAML, or XML and contain the data that defines the UI components, their properties, and their relationships.

- Dynamic UI Generation: The UI is generated dynamically at runtime based on the configuration files, allowing for changes to be reflected immediately without redeploying the application.

- Separation of Concerns: By separating the UI logic from the application logic, developers and designers can work more independently. Designers can modify the UI layout and appearance without requiring changes to the underlying application code.

- Flexibility and Scalability: Config-driven UIs can be easily extended or modified to accommodate new features or changes in requirements by updating the configuration files.

