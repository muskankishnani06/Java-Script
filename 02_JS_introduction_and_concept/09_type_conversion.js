// type conversion is the process of converting one data type to another

// there are two types of type conversion in jss

// implicit conversion = compiler can automatic convert the datatype
// explicit conversion = user can manually convert the datatype

// 1.implicit conversion
// Implicit conversion happens when JavaScript automatically converts a data type to another type during operations.

console.log("============ implicit conversion example ============== ")

// string to number
let result1 = "5" - 3;
console.log(result1);

// number to string
let result2 = "5" + 3;
console.log(result2);

// boolean to number
let result3= null + 8;
console.log(result3)

// undefined to number
let result5 = undefined + 5; // undefined is converted to NaN
console.log(result5);

// 2.explicit conversion
// explicit conversion is when you manually convert data types using JavaScript methods like Number(), String(), and Boolean().

console.log("============ explicit conversion example ============== ")

// String to Number Conversion
let str = "42";
let num = Number(str);
console.log(num);
console.log(typeof num);


// Using parseInt() or parseFloat()
let decimalStr = "42.5";
console.log(parseInt(decimalStr)); // 42
console.log(parseFloat(decimalStr)); // 42.5

// Number to String Conversion
let number = 123;
let strNum = String(number); // Using String() to convert number to string
console.log(strNum); // "123"
console.log(typeof strNum); // "string"



