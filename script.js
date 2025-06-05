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
