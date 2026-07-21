// function call itself again and again until it get satisfied answer it call recursion

// example of recursion

function factorial(num) {
  if (num < 0) {
    return "factorial is not defined for negative numbers ";
  } else if (num === 0 || num === 1) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
}

console.log(factorial(10))
