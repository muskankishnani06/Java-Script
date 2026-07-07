// let is a block scoped variable. It can be reassigned but not redeclared in the same scope.

function StudentSubject() {

    let subject;

    // Initialize value
    subject = "Mathematics";

    console.log("Current subject is:", subject);

    if (true) {
        console.log("Inside block:", subject);
    }
}

StudentSubject();

// Reassign value

let subject = "Science";

console.log("New subject is:", subject);

// Redeclare in a different block

{
    let subject = "English";

    console.log("Inside another block:", subject);
}

console.log("Outside block:", subject);