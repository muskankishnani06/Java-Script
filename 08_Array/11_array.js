// find() and findIndex() method
// This method finds out the first value which passes the user-specified conditions and findIndex() method finds out the first index value which passes the user-specified conditions.

// find () method

const NumArray =[1,5,4,9,2,89,78,45,41,63]

let value = NumArray.find((num)=> num > 24);

console.log("finding number greater than 24 is =>" , value)

// findIndex () method

let values = NumArray.findIndex((num)=> num > 5)

console.log("finding index of number greater than 24 is =>" , values)

// example-1


const numbers = [10, 25, 15, 40, 5, 30];

let value = numbers.find((num) => num > 20);

console.log("first number greater than 20 is =>", value);

let value = numbers.findIndex((num) => num > 20);

console.log("index of first number greater than 20 is =>", value);

// example-2


const marks = [35, 45, 60, 25, 75, 90];

let value = marks.find((num) => num > 70);

console.log("first mark greater than 70 is =>", value);

let value = marks.findIndex((num) => num > 70);

console.log("index of first mark greater than 70 is =>", value);

// example-3

const ages = [12, 15, 17, 21, 25, 18];

let value = ages.find((num) => num >= 18);

console.log("first age greater than or equal to 18 is =>", value);

let value = ages.findIndex((num) => num >= 18);

console.log("index of first age greater than or equal to 18 is =>", value)
