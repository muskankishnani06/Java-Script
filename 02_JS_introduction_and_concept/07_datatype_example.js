// we can check the data type of a variable using typeof operator in JavaScript

// example-1 of primitive data types in JavaScript

let greetings = "Hello, World!"; 
console.log("greetings:", greetings); // string
console.log("typeof greetings:", typeof greetings); // string

let age = 25; 
console.log("age:", age); // number
console.log("typeof age:", typeof age); // number

let bigNumber = 12345678901234567890n;
console.log("bigNumber:", bigNumber); // bigint
console.log("typeof bigNumber:", typeof bigNumber); // bigint

let isStudent = true; 
console.log("isStudent:", isStudent); // boolean
console.log("typeof isStudent:", typeof isStudent); // boolean

let symbolValue = Symbol("mySymbol");
console.log("symbolValue:", symbolValue);       
console.log("typeof symbolValue:", typeof symbolValue); // symbol

let address; 
console.log("typeof address:", typeof address); // undefined

let company = null; 
console.log("company:", company); // null
console.log("typeof company:", typeof company); // object

// example-2 of primitive data types in JavaScript

let name = "Alice"; 
console.log("name:", name); 
console.log("typeof name:", typeof name); // string

let score = 95; 
console.log("score:", score); 
console.log("typeof score:", typeof score); // number   

let isActive = false;
console.log("isActive:", isActive); 
console.log("typeof isActive:", typeof isActive); // boolean

let uniqueId = Symbol("id");
console.log("uniqueId:", uniqueId); 
console.log("typeof uniqueId:", typeof uniqueId); // symbol

let undefinedValue;
console.log("undefinedValue:", undefinedValue); 
console.log("typeof undefinedValue:", typeof undefinedValue); // undefined

// In JavaScript, `null` is of type "object" due to a historical mistake in the language design
let nullValue = null;
console.log("nullValue:", nullValue); 
console.log("typeof nullValue:", typeof nullValue); // object           

let bigIntValue = 12345678901234567890n;
console.log("bigIntValue:", bigIntValue); 
console.log("typeof bigIntValue:", typeof bigIntValue); // bigint

// example-3 of primitive data types in JavaScript

let anotherString = "JavaScript is fun!";
console.log("anotherString:", anotherString); 
console.log("typeof anotherString:", typeof anotherString); // string   

let anotherNumber = 42; 
console.log("anotherNumber:", anotherNumber); 
console.log("typeof anotherNumber:", typeof anotherNumber); // number

let anotherBoolean = true;
console.log("anotherBoolean:", anotherBoolean); 
console.log("typeof anotherBoolean:", typeof anotherBoolean); // boolean    

let anotherSymbol = Symbol("anotherSymbol");
console.log("anotherSymbol:", anotherSymbol); 
console.log("typeof anotherSymbol:", typeof anotherSymbol); // symbol

let anotherUndefined;   
console.log("anotherUndefined:", anotherUndefined);
console.log("typeof anotherUndefined:", typeof anotherUndefined); // undefined

let anotherNull = null; 
console.log("anotherNull:", anotherNull); 
console.log("typeof anotherNull:", typeof anotherNull); // object

let anotherBigInt = 98765432109876543210n;
console.log("anotherBigInt:", anotherBigInt); 
console.log("typeof anotherBigInt:", typeof anotherBigInt); // bigint   

// additional notes

let numbers = [1, 2, 3, 4, 5];
console.log("numbers:", numbers); 
console.log("typeof numbers:", typeof numbers); // object   

let person = { name: "John", age: 30 };
console.log("person:", person); 
console.log("typeof person:", typeof person); // object 


