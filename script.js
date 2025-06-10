// // Synchronous JavaScript code execution: The tasks will run one after another in the order they are written.
// console.log ("First Task");
// console.log ("Second Task");
// console.log ("Third Task");
// console.log ("Fourth Task");

// // For Asynchronous JavaScript, the tasks may not run in the order they are written, depending on how they are scheduled.


// // for (let i=0; i > 1000; i++){
// //     console.log("Delay");
// // }
// //setTimeout(): This function is an asynchronous function because it does not block the execution of the other codes that follow it. It runs other code while waiting for the specified time to pass.
// // setTimeout(() => {
// //     console.log("Asynchronous Task");
// // }, 2000);


// //Callback functions: This is a function passed into another function. 
// //NOTE: callback functions are most often used asynchronous functions
// const caller = (task) => {
//     for (let i = 0; i < 1000; i++) {
//         console.log("Delay Task");
//         task();
//     }
// }

// //Using call back function: Instead of using the function directly like caller(), we pass it as an argument to another function.
// function call(){
//     setTimeout(() => {
//         caller();
//     }, 1000);
// }
// call()
// console.log("Continue Tasks");

//API(Application programming interface) helps us  send and retrieve data from a server. When sending data to the server, ensure it is an asynchronous operation so that it does not block the execution of other codes. 
//Example of an API call is "fetch()";

//The fetch() function takes in parameters and returns a promise. 


// Types of API requests:
// 1. Get request: This is used to retrieve data from a server. It is an asynchronous operation.

// 2. Post request: This is used to send data to a server. It is also an asynchronous operation.

// 3. Put request: This is used to update or edit data on a server. It is also an asynchronous operation.

// 4. Delete request: This is used to delete or remove data from a server. It is also an asynchronous operation.

// A promise is either resolved or rejected. A promise is resolved when the operation is successful and rejected when the operation fails.

//NOTE: Calling a function might not need curly braces, but when calling multiple functions, you need to use curly braces to wrap the function calls.

// Parameters are variables that are passed into a function. They allow you to pass data into a function so that it can be used within the function.

// const apiCall = () => {
// //     const check = fetch("https://jsonplaceholder.typicode.com/posts", {method: "GET"})
// //     .then(res => res.json()) // This converts the response to JSON format.
// //     // .then(ade => ade.json())//ade can be replaced with any variable name.
// //     .then(data => console.log(data));
    

// // }
// // apiCall();

// // OR

fetch('https://jsonplaceholder.typicode.com/posts').then(
    res => res.json().then(
        data => console.log(data) // This converts the response to JSON format and logs the data to the console.
    )
)

// fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json().then(data => console.log(data)).catch(error => console.log("An Error Occured: ", error)))

//Destructuring
const {name, age, height} ={
    name: "Adeola",
    age: 25,
    height: "5'6"
}
console.log(name, age, height); // This destructures the object and logs the values to the console.


//06-05-2025
//Error Handling in JavaScript
//Using the try-catch block.
try {
    fetch(url);// Try to fetch this data from the server.
    //if there is an error, it will be caught in the catch block.
}catch{
    console.log(err);
}finally{
    console.log("This will handle the errors that the try and catch cant");
    // This block will always run, regardless of whether an error occurred or not.  
}

//Callbacks are used to handle asynchronous operations in JavaScript. They allow you to execute a function after another function has completed its execution.
setTimeout (() => {
    // The (() => {}) is the call back function that handles asynchronous operations well.
}, 2000); // This will run after 2 seconds.
 
// //JSON
// J & S - JavaScript
// O - Object
// N - Notation 
//JSON is a lightweight data interchange format that is easy for humans to read and write, and easy for machines to parse and generate. It is often used to transmit data between a server and a web application.

//.then and .catch methods are used to handle promises.
// let movies =fetch (url);
// let newMovies = fetch(url).then(res => res.json());
// console.log(movies); 

// //OR
// let movies =fetch (url);
// let newMovies = fetch(url)
// .then(response => {
//     return response.json();
// })
// .then(data => console.log(data));
// console.log(movies); 

// async function fetchMovies() {
//     let blogPosts = await fetch('https://jsonplaceholder.typicode.com/posts');
//     let relativePosts = await blogPosts.json();
// }
//The async function shows that we are dealing with promises, it converts the function to a p. The await will wait for the promise to be resolved before executing the next line of code. 
//N.B: If you use await, you must use the async keyword before the function declaration, you shouldn't use await with the ".then" method because they both serve the same purpose of handling promises. 
// Promises will go to the microtask queue while the async function will go to the call stack.

// A-CALL STACK: Stacks tasks in the order they are called, executing them one by one from the top of the stack(in a LIFO manner - Last In First Out).
// B-WEB APIS: The tasks that take time to execute, such as setTimeout, fetch, etc are handled by the Web APIs. They are managed by the browser and are not part of the JavaScript engine.
// C-CALLBACK QUEUE ~~ MICROTASK QUEUE: This is where the tasks that are ready to be executed are stored. It holds the tasks that are waiting to be executed after the current task in the call stack is completed.  The callback queue is also known as the microtask queue. 
// D-EVENT LOOP: Constantly checks if there are events that needs to be added to the call stack for execution.

console.log ('I am a boy');
setTimeout(() => {
    console.log ('How are you?')
}, 2000);
console.log ('I am fine');


//Immediately Invoked Function Expression (IIFE): This is a function that is executed immediately after it is defined. It is used to create a new scope and avoid polluting the global scope.
// They are immediately executed and do not need to be called later like:( function(){})..