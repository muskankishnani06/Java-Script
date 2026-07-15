
// break statement is used to terminate the execution of program when condition get satisfied.

// example-1

let student = ["nairobi", "denver", "tokyo", "berlin", "moscow", "helsinki", "oslo", "rio"];

for (let i = 0; i < student.length; i++) {

    console.log(student[i]);

    if (i === 3) {

        console.log("found", student[i])
        break;
    }
}

// example-2

for (let i = 1; i <= 10; i++) {

    if (i === 5) {
        break;
    }

    console.log(i);
}

// example-3

let students = ["Rahul", "Priya", "Amit", "Neha", "Rohan"];

for (let i = 0; i < students.length; i++) {

    if (students[i] === "Neha") {
        console.log("Student Found");
        break;
    }

    console.log(students[i]);
}