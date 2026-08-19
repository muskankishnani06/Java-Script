document.getElementById("btn").addEventListener("click", () => {
  alert("login successfully ");

  btn.innerText = "Text change";
});

// double click

const button = document.getElementById("btns");
button.addEventListener("dblclick", () => {
  button.innerText = "double click button";
});

const heading = document.getElementById("heading");

// submit

const submit = document.getElementById("form");

submit.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();

  alert(`hi ${name}`);
});

// mouse events

const mouseOver = document.getElementById("mouseOver");

mouseOver.addEventListener("mouseover", () => {
  mouseOver.style.color = "blue";
});


const mouseenter = document.getElementById("mouseEnter");

mouseenter.addEventListener("mouseenter", () => {
  mouseenter.style.color = "red";
});

const mouseout = document.getElementById("mouseOut");

mouseout.addEventListener("mouseout", () => {
  mouseout.style.color = "Yellow";
});

const mouseleave = document.getElementById("mouseLeave");

mouseleave.addEventListener("mouseleave", () => {
  mouseleave.style.color = "purple";
});

const mousemove = document.getElementById("mouseMove");

mousemove.addEventListener("mousemove", () => {
  mousemove.style.color = "green";
});

// key board events

const keydown = document.getElementById("down");

keydown.addEventListener("keydown", () => {
  keydown.style.color = "lightblue";
})

const keyup = document.getElementById("up");

keyup.addEventListener("keyup", () => {
  keyup.style.color = "brown";
})

const keypress = document.getElementById("press");

keypress.addEventListener("keypress", () => {
  keypress.style.color = "grey";
})


