// reduce () => this method a reducer function that reduce the result into single output

// in this we need two arguments 1. callback 2. initiative value

const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

console.log(number);

const sumNumber = number.reduce((acc, curr) => {
  return (acc += curr);
}, 0);

console.log("sum of all is ", sumNumber);

const shoppingItems = [
  { Item: "socks", qty: 2, price: 500 },
  { Item: "shorts", qty: 5, price: 800 },
  { Item: "shoes", qty: 1, price: 5000 },
];

const total = shoppingItems.reduce((acc, curr) => {
  return (acc += curr.qty * curr.price);
}, 0);

console.log("total is ", total);
