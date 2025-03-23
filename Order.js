console.log("Begin");
setTimeout(() => { 
    console.log("Timeout Task"); }, 0); 
Promise.resolve().then(() => { 
    console.log("Promise Task"); });
console.log("End");

//console.log("Begin");

// Runs immediately because it's synchronous.
// Begin
// setTimeout(..., 0)
// Moves to the macrotask queue and will execute after the call stack is empty and microtasks .
// Does not run immediately.
// Promise.resolve().then(...)
// This is a microtask, so it waits until the call stack is clear, but executes before the macrotask queue.
// console.log("End");
// Runs immediately because it's synchronous.
//  End
// Promise then() executes
// Since promises (microtasks) run before macrotasks, this executes next.
//  Promise Task
// setTimeout executes (from macrotask queue)
// Finally, setTimeout(..., 0) runs.
//  Timeout Task

