// string is a sequence or array of character , used to represent text

// we can write string using '' and "" quote

let text = "we are learning javascript";

console.log("text =>", text);

// charAt() method ==> returns the character at specified index(position) counting from 0

console.log("char at =>",text.charAt(8))

// charCat() method ==> returns two or more joint strings 

console.log("joint strings",text.concat("string methods"))

// endsWith () methods ==> returns true if string with a specified value

console.log("ends with =>", text.endsWith("s"))
console.log("ends with =>", text.endsWith("t"))

// includes() method ==> returns true if the string contains a specified value  

console.log("includes =>",text.includes("e"))

// indexOf() method ==> returns the index position of the first occurrence 

console.log("index position of =>",text.indexOf("v"))

// lastIndexOf() method ==> returns the last occurrence of a value in string

console.log("last index of =>",text.lastIndexOf("s"))

// length() method ==> returns the length of string

console.log("length of =>" , text.length)





