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

//API helps us  send and retrieve data from a server. When sending data to the server, ensure it is an asynchronous operation so that it does not block the execution of other codes.
//Example of an API call is "fetch()";

//The fetch() function takes in parameters and returns a promise. 


// Types of API requests:
// 1. Get request: This is used to retrieve data from a server. It is an asynchronous operation.

// 2. Post request: This is used to send data to a server. It is also an asynchronous operation.

// 3. Put request: This is used to update or edit data on a server. It is also an asynchronous operation.

// 4. Delete request: This is used to delete or remove data from a server. It is also an asynchronous operation.

// A promise is either resolved or rejected. A promise is resolved when the operation is successful and rejected when the operation fails.


const apiCall = () => {
    const check = fetch("https://jsonplaceholder.typicode.com/posts", {method: "GET"})
    // .then(res => res.json()) // This converts the response to JSON format.
    // .then(ade => ade.json());
    //OR
     
    .then(data => console.log(data));

}
apiCall();