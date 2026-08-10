const fruits = ["apple", "banana", "cherry", "dragon fruit", "orange", "mango"];

console.log("join methods => ",fruits.join(" "))

console.log("join methods => ",fruits.join(""))

// flat

let number = [[1,2,3,4] ,[5,6,7,8,9],[9,10,[11,[12,13,[14]]]]]

console.log("number",number)

console.log(number.flat(1))
console.log(number.flat(2))

console.log(number.flat(Infinity))


// slice

console.log("fruits",fruits.slice(2,6))

console.log("fruits",fruits)

// example-1

const colors = ["red", "blue", "green", "yellow", "pink", "black"];

console.log("join method =>", colors.join(" "));

console.log("join method =>", colors.join(""));


// flat

let colorGroups = [
    ["red", "blue"],
    ["green", "yellow"],
    ["pink", ["black", ["white", ["purple"]]]]
];

console.log("color groups", colorGroups);

console.log(colorGroups.flat(1));
console.log(colorGroups.flat(2));

console.log(colorGroups.flat(Infinity));


// slice

console.log("colors", colors.slice(2, 5));

console.log("colors", colors);

// example-2

const numbers = [10, 20, 30, 40, 50, 60];

console.log("join method =>", numbers.join(" "));

console.log("join method =>", numbers.join(""));


// flat

let numberGroups = [
    [1, 2, 3],
    [4, 5, 6],
    [7, [8, [9, [10]]]]
];

console.log("number groups", numberGroups);

console.log(numberGroups.flat(1));
console.log(numberGroups.flat(2));

console.log(numberGroups.flat(Infinity));


// slice

console.log("numbers", numbers.slice(1, 5));

console.log("numbers", numbers);

// example-3

const cities = ["Ahmedabad", "Mumbai", "Delhi", "Surat", "Rajkot", "Bhavnagar"];

console.log("join method =>", cities.join(" "));

console.log("join method =>", cities.join(""));


// flat

let cityGroups = [
    ["Ahmedabad", "Surat"],
    ["Mumbai", "Delhi"],
    ["Rajkot", ["Bhavnagar", ["Vadodara", ["Gandhinagar"]]]]
];

console.log("city groups", cityGroups);

console.log(cityGroups.flat(1));
console.log(cityGroups.flat(2));

console.log(cityGroups.flat(Infinity));


// slice

console.log("cities", cities.slice(2, 6));

console.log("cities", cities);