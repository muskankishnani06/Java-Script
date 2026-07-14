// example-1

let day = 3;

switch (day) {
    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    case 4:
        console.log("Thursday");
        break;

    default:
        console.log("Invalid Day");
}

// example-2

let operator = "+";
let num1 = 10;
let num2 = 5;

switch (operator) {
    case "+":
        console.log(num1 + num2);
        break;

    case "-":
        console.log(num1 - num2);
        break;

    case "*":
        console.log(num1 * num2);
        break;

    case "/":
        console.log(num1 / num2);
        break;

    default:
        console.log("Invalid Operator");
}

// example-3

let role = "Teacher";

switch (role) {
    case "Admin":
        console.log("Welcome Admin");
        break;

    case "Teacher":
        console.log("Welcome Teacher");
        break;

    case "Student":
        console.log("Welcome Student");
        break;

    default:
        console.log("Invalid User");
}