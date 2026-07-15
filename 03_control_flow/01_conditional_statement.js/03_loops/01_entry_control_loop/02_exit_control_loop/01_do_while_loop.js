// The do…while loop can be used to execute a specific block of code at least once.

// example-1

let word = "HELLO";
let i = 0;

do {
    console.log(word[i]);
    i++;
} while (i < word.length);

// example-2

let j = 2;

do {
    console.log(j);
    j++;
} while (j < 5);

// example-3

let num = 3;

do {
    console.log(num);
    num += 3;
} while (num <= 15);