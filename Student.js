// Problem Statement:
// An online learning platform tracks students' progress.

// Requirements:
// const studentsProgress = [
//   { name: "Ramesh", completedLessons: 40, totalLessons: 50 },
//   { name: "Sita", completedLessons: 25, totalLessons: 50 },
//   { name: "Manoj", completedLessons: 30, totalLessons: 60 },
//   { name: "Pooja", completedLessons: 48, totalLessons: 50 },
//   { name: "Anil", completedLessons: 15, totalLessons: 50 }
// ];
// Implement the following logic:
// Filter students who have completed at least 50% of the course.
// Map to calculate their completion percentage.
// Reduce to find the average completion percentage of all active students.
// Filter students who have more than 80% completion to get a list of top learners.
// Expected Output:
// List of active students with their completion percentage.
// The average course completion percentage.
const studentsProgress = [
   { name: "Ramesh", completedLessons: 40, totalLessons: 50 },
   { name: "Sita", completedLessons: 25, totalLessons: 50 },
   { name: "Manoj", completedLessons: 30, totalLessons: 60 },
   { name: "Pooja", completedLessons: 48, totalLessons: 50 },
   { name: "Anil", completedLessons: 15, totalLessons: 50 }
 ];
 function student(students){
    let activestudents = students.filter(student => (student.completedLessons / student.totalLessons) >= 0.5) ;
    let studenstWithCompletion = activestudents.map(student => ({
        ...student,
        CompletionPercentage: ((student.completedLessons/student.totalLessons)*100)
    }));
    console.log("list of active students:",studenstWithCompletion)
    


    if(studenstWithCompletion . length >0){
        let toatlPercentage = studenstWithCompletion.reduce((sum,student) => sum + student.CompletionPercentage,0);
        let average = (toatlPercentage/studenstWithCompletion . length);
        console.log(" student Average Pencentage:",average +"%");

        let toplearners = studenstWithCompletion.filter(student => student.CompletionPercentage > 80);
        console.log("Top Learners:",toplearners );
    }

 }
 student(studentsProgress)