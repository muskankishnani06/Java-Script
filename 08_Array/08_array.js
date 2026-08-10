// some() method

// in this method checks at least one elements of array satisfies the condition checked by the argument function

let age = [5,10,15,20,25,30,35,40]

let olderAge = age.some((x)=>{

    return x > 18;
})

console.log("age is grater than 18 ",olderAge)

// every() method

// in this method checks all elements of array satisfies the condition checked by the argument function

let number = [1,2,3,4,5,6,7,8,9,10]

let num = number.every((x)=>{

    return x > 0;
})

console.log("number is grater than 18 ",num)

// reverse () method

// The reverse() method is used to reverse the order of elements in an array. It modifies the array in place and returns a reference to the same array with the reversed order.

let numeric = [1,2,3,4,5,6,7,8,9,10]

console.log("reverse ->", number.reverse())

// example-1


// some() method

// checks if at least one element satisfies the condition

let marks = [35, 45, 55, 65, 75, 85];

let result = marks.some((x) => {
    return x > 80;
});

console.log("marks greater than 80 ->", result);


// every() method

// checks if all elements satisfy the condition

let passingMarks = [40, 45, 50, 55, 60];

let pass = passingMarks.every((x) => {
    return x >= 40;
});

console.log("all students passed ->", pass);


// reverse() method

let scores = [10, 20, 30, 40, 50];

console.log("original scores ->", scores);

console.log("reverse ->", scores.reverse());

console.log("scores after reverse ->", scores);

// example-2

// some() method

let numbers = [2, 4, 6, 8, 11, 12];

let oddNumber = numbers.some((x) => {
    return x % 2 !== 0;
});

console.log("at least one odd number ->", oddNumber);


// every() method

let positiveNumbers = [5, 10, 15, 20, 25];

let positive = positiveNumbers.every((x) => {
    return x > 0;
});

console.log("all numbers are positive ->", positive);


// reverse() method

let numeric = [1, 2, 3, 4, 5, 6];

console.log("numeric ->", numeric);

console.log("reverse ->", numeric.reverse());

// example-3

// some() method

let ages = [12, 15, 17, 19, 21, 25];

let adult = ages.some((x) => {
    return x >= 18;
});

console.log("at least one person is adult ->", adult);


// every() method

let adultAges = [18, 20, 25, 30, 40];

let allAdult = adultAges.every((x) => {
    return x >= 18;
});

console.log("all people are adults ->", allAdult);


// reverse() method

let ageList = [10, 20, 30, 40, 50];

console.log("age list ->", ageList);

console.log("reverse ->", ageList.reverse());



