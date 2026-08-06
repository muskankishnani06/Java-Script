let fruits=["apple","banana","charry", "dates","elderBarry","fig"]

console.log("fruits",fruits)

// if we want to access array last element but don,t know index then we use below method

console.log("last fruit",fruits[fruits.length-1])

// modify the array element

console.log("fruits array before changing ",fruits[1])

fruits[1]="orange"

console.log("fruits array after changing ",fruits[1])

console.log(fruits)

// example-1

let colors = ["Red", "Blue", "Green", "Yellow", "Black"];

console.log("Colors:", colors);

// Access the last element
console.log("Last Color:", colors[colors.length - 1]);

// Modify an element
console.log("Before Changing:", colors[2]);

colors[2] = "Purple";

console.log("After Changing:", colors[2]);

console.log("Updated Colors:", colors);

// example-2

let students = ["Rahul", "Priya", "Aman", "Neha", "Riya"];

console.log("Students:", students);

// Access the last element
console.log("Last Student:", students[students.length - 1]);

// Modify an element
console.log("Before Changing:", students[0]);

students[0] = "Muskan";

console.log("After Changing:", students[0]);

console.log("Updated Students:", students);

// example-3

let languages = ["HTML", "CSS", "JavaScript", "React", "Node.js"];

console.log("Languages:", languages);

// Access the last element
console.log("Last Language:", languages[languages.length - 1]);

// Modify an element
console.log("Before Changing:", languages[3]);

languages[3] = "Angular";

console.log("After Changing:", languages[3]);

console.log("Updated Languages:", languages);