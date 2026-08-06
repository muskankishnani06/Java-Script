let fruits=["apple","banana","charry", "dates","elderBarry","fig"]

console.log("fruits",fruits)

// adding elements in array 

fruits.push("kiwi")

console.log("fruits array after adding new element ",fruits)

// adding elements from start

fruits.unshift("pineapple")

console.log("fruits array before adding new element at first ",fruits)

// removing elements from last

console.log("fruits array after removing element at last ",fruits)


fruits.shift()

console.log("fruits array before removing element at first ",fruits)

// removing elements from first

console.log("fruits array after removing element at first ",fruits)

// splice() this method help to remove replace and also add element in our array

// add element without removing any element

fruits.splice(2,0,"guava","mango")

console.log("fruits after splice" , fruits)

// add element with removing with 1 element


fruits.splice(2,4,"litchi","watermelon")

console.log("fruits after splice" , fruits)


// example-1

let colors = ["Red", "Blue", "Green", "Yellow"];

console.log("Colors:", colors);

// Add element at last
colors.push("Black");
console.log("After push:", colors);

// Add element at first
colors.unshift("White");
console.log("After unshift:", colors);

// Remove last element
colors.pop();
console.log("After pop:", colors);

// Remove first element
colors.shift();
console.log("After shift:", colors);

// Add elements without removing
colors.splice(2, 0, "Pink", "Purple");
console.log("After splice (add):", colors);

// Replace elements
colors.splice(1, 2, "Orange", "Brown");
console.log("After splice (replace):", colors);

// example-2

let students = ["Rahul", "Priya", "Aman", "Neha"];

console.log("Students:", students);

// Add at last
students.push("Muskan");
console.log("After push:", students);

// Add at first
students.unshift("Riya");
console.log("After unshift:", students);

// Remove last
students.pop();
console.log("After pop:", students);

// Remove first
students.shift();
console.log("After shift:", students);

// Add without removing
students.splice(1, 0, "Karan", "Sneha");
console.log("After splice (add):", students);

// Replace elements
students.splice(2, 2, "Ankit", "Pooja");
console.log("After splice (replace):", students);

// example-3

let languages = ["HTML", "CSS", "JavaScript", "React"];

console.log("Languages:", languages);

// Add at last
languages.push("Node.js");
console.log("After push:", languages);

// Add at first
languages.unshift("C");
console.log("After unshift:", languages);

// Remove last
languages.pop();
console.log("After pop:", languages);

// Remove first
languages.shift();
console.log("After shift:", languages);

// Add without removing
languages.splice(2, 0, "Bootstrap", "Tailwind");
console.log("After splice (add):", languages);

// Replace elements
languages.splice(1, 3, "Python", "Java");
console.log("After splice (replace):", languages);







