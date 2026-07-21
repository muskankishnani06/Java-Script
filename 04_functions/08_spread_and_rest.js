// spread and rest are short hand syntax for working with array elements in js

// they have different use cases and method of use

// spread operator

// the spread operator is used to expand or spread elements of an array or object

// spread example 

let numArray = [1, 2, 3, 4, 5];
console.log(...numArray);


const fruits = ["apple", "banana", "cherry", "mango", "watermelon", "litchi"];

const shopItems = [...fruits];

shopItems.push("strawberry");

console.log("fruits", fruits);

console.log("shopItems", shopItems);

const person = [
  {
    name: "rachel",
    city: "bvn",
  },
  {
    name: "henry",
    city: "bvn",
  },
];

const personList = [...person];

console.log("person list", personList);

// rest example

function game(...game){

    console.log(" i am playing " ,...game)
    console.log(" i am playing " ,game[0])


}

game("subway-suffer","temple-run","mario")