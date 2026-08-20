// without exception

// function checkPin(pin) {
//   let atmPin = 5645;

//   if (atmPin != pin) {
//     console.log("invalid pin");
//   } else {
//     console.log("Welcome to XYZ bank ");
//   }

//   console.log("Do you want to explore more ?");
// }
// checkPin(1234)

// now with exception catch and throw

// function checkPin(pin) {
//   let atmPin = 1234;

//   try {
//     if (atmPin != pin) {
//       throw "Invalid PIN";
//     }

//     console.log("Welcome to XYZ bank !");
//     console.log("do you want to explore more ?");
//   } catch (error) {
//     console.log(error);
//   }
// }

// checkPin(4567);

// now with exception finally

function checkPin(pin) {
  let atmPin = 1234;

  try {
    if (atmPin != pin) {
      throw "Invalid PIN";
    }
  } catch (error) {
    console.log(error);
  } finally {
    console.log("welcome to XYZ bank !");
  }

  console.log("do you want to explore more ?");
}

checkPin(4567);
