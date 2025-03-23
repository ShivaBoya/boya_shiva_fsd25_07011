// You are tasked with developing a Student Performance Analysis System for a school. The system should manage student data securely, track their performance across multiple subjects, and generate insightful reports.

// Key Requirements
// Implement a function called createStudentManager() that securely manages student data using closures for data privacy.
// The function should return the following methods:
// addStudent – Adds a new student with the following structure:
// updateScore – Updates a student’s score for a given subject.
// getStudentDetails – Retrieves details of a specific student. If the student doesn’t exist, return "Student Not Found".
// addSubject – Adds a new subject for a student with its score.
// The system should generate the following insights:
// Calculate the average score for each student.
// Identify students with an average score above 85 as top performers.
// Identify subjects in which more than 50% of the students have scored below 40 (considered difficult subjects).
// Identify students who have failed in at least one subject (score below 35).
// Display a frequency map that shows how many students are enrolled in each subject.
// Use the following concepts effectively:
// Implement Object.keys(), Object.values(), and Object.entries() for key-value manipulations.
// Use .map(), .filter(), .reduce(), and .forEach() for efficient data manipulation and report generation.
// Add a method getSortedStudents(sortBy) that sorts students by:
// "averageScore"
// "name" (alphabetically)
// Deliverables:
// Implementation
// JavaScript code implementing the createStudentManager() function with the following methods:
// addStudent
// updateScore
// getStudentDetails
// addSubject
// getSortedStudents()
// Insights generation logic that includes:
// Average score calculation for each student.
// Identification of top performers (average score above 85).
// Identification of difficult subjects (where more than 50% of students score below 40).
// Identification of students who have failed in at least one subject.
// Generation of a frequency map showing subject-wise student counts.
// Correct Usage of Concepts
// Clear and effective use of:
// Closures to ensure data privacy.
// Object.keys(), Object.values(), and Object.entries() for object manipulations.
// .map(), .filter(), .reduce(), and .forEach() for data transformation and insights generation.
// Version Control & Deployment
// Use Git for version control and push your code to a public GitHub repository.
// Problem 2
// You are tasked with creating a Task Manager that manages and secures user tasks using JavaScript concepts such as Closures, Higher-Order Functions, and JSON manipulation. The implementation should meet the following requirements:

// Requirements:
// Task Manager Module (Closure + Module Design)
// Create a module named TaskManager that manages a list of tasks.
// The list of tasks should be private (secured using closures) and accessible only through provided methods.
// Each task should be stored in the following format:
// Implement the following methods inside the module:
// addTask(title) → Adds a new task with a unique id and completed status set to false.
// getAllTasks() → Returns a JSON string of all tasks.
// markComplete(taskId) → Marks a specific task as completed.
// removeTask(taskId) → Removes a task by id.
// Advanced Operations Using HOFs
// Implement two additional functions:
// getPendingTasks() → Returns an array of task titles that are not completed (using .filter()).
// getCompletedTasks() → Returns an array of task titles that are completed (using .map() and .filter()).
// Sorting and Method Chaining
// Implement a method sortTasks() that:
// Sorts tasks by title in ascending order using .sort() and .localeCompare().
// Chains .map() and .sort() to return only the task titles in sorted order.
// Deliverables:
// Implementation
// JavaScript code implementing the TaskManager module with the following features:
// Private task data managed securely using closures.
// Properly functioning methods:
// addTask()
// getAllTasks()
// markComplete()
// removeTask()
// Advanced operations:
// getPendingTasks() (using .filter()).
// getCompletedTasks() (using .map() and .filter()).
// Sorting functionality using:
// .sort() and .localeCompare() for sorting task titles in ascending order.
// Method chaining for efficient data manipulation.
// Correct Usage of Concepts
// Demonstration of:
// Closures for task data security.
// Higher-Order Functions (HOFs) like .map(), .filter(), and .sort().
// Version Control & Deployment
// Use Git for version control and push your code to a public GitHub repository.
function TaskManager(){
    let tasks=[];
    return{
        addTask(){
            tasks.push({title,completed:false});
        },
        getAllTasks(){
            return tasks;
        },
        markComopleate(title){
            const task=tasks.find(task=>task.title===title);
            if(task)tasks.complated = true;
        },
        removieTask(title){
            tasks=tasks.filter(task => task.tltle !==title);
        },
        gettCompleatedTasks(){
            return tasks.filter(task => task.comoleated).map(task => task.tilte);
        },
        getPendingTasks(){
            return tasks.filter(task =>! task.compleated).map(task=>task.title);
        },
        sortTasks(){
            return tasks.map(task => task.title).sort();
        }
    }
}
function createStudentManager(){
    let students={};
    return{
        addStudent(name){
            if(!students[name])students[name]={};

        },
        addSubject(name,subject,score){
            if(students[name])students[name][subject]=score;
        },
        updatescore(name,subject,score){
            if(students[name] && students[name][subject] !== undefined){
                students[name][subject]=score;
            }
        },
        getStudentDetails(name){
            return students[name] || 'Student Not Found';
        },
        calculateAverageScore(name){
            if(!students[name])return 'Student Not Found';
            const scores=Object.values(students[name]);
            return scores.reduce((acc,s) => acc + s,0)/scores.length;
        },
        identifyTopPerformers(){
            return Object.keys(students).filter(name => this.calculateAverageScore(name)>85);
        },
        findDifficultSubjects(){
            const subjectCount = {};
            Object.values(students).forEach(subjects => {
                Object.entiries(subjects).forEach(([subject,score]) =>{
                    if(score < 40)subjectCount[subject] = (subjectCount[subject] || 0)+1;
                });
            });
        }
    }
}