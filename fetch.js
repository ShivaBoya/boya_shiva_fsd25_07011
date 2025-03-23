// You are tasked with simulating a data fetching function that occasionally fails. The goal is to:

// Write a function fetchData that simulates data fetching using a Promise with a 50% chance of success or failure.
// So we know that above logic seems to be a bit tricky but think about a way in JS where you can randomly generate a number between 1 and 0 and based on that you assign truthy and falsy values . (Now it should be easier , if not then you should go and learn about truthy and falsy values along with how to generate random numbers in JS)
// Write an async function fetchDataHandler to:
// Use async/await to handle the result of the fetchData function.
// Log "Fetched data successfully!" if the fetch is successful.
// Log "Error fetching data" along with the error message if the fetch fails.
// Steps to Solve:
// Simulate Data Fetching with a Promise:

// Create a function fetchData that simulates an asynchronous operation using setTimeout.
// Use Math.random() to introduce a 50% chance of failure:
// If the random number is greater than 0.5, resolve the promise with a success message.
// Otherwise, reject the promise with an error message.
// Create an Async Handler Function:

// Write a function fetchDataHandler to call fetchData using async/await.
// Use try...catch to handle the promise:
// In the try block, await the result of fetchData and log the success message.
// In the catch block, handle the error by logging "Error fetching data" along with the error message.
// Simulate the Workflow:

// Call fetchDataHandler to demonstrate the workflow.
// Observe both success and failure cases when running the program multiple times.
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.5) {
                resolve("Fetched data successfully!");
            } else {
                reject("Network error");
            }
        }, 1000);
    });
}

async function fetchDataHandler() {
    try {
        const result = await fetchData();
        console.log(result);
    } catch (error) {
        console.log("Error fetching data:", error);
    }
}

