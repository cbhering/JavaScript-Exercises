/*
 * Programming Quiz: Murder Mystery
 */

// change the value of `room` and `suspect` to test your code
var room = "dining room";
var suspect = "Mr. Parkes";

var weapon = "trophy";
var solved = false;

if (room === "gallery") {
    weapon = "trophy";
      if (suspect === "Ms. Van Cleve") {
      solved = true; 
    }
} else if (room === "ballroom") {
    weapon = "poison"; 
        if (suspect === "Mr. Kalehoff") {
        solved = true;
        }
} else if (room === "billiards room") {
    weapon = "pool stick";
        if (suspect === "Mrs. Sparr") {
        solved = true;
        }
} else {
    weapon = "knife";
      if (suspect === "Mr. Parkes") {
      solved = true;
      }
}
if (solved) {
	console.log(suspect +" did it in the "+ room + " with the "+ weapon +"!");
}



/*
 * Programming Quiz - Checking Your Balance
 */

// change the values of `balance`, `checkBalance`, and `isActive` to test your code
var balance = 325.00;
var checkBalance = true;
var isActive = true;

// your code goes here
if (checkBalance === false) {
    console.log("Thank you. Have a nice day!");
} else if (checkBalance === true && isActive === true && balance > 0) {
    console.log("Your balance is $" + balance + ".");
} else if (checkBalance === true && isActive === false) {
    console.log("Your account is no longer active.");
} else if (checkBalance === true && isActive === true && balance === 0) {
    console.log("Your account is empty.");
} else if (checkBalance === true && isActive === true && balance != 0) {
    console.log("Your balance is negative. Please contact bank.");
}

/*
 * Programming Quiz: Ice Cream 
 *
 * Write a single if statement that logs out the message:
 * 
 * "I'd like two scoops of __________ ice cream in a __________ with __________."
 * 
 * ...only if:
 *   - flavor is "vanilla" or "chocolate"
 *   - vessel is "cone" or "bowl"
 *   - toppings is "sprinkles" or "peanuts"
 *
 * We're only testing the if statement and your boolean operators. 
 * It's okay if the output string doesn't match exactly.
 */

// change the values of `flavor`, `vessel`, and `toppings` to test your code
var flavor = "chocolate";
var vessel = "cone";
var toppings = "peanuts";

// Add your code here
if (flavor === "vanilla" ||flavor === "chocolate" && (vessel === "cone" ||vessel === "bowl") && (toppings === "sprinkles" ||toppings === "peanuts")) {
    console.log("I'd like two scoops of " + flavor + " ice cream in a " + vessel + " with a " + toppings + ".");
}

/*
 * Programming Quiz: What do I Wear?
 *
 * Using if/else statements, create a series of logical expressions that logs the size of a t-shirt based on the measurements of:
 *   - shirtWidth
 *   - shirtLength
 *   - shirtSleeve
 *
 * Use the chart above to print out one of the following correct values:
 *   - S, M, L, XL, 2XL, or 3XL
 */

// change the values of `shirtWidth`, `shirtLength`, and `shirtSleeve` to test your code
var shirtWidth = 19; 
var shirtLength = 28; 
var shirtSleeve = 8.15; 

// Write your if/else code here
if (((shirtWidth >= 18 && shirtWidth < 20) && (shirtLength >= 28 && shirtLength < 29) && (shirtSleeve >= 8.13 && shirtSleeve < 8.38))) {
   console.log("S");    
} else if (((shirtWidth >= 20 && shirtWidth < 22) && (shirtLength >= 29 && shirtLength< 30) && (shirtSleeve >= 8.38 && shirtSleeve < 8.63))){
  console.log("M");
}else if (((shirtWidth >= 22 && shirtWidth < 24) && (shirtLength >= 30 && shirtLength< 31) && (shirtSleeve >= 8.63 && shirtSleeve < 8.88))){
  console.log("L");
}else if (((shirtWidth >= 24 && shirtWidth < 26) && (shirtLength >= 31 && shirtLength< 33) && (shirtSleeve >= 8.88 && shirtSleeve < 9.63))){
  console.log("XL");
}else if (((shirtWidth >= 26 && shirtWidth < 28) && (shirtLength >= 33 && shirtLength< 34) && (shirtSleeve >= 9.63 && shirtSleeve < 10.13))){
  console.log("2XL");
}else if (((shirtWidth >= 28) && (shirtLength >= 34 ) && (shirtSleeve >= 10.13 ))){
  console.log("3XL");
}else {
  console.log("N/A");
}

