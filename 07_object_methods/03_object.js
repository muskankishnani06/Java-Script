const student = {
  name: "professor",
  age: 22,
  course: "BCA",
};

console.log("student=> ", student);

// Destructuring object
const { name, age, course } = student;

console.log("Name=> ", name);
console.log("Age=> ", age);
console.log("Course=> ", course);

const student2 = {
  name: "Riya",
  age: 20,
  course: "B.Sc",
};

const student3 = {
  name: "Aman",
  age: 21,
  course: "B.Com",
};

// Function constructor
function StudentDetails(name, age, course) {
  this.name = name;
  this.age = age;
  this.course = course;
}

const student4 = new StudentDetails("Rahul", 23, "MCA");
console.log("student4=> ", student4);

const student5 = new StudentDetails("Priya", 24, "MBA");
console.log("student5=> ", student5);

// Adding property to prototype
StudentDetails.prototype.college = "ABC College";

console.log("College=> ", student4.college);

// Removing property
delete student.course;

console.log("student after deleting course=> ", student);

// hasOwnProperty()
console.log(student.hasOwnProperty("name"));
console.log(student.hasOwnProperty("course"));

// example-1

const car = {
  brand: "Toyota",
  model: "Fortuner",
  color: "Black",
};

console.log("car=> ", car);

// Destructuring object
const { brand, model, color } = car;

console.log("Brand=> ", brand);
console.log("Model=> ", model);
console.log("Color=> ", color);

function CarDetails(brand, model, color) {
  this.brand = brand;
  this.model = model;
  this.color = color;
}

const car1 = new CarDetails("Honda", "City", "White");
console.log("car1=> ", car1);

const car2 = new CarDetails("Hyundai", "Creta", "Blue");
console.log("car2=> ", car2);

// Prototype property
CarDetails.prototype.fuel = "Petrol";

console.log(car1.fuel);

// Delete property
delete car.color;

console.log(car);

// hasOwnProperty()
console.log(car.hasOwnProperty("brand"));
console.log(car.hasOwnProperty("color"));

// example-2

const mobile = {
  brand: "Samsung",
  model: "Galaxy A35",
  storage: "128GB",
};

console.log("mobile=> ", mobile);

// Destructuring
const { brand, model, storage } = mobile;

console.log("Brand=> ", brand);
console.log("Model=> ", model);
console.log("Storage=> ", storage);

function MobileDetails(brand, model, storage) {
  this.brand = brand;
  this.model = model;
  this.storage = storage;
}

const mobile1 = new MobileDetails("Apple", "iPhone 15", "256GB");
console.log("mobile1=> ", mobile1);

const mobile2 = new MobileDetails("OnePlus", "12R", "512GB");
console.log("mobile2=> ", mobile2);

// Prototype
MobileDetails.prototype.warranty = "1 Year";

console.log(mobile1.warranty);

// Delete property
delete mobile.storage;

console.log(mobile);

// hasOwnProperty()
console.log(mobile.hasOwnProperty("brand"));
console.log(mobile.hasOwnProperty("storage"));

// example-3

const employee = {
  name: "Ankit",
  age: 30,
  department: "IT",
};

console.log("employee=> ", employee);

// Destructuring
const { name, age, department } = employee;

console.log("Name=> ", name);
console.log("Age=> ", age);
console.log("Department=> ", department);

function EmployeeDetails(name, age, department) {
  this.name = name;
  this.age = age;
  this.department = department;
}

const employee1 = new EmployeeDetails("Neha", 28, "HR");
console.log("employee1=> ", employee1);

const employee2 = new EmployeeDetails("Rohan", 32, "Finance");
console.log("employee2=> ", employee2);

// Prototype
EmployeeDetails.prototype.company = "Tech Solutions";

console.log(employee1.company);

// Delete property
delete employee.department;

console.log(employee);

// hasOwnProperty()
console.log(employee.hasOwnProperty("name"));
console.log(employee.hasOwnProperty("department"));