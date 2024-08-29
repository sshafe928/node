# Advanced Array Methods

Manipulating data is highly important. Mastering arrays, methods, and regular expressions (regex) is pivotal for websites, databases, and web applications.

## Mastering Arrays

### Ternaries

- A ternary operator is like a mini `if` statement.
- Syntax: `{conditional ? truepath : falsepath}`

### Spread Operator

- Syntax: `(...)`
- Will iterate through and add all values from an array-like object.
- Spreads the elements (methods and properties) of an array.

### Mapping Arrays

- When you have an array with several items that you want to transform, use `.map()`.
- `.map()` is an array method that processes each item and performs an operation on it.
- `.map()` returns a new array once finished.
- Other methods like `.forEach()` do not create new arrays and instead modify the existing array.

#### Anatomy of `.map()`

1. **Variable Name**: Represents each item from your array. Name it singularly.
   - Example: `people -> person`, `books -> book`
2. **Destructure Item** (optional): Makes setup easier.
   - Example: `const { name, age, job, shirtColor, drink, pet } = person;`
3. **Return the Object**: Return the modified object back to the map.
   - Example: `return { ...person, shirtColor: 'tie-dye' }`

### `.forEach()`

- `.forEach()` does not return a new array; every modification affects the original array.
- You have three values to work with: `value` (item), `index` (position), and `array` (whole).
- The export for a `.forEach()` loop is `undefined`, which can be problematic for return loops.
- You can use conditionals to act depending on the values returned.
- Handle missing variables by:
  - Counting occurrences
  - Breaking up the array into smaller arrays
  - Printing out every name that starts with an "A"

### `.filter()`

- `.filter()` removes certain items from your array.
- It evaluates each item against a conditional you set up; `true` items get added, `false` items are excluded.

### `.every()`

- Checks to make sure every value meets the conditional.
- Returns a boolean.
- Example:
  ```javascript
  const numbers = [-1, -2];
  console.log(numbers.every((num) => num > 100)); // false
  ```

  ## `.some()`

- Similar to `.every()`, it checks if some items meet the conditional.
- Returns `true` if at least one item satisfies the condition.

## `.reduce()`

- A method that accumulates values, finding the total of numbers.
- Not useful for non-number values but great for summing up numbers.

**Example:**

```javascript
const array = [2, 4, 6, 8, 10];
const total = array.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);
```

## `.reduce()`

- `accumulator` refers to the total.
- `currentValue` is the current item being processed.
- `currentIndex` is the index of the current item.
- `array` gives you the entirety of the array.

## Agile Development

- A specific form of development that is currently the most used worldwide.
- Agile development is flexible and suitable for any project.
- It focuses heavily on user experience and client collaboration.

### Individuals and Interactions

- Focus on the team and their working dynamics rather than just the project.
- A happy and well-coordinated team, along with a good client relationship, increases the chance of project success.

### Working Software

- Make the project available to everyone during testing and development.
- Unlike older practices of rendering images and writing instructions, have the project live for feedback and consistent updates.

### Customer Collaboration

- Maintain constant communication with clients to ensure you are creating what they want and what will be best for users.
- Avoid large changes or miscommunications at the project's end.

### Responding to Changes

- Agile is built around the idea that the project and scope can change at any point.
- The project needs to adapt to evolving needs, modern design, software, and team dynamics.

## Agile Principles

1. Your highest priority is to satisfy the customer through early and continuous delivery of valuable software.
2. Welcome changing requirements even late in development. Agile processes harness change for the customer's competitive advantage.
3. Deliver working software frequently, from a couple of weeks to a couple of months, as needed.
4. Business people and developers must work together daily throughout the project.
5. Build projects around motivated individuals. Give them the environment and support they need, and trust them to get the job done.
6. The most efficient and effective method of conveying information to and within a development team is face-to-face conversation.
7. Working software is the primary measure of progress.
8. Agile processes promote sustainable development. Sponsors, developers, and users should be able to maintain a constant pace indefinitely.
9. Continuous attention to technical excellence and good design enhances agility.

## Intro to Node.js

- Node.js is an environment that allows running JavaScript outside of the browser.
- Built using Chrome's V8 JavaScript engine.
- Node.js has a large and active community contributing to available libraries.

### Differences from Browser to Node.js

- No DOM.
- No `window` object to reference.
- Runs server-side applications.
- Great for filesystem operations.
- Uses CommonJS, so you don’t need to worry about ES6 or browser compatibility.

### Installing Node.js

- Node.js is already installed on these computers.
- For personal installations, use the LTS version for stability.

### REPL & CLI

- **REPL (Read-Eval-Print Loop)**: A terminal command that lets you use Node.js interactively. To exit REPL, press `Ctrl + C`.
- **CLI (Command Line Interface)**: Runs JavaScript files and executes them without a browser engine. Type `node filename.js` to run a file.

### Common Commands

