// const is a variable that cannot be reassigned. It is block scoped and must be initialized at the time of declaration.

function CurrentDate() {
  // const is block scoped, so it can be accessed only within the block it is defined in.

  const date = "07-07-2026";

  // print the value of date variable
  console.log("current date is: " , date);
}
CurrentDate();

// reinitialization a value to a const variable will throw an error

// date = "08-08-2026"; // This will throw an error

// console.log("current date is: " , date);


// we need to assign a value to a const variable at the time of declaration, otherwise it will throw an error

// const time; // This will throw an error

// time=2.50








