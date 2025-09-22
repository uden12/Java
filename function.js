//ifElse//

const temp = 25; // You can change this value to test different outputs
// Check the temperature and respond accordingly
if (temp > 30) { // Hot if temperature is above 30
   console.log("It's hot.");
} else if (temp >= 20) { // Warm if temperature is between 20 and 30
   console.log("It's warm.");
} else { // Cold if temperature is below 20
   console.log("It's cold.");
}
//switch statement//
const day = "Monday"; // You can change this value to test different outputs
// Check the day and respond accordingly
switch (day) // Start of switch statement
{
   case "Monday": // If day is Monday
       console.log("Start of the week.");
       break;
   case "Friday": // If day is Friday
       console.log("End of the workweek.");
       break;
   default:
       console.log("It's a regular day.");
}
//ternary//
let a = 10;
console.log(a === 5 ? "a is equal to 5" : "a is not equal to 5");

//for lop//
for (let i = 1; i <= 3; i++) {
   console.log("Count:", i);
}

//while loop//
let i = 0;
while (i < 3) {
   console.log("Number:", i);
   i++;
}

//do while//
let i = 0;
do {
   console.log("Iteration:", i);
   i++;
} while (i < 3);




