// in java script there are 8 data types

// 1. String
// 2. Number
// 3. BigInt
// 4. Boolean   
// 5. Undefined
// 6. Null
// 7. Symbol
// 8. Object

/*
primitive data types are immutable (cannot be changed) and are compared by their value,stored in stack, passed by value , and independent.
example: string, number, bigint, boolean, undefined, null, symbol
*/

// example-1 of primitive data type
let a = "Hello, World!"; 
let b = a;

console.log("before change ", a);  
console.log("before change ", b); 

b = "Hello, JavaScript!"; 

console.log("after change ",a);  
console.log("after change ",b); 

// example-2 of primitive data type
let x = 10; 
let y = x;

console.log("before change ", x);  
console.log("before change ", y);   

 y = 20;

console.log("after change ", x);  
console.log("after change ", y);    

// example-3 of primitive data type

let greetings = "good morning";
let greetingsCopy = greetings;

console.log("before change ", greetings);  
console.log("before change ", greetingsCopy);       

greetingsCopy = "good evening";

console.log("after change ", greetings);  
console.log("after change ", greetingsCopy);


// this was deep copy because the value of a and b are stored in stack and they are independent of each other.


/*
Non-primitive data types are mutable (can be changed) and are compared by their reference,stored in heap, passed by reference , and dependent.
example: object, array, function
*/

// this was shallow copy because the value of details and detailsCopy are stored in heap and they are dependent on each other.

// example-1 of non-primitive data type

let details = { name: "alice", age: 25 }; 
let detailsCopy = details; 

console.log("before change " ,details);
console.log("before change " ,detailsCopy);

detailsCopy.age = 30; 

console.log("after change " ,details);  
console.log("after change " ,detailsCopy);   

// example-2 of non-primitive data type

let fruits = {fruit1: "apple", fruit2: "banana"}; 
let fruitsCopy = fruits;

console.log("before change " ,fruits);
console.log("before change " ,fruitsCopy);      

   
fruitsCopy.fruit2 = "guava";
console.log("after change " ,fruits);  
console.log("after change " ,fruitsCopy);    

// example-3 of non-primitive data type

let car = {brand: "Toyota", model: "fortuner"};
let carCopy = car;

console.log("before change " ,car);
console.log("before change " ,carCopy);      

   
carCopy.model = "camry";
console.log("after change " ,car);  
console.log("after change " ,carCopy);    

