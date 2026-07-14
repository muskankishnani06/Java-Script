// operators are special symbols that perform operations between one and more operands.
// there are 7 types of operators in JavaScript:

// 1. Arithmetic operators
// 2. Assignment operators
// 3. Comparison operators
// 4. Logical operators
// 5. Bitwise operators
// 6. String operators
// 7. Conditional (ternary) operator

//===================================================

// arithmetic operators are used to perform arithmetic operations between two operands.

//example-1

let a = 50;
let b = 10;
console.log("addition is ", a + b); // addition
console.log("subtraction is :", a - b); // subtraction
console.log("multiplication is :", a * b);
console.log("division is :", a / b); // division
console.log("modulo is:", a % b); // modulus
console.log("exponentiation is:", a ** b); // exponentiation

// example-2

let num1 = 10;
let num2 = 5;

console.log("addition is ", num1 + num2); // addition
console.log("subtraction is :", num1 - num2); // subtraction
console.log("multiplication is :", num1 * num2);
console.log("division is :", num1 / num2); // division
console.log("modulo is:", num1 % num2); // modulus
console.log("exponentiation is:", num1 ** num2);

// example-3

let num3 = 25;
let num4 = 2;

console.log("addition is ", num3 + num4); // addition
console.log("subtraction is :", num3 - num4); // subtraction
console.log("multiplication is :", num3 * num4);
console.log("division is :", num3 / num4); // division
console.log("modulo is:", num3 % num4); // modulus
console.log("exponentiation is:", num3 ** num4);

//========================================================
// assignment operators are used to assign values to variables.

// example-1

let c = 20;
console.log("c before assignment:", c); // 20
console.log("c after assignment:", (c += 10)); // 30
console.log("c after assignment:", (c -= 5)); // 25
console.log("c after assignment:", (c *= 2)); // 50
console.log("c after assignment", (c /= 5)); // 10

// example-2

let number = 10;

number += 5;
console.log(number); // 15

number -= 3;
console.log(number); // 12

number *= 2;
console.log(number); // 24

number /= 4;
console.log(number); // 6

// example-3

let value = 10;

value += 5;
console.log(value); // 15

value -= 3;
console.log(value); // 12

value *= 2;
console.log(value); // 24

value /= 4;
console.log(value); // 6

//========================================================
// comparison operators are used to compare two values and return a boolean value (true or false).

// example-1

console.log(" equal ", "5" == 5); // true (loose equality operator)
console.log("strict equal:", "10" === 10); // false
console.log("not equal:", 10 != 5); // true
console.log("strict not equal:", 10 !== 10); // false
console.log("greater than:", 10 > 5); // true
console.log("less than:", 10 < 5); // false
console.log("greater than or equal to:", 10 >= 10); // true
console.log("less than or equal to:", 10 <= 5); // false

// example-2

console.log(10 == "10"); // true
console.log(10 === "10"); // false
console.log(15 > 10); // true
console.log(8 < 3); // false
console.log(20 != 10); // true
console.log(20 !== "20"); // true
console.log(25 >= 25); // true
console.log(15 <= 20); // true

// example-3

console.log(15 == "10"); // false
console.log(15 === "10"); // false
console.log(30 > 10); // true
console.log(8 < 10); // true
console.log(50 != 70); // true
console.log(50 !== "70"); // true
console.log(50 >= 50); // true
console.log(50 <= 60); // true

//========================================================
// logical operators are used to combine multiple boolean expressions and return a boolean value.

// example-1

let x = true;
let y = false;

console.log("logical AND:", x && y); // false
console.log("logical OR:", x || y); // true
console.log("logical NOT:", !x); // false

// example-2

let age = 20;
let hasLicense = true;

console.log(age >= 18 && hasLicense); // true
console.log(age < 18 || hasLicense); // true
console.log(!hasLicense); // false

// example-3

let p = true;
let q = false;

console.log(p && q); // false
console.log(p || q); // true
console.log(!p); // false

//========================================================
// unary operators are used to perform operations on a single operand.

// example-1

let num = 5;
console.log("unary plus:", ++num); // 6 pre-increment
console.log("unary minus:", num--); // 6 post-decrement
console.log("unary minus:", --num); // 5   pre-decrement
console.log("unary plus:", num++); // 5 post-increment

// example-2

let s = 15;

console.log(++s); //16
console.log(s--); //16
console.log(--s); //14
console.log(s++); //14
console.log(s); //15

// example-3

let i = 10;

console.log(--i); //9
console.log(i++); //9
console.log(i--); //9
console.log(++i); //9
console.log(i); //10

//========================================================
// miscellaneous operators are used to perform various operations in JavaScript.
// ternary operator is a shorthand for an if-else statement. It takes three operands: a condition, a value if the condition is true, and a value if the condition is false.

// example-1

let age1 = 18;
let isAdult =
  age1 >= 18 ? "Yes, you are an adult." : "No, you are not an adult.";
console.log(isAdult); // Yes, you are an adult.

// example-2

let marks = 35;

let status = marks >= 40 ? "Pass" : "Fail";

console.log(status);
// Fail

// example-3

let checkNum = 8;

let result = checkNum % 2 === 0 ? "Even Number" : "Odd Number";

console.log(result);
// Even Number

//typeof operator is used to check the data type of a variable or an expression.

// example-1

console.log("type of 42 ", typeof 42);
console.log("type of hello ", typeof "hello");

// example-2

let accNum = 10000034644455454654546;
console.log(typeof accNum); // number

// example-3

let hop;
console.log(typeof hop); // undefined 
