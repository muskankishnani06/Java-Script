// second set method
// set - to define a setter method to set the property value

const voter = {
  name: "sergio",
  age: "",
  profession: "professor",

  set setAge(age) {
    if (age <= 18) {
      console.log("age is not valid for voting");
      return;
    }
    this.age = age;
  },
};

voter.setAge=17;

// example-1

// Setter method example - Student

const student = {
  name: "Muskan",
  age: "",

  set setAge(age) {
    if (age < 18) {
      console.log("Student must be at least 18 years old.");
      return;
    }
    this.age = age;
  }
};

student.setAge = 20;

console.log(student);

// example-2

// Setter method example - Employee

const employee = {
  name: "Rahul",
  salary: 0,

  set setSalary(salary) {
    if (salary <= 0) {
      console.log("Salary must be greater than 0.");
      return;
    }
    this.salary = salary;
  }
};

employee.setSalary = 45000;

console.log(employee);

// example-3

// Setter method example - Product

const product = {
  name: "Laptop",
  price: 0,

  set setPrice(price) {
    if (price <= 0) {
      console.log("Invalid product price.");
      return;
    }
    this.price = price;
  }
};

product.setPrice = 65000;

console.log(product);

