const heading1 = document.getElementById("heading1");

console.log("heading ", heading1);

heading1.innerText = "dom manipulation";

heading1.innerHTML = "<p>Dom manipulation</p>";

heading1.textContent = "this is text content";

// inner text

// can't read  properties of display none

const heads = document.getElementById("heading");

console.log("head", heads.innerText);

// text content

// can read properties of display none

const heady = document.getElementById("head");

console.log("head", heady.textContent);

// id selector 

const heading3 = document.getElementById("heading3");

console.log("heading 3", heading3);

heading3.textContent = "this is heading 3 using script"

// class selector

const paragraph = document.getElementsByClassName("para");

console.log("paragraph",paragraph)

paragraph[0].innerText = "this is class selector"

// tag selector

const head4 = document.getElementsByTagName("h4")

console.log("heading 4",head4)

head4[1].innerText = "this is tag selector"

// query selector

const query1 = document.querySelector("#heading5")

query1.innerText = "this is id query selector"

const query2 = document.querySelector(".head5")

query2.innerText = "this is class query selector"

// query selector all

const queryAll = document.querySelectorAll(".head5")

queryAll.forEach((value)=>{
    value.innerText = "all query selector"
})

// create content

const heading6 = document.createElement("h6")

heading6.innerHTML = "this is heading 6 create using script"

document.body.appendChild(heading6)

// style

const colorChange = document.getElementById("color")

colorChange.style.color = "red"
colorChange.style.fontSize = "50px"

