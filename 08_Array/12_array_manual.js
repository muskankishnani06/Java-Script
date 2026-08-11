let name = "dexter"

let numArray = name.split("")

console.log(numArray)
console.log(numArray.reverse())

let reverseName = numArray.join("");
console.log("original name ",name)
console.log("reverse name ",reverseName)

// manual without using in-built method


let str ="dexter";
let reverseString;

for (let i=str.length-1 ; i>=0 ;i--){
  
    reverseString = reverseString + str[i];
}

console.log(reverseString);



