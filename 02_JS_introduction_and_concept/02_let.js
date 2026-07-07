// let is a block scoped variable, it can be reassigned but not redeclared in the same scope.
function Sports() {
  // let is block scoped, so it can be accessed only within the block it is defined in.
  let game;

  //initialize value of game variable

  game = "gta-5";

  // print the value of game variable

  console.log("currently i am playing", game);

  if (true) {
    console.log("currently i am playing", game);
  }
}
Sports();

//reinitialize value of game variable

game = "fifa-23";

console.log("currently i am playing", game);

// redeclare value of game variable

// redeclaring a variable with let in the same scope will throw an error
// we can redeclare a variable with let in a different scope, like inside a function or block.

let game = "fifa-23";

console.log("currently i am playing", game);

// if we want to redeclare a variable we make another block and redeclare the variable inside that block.
function currentActivity() {
  let activity;

  //initialize value of game variable

  activity = "running";

  // print the value of game variable

  console.log("currently i am", activity);

  if (true) {
    console.log("currently i am", activity);
  }
}

currentActivity();
