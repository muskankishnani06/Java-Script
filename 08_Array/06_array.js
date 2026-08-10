const fruits = ["apple", "banana", "cherry", "dragon fruit", "orange", "mango"];

console.log("fruits", fruits);

for (let i = 1; i < fruits.length; i++) {
  console.log("fruits ->", fruits[i]);
}

// for of

for (let fruit of fruits) {
  console.log("fruits ->", fruit);
}

// for each 

let numbers = [1,2,3,4,5,6,7,8,9,10]

numbers.forEach((n)=>{
    console.log(2*n);
});

// concat method

const vegetables = ["potato","tomato","onion","garlic","egg plant"]

const shopItems = [...fruits].concat(vegetables)

console.log("shop items",shopItems)

console.log("vegetables ",vegetables)

// to string method 

console.log("shop items ->",shopItems.toString())

// example-1

const series = ["Money Heist", "Ozark", "Lucifer", "Dexter", "Friends"];

console.log("series", series);

// for loop
for (let i = 1; i < series.length; i++) {
    console.log("series ->", series[i]);
}

// for of
for (let show of series) {
    console.log("series ->", show);
}

// forEach
let numbers = [1, 2, 3, 4, 5];

numbers.forEach((n) => {
    console.log(3 * n);
});

// concat method
const movies = ["Avatar", "Titanic", "Joker", "Inception"];

const watchList = [...series].concat(movies);

console.log("watch list", watchList);

console.log("movies", movies);

// toString method
console.log("watch list ->", watchList.toString());

// example-2

const students = ["Muskan", "Riya", "Priya", "Neha", "Kajal"];

console.log("students", students);

// for loop
for (let i = 1; i < students.length; i++) {
    console.log("student ->", students[i]);
}

// for of
for (let student of students) {
    console.log("student ->", student);
}

// forEach
let marks = [10, 20, 30, 40, 50];

marks.forEach((mark) => {
    console.log(mark + 5);
});

// concat method
const teachers = ["Amit Sir", "Raj Sir", "Kiran Ma'am"];

const collegeMembers = [...students].concat(teachers);

console.log("college members", collegeMembers);

console.log("teachers", teachers);

// toString method
console.log("college members ->", collegeMembers.toString());

// example-3

const animals = ["Lion", "Tiger", "Elephant", "Horse", "Dog"];

console.log("animals", animals);

// for loop
for (let i = 1; i < animals.length; i++) {
    console.log("animal ->", animals[i]);
}

// for of
for (let animal of animals) {
    console.log("animal ->", animal);
}

// forEach
let numbers = [2, 4, 6, 8, 10];

numbers.forEach((n) => {
    console.log(2 * n);
});

// concat method
const birds = ["Parrot", "Eagle", "Peacock", "Sparrow"];

const allAnimals = [...animals].concat(birds);

console.log("all animals", allAnimals);

console.log("birds", birds);

// toString method
console.log("all animals ->", allAnimals.toString());
