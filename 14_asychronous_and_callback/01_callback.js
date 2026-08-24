// callback is function passed as an argument to another function 
// using callback we can do asynchronous task in js 
// a callback function run after another function has finished
// when you pass function as argument don't use parenthesis


function greet(name) {
  console.log("function is loading.......");
}

function greetings(name, greet) {
  let msg = `Hi ${name}, good morning...`;

  greet(name);
  console.log(msg);
}

greetings("dexter", greet);

function calculate(result) {
  console.log("sum of two number is ", result);
}

function total(a, b, calculate) {
  let result = a + b;
  calculate(result);
}

total(10, 20, calculate);