- `clear`: Clears the terminal.
- `cd`: Change directory.
- `systeminfo`: Shows information about the computer.
- `ping "www.freecodecamp.org"`: Requests information from the website or IP address.
- `mkdir`: Makes a directory or folder.
- `echo My name is Sabrina Shafer > note.txt`: Creates a text file with specified content.
- `del note.txt`: Deletes `note.txt`.

### Globals

- Several global variables are available anywhere in Node.js:
  - `__dirname`: Path to the current directory.
  - `__filename`: The current file name.
  - `require`: Allows using modules.
  - `module`: Information about the current module.
  - `process`: Information about the environment where the program is executed.

### Modules

- Modules in Node.js are simply files. Every `.js` file is a module.

- Node.js uses `require` instead of `import`.

### OS Module

- Used to return information about the computer and system.

```javascript
const os = require('os');
```

### Path Module

- Used for navigating directories and file paths.

- Includes methods to clean up paths to avoid errors.

```javascript
const path = require('path');
```

## File System (FS) Module

- Extensive module for interacting with files on the computer.

- Import only what you need.

```javascript
const { readFileSync, writeFileSync } = require('fs');
```


## HTTP Module

- Handles server setup and request handling.

- Simplifies the process of creating a server.

```javascript
const http = require('http');
```

## Asynchronous vs. Synchronous

- **Asynchronous**: Non-blocking architecture where tasks run simultaneously.

- **Synchronous**: Blocking architecture where each operation must complete before moving to the next.

## Event Loop

- Key part of how the browser works with async functions and callbacks.

- Philip Roberts has a great explanation of this concept.

## Hypertext Transfer Protocol (HTTP)

- HTTP is how we send information from a browser or URL to a server.

- It’s the typical way users request information from a server.

## HTTP Module

- Node.js excels at server setup and request handling through the HTTP module.

- Methods like `http.createServer()` make server creation straightforward.


## createServer

- http.createServer() takes in a call back function with 2 parameters, 1 for requests and 1 for responce

```javascript
    const server = http.createServer((req,res)=> {})
```

## Req and Responding

- req is an object that represents the http request, typically done throught the url but also through things like fetch()

- res is the responce, or what the server retunrs to the user


## The request object

- There is a lot of information stored in the request object, including url, header, and parameters

- we are going to start with the url to get the location of the pae we are querying

```javascript
    if (req.url === "/") {}
```

## The response object 

- The reponse object has a ton of information as well, including formst, json, and download

- We are going to focus on the required one called .end that ends the responce process


```javascript
    res.end('welcome to our home page')
    else {res.status(404).end(); }
```


# Promise Functions in JavaScript

## What is a Promise?

A Promise in JavaScript is an object representing the eventual completion or failure of an asynchronous operation. It allows you to handle asynchronous operations more gracefully compared to using callbacks.

- Promises are special object that holds information about the values recieved but also whether or not the operation is finished

- Promises are asynchronous so we can use them to run the code and then we can force the rest of the code to wait on the promise

- Promises are special object that holds information about the values recieved but also whether or not the operation is finished

- promises are asynchronous so we can use them to run the code and then we can force the rest of the code to wait on the promise

- You can create multiple promises, the first result from the first promise will automatically be given to the next promise.

- not everything has a promise on it, fetch statements is a promise by default but things like large math problems are not promises, promises are objects so we set them up like any other object

## Key States of a Promise

1. **Pending**: The initial state of a Promise. The operation is still ongoing.
2. **Fulfilled**: The operation completed successfully, and the Promise has a result.
3. **Rejected**: The operation failed, and the Promise has an error.

## Creating a Promise

You create a Promise using the `new Promise` constructor, which takes a function (executor) with two arguments: `resolve` and `reject`.

```javascript
const myPromise = new Promise((resolve, reject) => {
  // Do some async operation
  if (/* operation successful */) {
    resolve('Success!');
  } else {
    reject('Failure!');
  }
});
```

Using Promises
**then():** Handles the result when the Promise is fulfilled.

```javascript
myPromise.then(result => {
  console.log(result); // Logs 'Success!' if resolved
});
```
**catch():** Handles errors if the Promise is rejected.

```javascript

myPromise.catch(error => {
  console.error(error); // Logs 'Failure!' if rejected
});
```
**finally():** Executes a block of code after the Promise is settled, regardless of its outcome.


```javascript

myPromise.finally(() => {
  console.log('Operation complete');
});
```

## Chaining Promises
You can chain multiple then() calls to handle sequential asynchronous operations.

```javascript

myPromise
  .then(result => {
    return anotherAsyncOperation(result);
  })
  .then(newResult => {
    console.log(newResult);
  })
  .catch(error => {
    console.error(error);
  });
```
Example
Here’s a simple example of using a Promise to simulate an asynchronous operation:

```javascript

function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Data fetched successfully');
    }, 2000);
  });
}


fetchData()
  .then(data => {
    console.log(data); // Logs 'Data fetched successfully'
  })
  .catch(error => {
    console.error(error);
  });
```
## Await
- Async / Await are a way that we can use promises

- await is a keyword telling us that we need to wait for the promise to finish and return information


