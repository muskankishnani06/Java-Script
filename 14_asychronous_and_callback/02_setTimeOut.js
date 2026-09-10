

setTimeout(() => {
  console.log("The current year is.....");
});

function getYear() {
  const year = new Date().getFullYear();

  console.log("year", year);
}

setTimeout(getYear, 3000);



const greet = setTimeout(()=>{

    console.log("hi there good morning")
},3000)




