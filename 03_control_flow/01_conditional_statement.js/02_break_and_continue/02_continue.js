
// The continue statement is used to skip the current iteration of a loop and move to the next iteration.

// example-1
for (let i = 1; i <= 10; i++) {

    if (i === 5) {
        continue;
    }

    console.log(i);
}

// example-2

let number;

for (let i = 1; i <= 10; i++) {

    if (i % 2 === 0) {

        console.log("odd number")
        continue;
    }

    console.log(i);
}

// example-3

for (let i = 1; i <= 5; i++) {
    if (i === 3) 
    continue;
    console.log(i);
}