/*
 * Programming Quiz: Back to School
 *
 * Write a switch statement to set the average salary of a person based on their type of completed education.
 *
 */

// change the value of `education` to test your code
var education = 'no high school diploma';

// set the value of this based on a person's education
var salary = 0;

// your code goes here
switch (education) {
    case "no high school diploma":
        salary = 25636;
        break;
    case "a high school diploma":
        salary = 35256;
        break;
    case "an Associate's degree":
        salary = 41496;
        break;
    case "a Bachelor's degree":
        salary = 59124;
        break;
    case "a Master's degree":
        salary = 69732;
        break;
    case "a Professional degree":
        salary = 89960;
        break;
    case "a Doctoral degree":
        salary = 84396;
}
console.log("In 2015, a person with " + education + " earned an average of $" + salary.toLocaleString("en-US") + "/year.");

/*
 * Programming Quiz: JuliaJames (Fizzbuzz)
 */

var x = 1;

while (x <= 20) {
    if (x % 3 === 0) {
        console.log("Julia");
    } else if (x % 5 === 0) {
        console.log("James");
    } else if ((x % 3 === 0) && (x % 5 === 0)) {
        console.log("JuliaJames");
    } else {
        console.log(x);
    }
    x = x + 1
}

/*
 * Programming Quiz: 99 Bottles of Juice
 *
 * Use the following `while` loop to write out the song "99 bottles of juice".
 * Log the your lyrics to the console.
 *
 * Note
 *   - Each line of the lyrics needs to be logged to the same line.
 *   - The pluralization of the word "bottle" changes from "2 bottles" to "1 bottle" to "0 bottles".
 */

var num = 99;

while (num >= 1) {
    if (num > 2) {
        console.log(num +" bottles of juice on the wall! " + num + " bottles of juice! Take one down, pass it around... " +(num - 1) + " bottles of juice on the wall!");
    } else if (num === 2) {
        console.log(num +" bottles of juice on the wall! " + num + " bottles of juice! Take one down, pass it around... " +(num - 1) + " bottle of juice on the wall!");
    } else {
        console.log(num +" bottle of juice on the wall! " + num + " bottle of juice! Take one down, pass it around... " +(num - 1) + " bottles of juice on the wall!"); // don't forget to check pluralization on the last line!
    }
    num --;  // decrement num
}

/*
 * Programming Quiz: Countdown, Liftoff!
 * 
 * Using a while loop, print out the countdown output above.
 */
var num = 60; 

while (num >= 0){
  if (num === 50) {
    console.log("Orbiter transfers from ground to internal power");
  } else if (num === 31) {
    console.log("Ground launch sequencer is go for auto sequence start");
  } else if (num === 16) {
    console.log("Activate launch pad sound suppression system");
  } else if (num === 10) {
    console.log("Activate main engine hydrogen burnoff system");
  } else if (num === 6) {
    console.log ("Main engine start"); 
  } else if (num === 0) {
    console.log("Solid rocket booster ignition and liftoff!");
  } else {
    console.log("T-"+num+" seconds");
  } 
  num--
}

/*
 * Programming Quiz: Find my Seat
 * 
 * Write a nested for loop to print out all of the different seat combinations in the theater.
 * The first row-seat combination should be 0-0 
 * The last row-seat combination will be 25-99
 * 
 * Things to note: 
 *  - the row and seat numbers start at 0, not 1
 *  - the highest seat number is 99, not 100
 */

// Write your code here
for (var x = 0; x <= 25; x++) {
    for (var y = 0; y <= 99; y++) {
    console.log(x + "-" + y);
    }
}