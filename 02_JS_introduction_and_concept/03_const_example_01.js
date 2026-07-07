// const is a block scoped variable.
// It cannot be reassigned and must be initialized at the time of declaration.

function CollegeName() {

    const college = "ABC College";

    console.log("My college is:", college);

    if (true) {
        console.log("Inside block:", college);
    }
}

CollegeName();

// Trying to reassign a const variable
// college = "XYZ College"; 

// Trying to redeclare in the same scope
// const college = "XYZ College";

// Redeclaring in a different block is allowed

{
    const college = "XYZ College";
    console.log("Another college:", college);
}