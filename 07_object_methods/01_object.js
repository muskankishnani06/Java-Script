// An object in javascript is a data structured used to store related data collections. 
// it stores data as key-value pairs , where each key has unique identifier for the associated value.
// object are dynamic , which means the properties can be added , modified or deleted at a run time .

// creating object using literal syntax

const mountaineer = {

    name : "nirmal purja",
    age : 43 ,
    nickName : "Nims Dai" ,
    target : "52*8000"
}

console.log(typeof mountaineer)
console.log("All details",mountaineer)

const mountaineerDetails = new Object();

console.log(typeof mountaineerDetails)

let mountaineer={
    name:"nirmal purja",
    age: 35,
    country: "nepal",
    profession: "mountaineer"
}

console.log("mountaineer=> ", mountaineer);

// asscessing object properties using dot notation


console.log("mountaineer name=> ", mountaineer.name);
console.log("mountaineer age=> ", mountaineer.age);
console.log("mountaineer country=> ", mountaineer.country);
console.log("mountaineer profession=> ", mountaineer.profession);

// now accessing object properties using bracket notation

console.log("mountaineer name=> ", mountaineer["name"]);
console.log("mountaineer age=> ", mountaineer["age"]);
console.log("mountaineer country=> ", mountaineer["country"]);
console.log("mountaineer profession=> ", mountaineer["profession"]);

mountaineer["age"]=48;
console.log("mountaineer age after modification=> ", mountaineer.age);

// adding properties using bracket notation

mountaineer["goal"]="climb all 14 peaks above 8000m";

console.log("adding new property goal=> ", mountaineer.goal);
// adding properties using dot notation

mountaineer.lastClimb="K2";

console.log("adding new property lastClimb=> ", mountaineer.lastClimb);

// example-1

// Object representing a student

const student = {
    name: "Muskan",
    age: 22,
    course: "BCA",
    city: "Surat"
};

console.log(typeof student);
console.log("Student Details =>", student);

// Creating an empty object
const studentDetails = new Object();

console.log(typeof studentDetails);

// Modifying an existing property
student["age"] = 23;

console.log("Updated Age =>", student.age);

// Adding a new property using bracket notation
student["college"] = "ABC College";

console.log("College =>", student.college);

// Adding a new property using dot notation
student.grade = "A";

console.log("Grade =>", student.grade);


// example-2

// Object representing a car

const car = {
    brand: "Toyota",
    model: "Fortuner",
    year: 2022,
    color: "Black"
};

console.log(typeof car);
console.log("Car Details =>", car);

// Creating an empty object
const carDetails = new Object();

console.log(typeof carDetails);

// Modifying an existing property
car["color"] = "White";

console.log("Updated Color =>", car.color);

// Adding a new property using bracket notation
car["fuelType"] = "Diesel";

console.log("Fuel Type =>", car.fuelType);

// Adding a new property using dot notation
car.price = "45 Lakhs";

console.log("Price =>", car.price);

// example-3

// Object representing a mobile phone

const mobile = {
    brand: "Samsung",
    model: "Galaxy A35",
    storage: "128GB",
    color: "Blue"
};

console.log(typeof mobile);
console.log("Mobile Details =>", mobile);

// Creating an empty object
const mobileDetails = new Object();

console.log(typeof mobileDetails);

// Modifying an existing property
mobile["storage"] = "256GB";

console.log("Updated Storage =>", mobile.storage);

// Adding a new property using bracket notation
mobile["battery"] = "5000mAh";

console.log("Battery =>", mobile.battery);

// Adding a new property using dot notation
mobile.price = "₹28,999";

console.log("Price =>", mobile.price);