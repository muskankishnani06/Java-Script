let text = "we are learning javascript ";

console.log("text =>", text);

// match() method ==> search a string for a value , or a regular expression , and returns the matches

console.log("find the match =>", text.match("java"));

// repeat() method ==> returns a new string with a number of copies of strings

console.log("repeat =>", text.repeat(2));

// replace() method ==> searches a string for a pattern and return a new string where First match are replaced

console.log("replace =>", text.replace("e", "E"));

// replaceAll() method ==> searches a string for a pattern and returns a new string where all matches are replaced

console.log("replace all =>", text.replaceAll("e", "E"));

// search() method ==> searches a string for value , or regular expression , and returns the index(position) of the match

console.log("search =>", text.search("p"));

//here we cant put starting index we can do that indexOf method

console.log("indexOf  =>", text.indexOf("s", 6));

// console.log("indexof =>", text.indexOf(9));

// slice() method ==> extracts a part of string and returns a new string 

console.log("text =>",text)

console.log("sliced text =>",text.slice(2))

console.log("sliced text =>",text.slice(5,10))

console.log("sliced text =>",text.slice(-1))




