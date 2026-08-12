// filter() this method is filter out the contents as per user specified condition in a form of new array

// in this example we print the even numbers from array elements

const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

console.log(number);

const evenNumber = number.filter((num) => num % 2 == 0);
console.log(evenNumber);

const oddNumber = number.filter((n) => n % 2 == 1);
console.log(oddNumber);


const personDetails = [
  { name: "John Smith", age: 45, city: "New York", profession: "Engineer" },
  {
    name: "Emily Davis",
    age: 45,
    city: "Los Angeles",
    profession: "Graphic Designer",
  },
  { name: "Michael Brown", age: 67, city: "Chicago", profession: "Doctor" },
  { name: "Sophia Wilson", age: 22, city: "Houston", profession: "Teacher" },
  {
    name: "David Martinez",
    age: 38,
    city: "San Francisco",
    profession: "Developer",
  },
];

const PeopleAge = personDetails.filter((people)=>people.age > 40)

console.log("people age is greater than 40" , PeopleAge)

const PeopleName = personDetails.filter((people)=>people.age > 40).map((people)=>people.name)

console.log("people age is greater than 40" , PeopleName)









