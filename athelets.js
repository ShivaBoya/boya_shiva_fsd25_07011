// A sports academy tracks athlete details, including name, sport, scores, and personal details. You need to extract and manipulate data using destructuring and the spread operator.

// Dataset:
const athletes = [
  { name: "Virat", sport: "Cricket", scores: [89, 75, 102], age: 35 },
  { name: "Sindhu", sport: "Badminton", scores: [21, 19, 25], age: 29 },
  { name: "Neeraj", sport: "Javelin", scores: [88, 90, 85], age: 26 }
];
// Tasks:
// 1️⃣ Extract the first athlete's name and sport using destructuring.

// 2️⃣ Destructure the scores of Neeraj, storing the first two separately and the rest in another variable.

// 3️⃣ Create a new object for Neeraj using the spread operator, updating his age to 27 and adding worldChampion: true.

// 4️⃣ Merge all scores from all athletes into a single array using the spread operator.

// Expected Output:
// "Virat plays Cricket"
// 88, 90, [85]
// { name: "Neeraj", sport: "Javelin", scores: [88, 90, 85], age: 27, worldChampion: true }
// [89, 75, 102, 21, 19, 25, 88, 90, 85]

// Submission Guidelines
// Implement the solution and ensure that it runs without errors.

// Include comments in your code to explain the logic and flow.

// Submit your GitHub directory Link./

const { name : firstname ,sport : firstsport} = athletes[0]
console.log(`${firstname} plays ${firstsport}`)

const { scores : [firstscore, secondscore,...remainigscore]} = athletes[2]
console.log( firstscore, secondscore,remainigscore)

const updateneeraj = {...athletes[2],age : 27, worldchampion : true}
console.log(updateneeraj)

const allscores=[...athletes[0].scores,athletes[1].scores,athletes[2].scores]
console.log(allscores)