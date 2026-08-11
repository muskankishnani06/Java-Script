// includes() method =>  This method is used to check whether the array contains the specified element or not. 

const fruits = [ "apple",
  "banana",
  "cheery",
  "mango",
  "watermelon",
  "grapes",
  "strawberry",
]

console.log("banana are there" ,fruits.includes("banana"))
console.log("pineapple are there" ,fruits.includes("pineapple"))

// example-1

let names = ["Rahul", "Amit", "Priya", "Neha"];

console.log("Amit is there", names.includes("Amit"));
console.log("Riya is there", names.includes("Riya"));

// example-2

let cities = ["Ahmedabad", "Mumbai", "Delhi", "Surat"];

console.log("Mumbai is there", cities.includes("Mumbai"));
console.log("Rajkot is there", cities.includes("Rajkot"));

// example-3

let subjects = ["HTML", "CSS", "JavaScript", "Python"];

console.log("JavaScript is there", subjects.includes("JavaScript"));
console.log("Java is there", subjects.includes("Java"));


// sort() method =>  This method sorts the elements of an array in alphabetical order in ascending order.

let alphabet =["a","b","c","d","e"]

console.log("reverse =>", alphabet.sort())

// sort () number data

let number = [5,7,8,4,3,6,9,1,0]
console.log("sort =>", number.sort())

// sort the number in ascending order

console.log("ascending order ",number.sort((a,b) => a-b))

// sort the number in descending order

const descendingNumber = number.sort((a,b) => {

    return b-a;
});

    console.log("descending order", descendingNumber)

// example-1

let animals = ["dog", "cat", "lion", "elephant"];

console.log("alphabetical order =>", animals.sort());

// example-2

// sort numbers in ascending order

let marks = [45, 12, 78, 34, 90];

console.log("ascending order =>", marks.sort((a, b) => a - b));

// example-3

// sort numbers in descending order

let prices = [500, 200, 800, 100, 600];

console.log("descending order =>", prices.sort((a, b) => b - a));





