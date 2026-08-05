// In JavaScript, accessor properties are methods that get or set the value of an object. For that, we use these two keywords:

// first get - to define a getter method to get the property value

// get method example

const person = {
  name: "dexter",
  surname: "morgan",
  age: 30,
  passion: "forensic expert",

  get fullName() {
    return this.name + " " + this.surname;
  }
};

console.log(person.fullName)

// example-1

// Getter method example - Student

const student = {
  firstName: "Muskan",
  lastName: "Kishnani",
  course: "BCA",

  get fullName() {
    return this.firstName + " " + this.lastName;
  }
};

console.log(student.fullName);

// example-2

// Getter method example - Car

const car = {
  brand: "Toyota",
  model: "Fortuner",
  year: 2024,

  get carDetails() {
    return this.brand + " " + this.model;
  }
};

console.log(car.carDetails);

// example-3

// Getter method example - Employee

const employee = {
  firstName: "Rahul",
  lastName: "Sharma",
  position: "Software Developer",

  get employeeName() {
    return this.firstName + " " + this.lastName;
  }
};

console.log(employee.employeeName);

// example-1

// Getter method example - Mobile

const mobile = {
  brand: "Samsung",
  model: "Galaxy S24",
  color: "Black",

  get phoneName() {
    return this.brand + " " + this.model;
  }
};

console.log(mobile.phoneName);

// example-2

// Getter method example - Book

const book = {
  title: "Atomic Habits",
  author: "James Clear",
  price: 599,

  get bookInfo() {
    return this.title + " by " + this.author;
  }
};

console.log(book.bookInfo);

// example-3

// Getter method example - Movie

const movie = {
  name: "Inception",
  director: "Christopher Nolan",
  year: 2010,

  get movieDetails() {
    return this.name + " (" + this.year + ")";
  }
};

console.log(movie.movieDetails);