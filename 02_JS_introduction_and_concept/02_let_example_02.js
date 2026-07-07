// let is block scoped. It can be reassigned but cannot be redeclared in the same scope.

function EmployeeDepartment() {

    let department;

    // Initialize value
    department = "HR";

    console.log("Current department:", department);

    if (true) {
        console.log("Inside block:", department);
    }
}

EmployeeDepartment();

// Reassign value

let department = "IT";

console.log("Updated department:", department);

// Redeclare in a different block

{
    let department = "Finance";

    console.log("Block department:", department);
}

console.log("Outside block:", department);