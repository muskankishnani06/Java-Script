// import add from "./modules.js";
// import { sub, mul, div } from "./modules.js";

// const result1 = add(10, 20);
// console.log("result", result1);

// const result2 = sub(10, 20);
// console.log("result", result2);

// const result3 = mul(10, 20);
// console.log("result", result3);

// const result4 = div(10, 20);
// console.log("result", result4);

// common js

const  { add, sub, mul, div }= require("./modules.js");

const result1 = add(10, 20);

console.log("result", result1);

const result2 = sub(10, 20);

console.log("result", result2);

const result3 = mul(10, 20);

console.log("result", result3);

const result4 = div(10, 20);

console.log("result", result4);
