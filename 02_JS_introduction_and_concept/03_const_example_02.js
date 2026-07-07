// const is block scoped and cannot be reassigned.

function CarName() {

    const car = "BMW";

    console.log("My favorite car is:", car);

    if (true) {
        console.log("Inside block:", car);
    }
}

CarName();

// Reassigning is not allowed
// car = "Audi";

// Redeclaring in the same scope is not allowed
// const car = "Audi"; 

// Redeclaring in a different block is allowed

{
    const car = "Audi";
    console.log("Inside another block:", car);
}