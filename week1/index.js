// // Wlecome to week 1 !!!!!!!!!!!!!!!!!!!!!!!!!
// We will be going over week1 material together as I code along and you follow in your code editor
// or just watch and then refer to notes for coding.
// /*
// The Concept of Data Types
// In programming, data types is an important concept.

// To be able to operate on variables, it is important to know something about the type.

// Without data types, a computer cannot safely solve this:
// */

let num4 = 16;                               // Number
let surName = "Johnson";                      // String
let x = {firstName:"John", surName:"Doe", num4};    // Object

console.log(x);

// // You can use quotes inside a string, as long as they don't 
// // match the quotes surrounding the string:

// // Example
let answer1 = "It's alright";             // Single quote inside double quotes
let answer2 = "He is called 'Johnny'";    // Single quotes inside double quotes
let answer3 = 'He is called "Johnny"';    // Double quotes inside single quotes

console.log(answer1 + ' ' + answer2 + ' ' + answer3);
console.log(`${answer1} ${answer2} ${answer3}`);

// ///////////////////////////////////////////////////

// /*
// JavaScript Booleans
// Booleans can only have two values: true or false.

// Example*/
let a = 5;
let c = 5;
let z = 6;
console.log(a == c);       // Returns true
console.log(c == z);       // Returns false

// //////////////////////////////////////////////////

// /*
// JavaScript Arrays
// JavaScript arrays are written with square brackets.

// In JavaScript, all arrays are zero-based. Meaning that 
// every first value in an array is always 0, then 1, then 2, etc

// Array items are separated by commas.

// The following code declares (creates) an array called 
// cars, containing three items (car names):
// */

const cars = ["Saab", "Volvo", "BMW"];
console.log(cars);        //shows full list
console.log(cars[0]);     //shows 1st item in array
console.log(cars[1]);     //shows 2nd item in array
console.log(cars[2]);     //shows 3rd item in array

// ////////////////////////////////////////////////
// ///////////////////////////////////////////////


// /*
// JavaScript Objects
// JavaScript objects are written with curly braces {}.

// Object properties are written as name:value pairs, separated by commas.
// */
const person = {
  firstName:"John", //if there will be more to write, use a comma and continue
  lastName:"Doe", 
  age:50, 
  eyeColor:"blue" //last entry doesn't need a comma
}; // semi colons are a must at the end of code blocks in javascript!!!!

console.log(person); //prints the exact data, but it isn't parsed
console.log(person.firstName); //grabs the first value

// //Now practice the above on your own, following my example


// //////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////

// /*
// The typeof Operator
// You can use the JavaScript typeof operator to find the type of a JavaScript variable.

// The typeof operator returns the type of a variable or an expression:
// */

var name = "john"; //string
var age = 40;
console.log(typeof(name)); //returns a string
console.log(typeof(age)); //returns a number

// ////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////

// // Empty Values
// // An empty value has nothing to do with undefined.

// // An empty string has both a legal value and a type.

// // Example
let car = "";    // The value is "", the typeof is "string"
//sometimes a developer may want to declare a variable without
//actually assigning it or giving it any value, but will do
//so later on
console.log(car); //returns empty

// //////////////////////////////////////////////////////
// /////////////////////////////////////////////////////

// /*
// Exerice: Use the comments to state what they are
// and lastly, type up a console dot log statement like how
// I have done previously to show the data in three different ways
// */

let length = 16;            // ?

let lastName = "Johnson";   // ?

const result = {
  firstName: "John",
  lastName: "Doe"
};                          // ?

//                             //?

// ////////////////////////////////////////////////////
// ///////////////////////////////////////////////////

// /*
// JAVASCRIPT FUNCTIONS
// A JavaScript function is a block of code designed to perform a particular task.
// A JavaScript function is executed when "something" invokes it (calls it).
// */

// function myFunction(p1, p2) {
//   return p1 * p2;   // The function returns the product of p1 and p2
// }

// console.log(myFunction()); //says NaN, or Not a Number

// /*
// JavaScript Function Syntax
// A JavaScript function is defined with the function keyword, followed by a name, followed by parentheses ().

// Function names can contain letters, digits, underscores, and dollar signs (same rules as variables).

// The parentheses may include parameter names separated by commas:
// (parameter1, parameter2, ...)

// The code to be executed, by the function, is placed inside curly brackets: {}

// Function Invocation
// The code inside the function will execute when "something" invokes (calls) the function:

// When an event occurs (when a user clicks a button)
// When it is invoked (called) from JavaScript code
// Automatically (self invoked)
// */

function pars(parameter1, parameter2, parameter3) {
  // code to be executed
  parameter1 = 'John';
  parameter2 = 'Julie';
  parameter3 = 'Jamie';
  let answer = parameter1 + parameter2 + parameter3;
  return answer;
}

console.log(pars());

// /*
// Function Return
// When JavaScript reaches a return statement, the function will stop executing.

// If the function was invoked from a statement, JavaScript will "return" to execute the code after the invoking statement.

// Functions often compute a return value. The return value is "returned" back to the "caller":
// */

let m = mySolution(4, 3);   // Function is called, return value will end up in x

function mySolution(a, b) {
  return a * b;             // Function returns the product of a and b
};

console.log(m); //will return 12


// // Why Functions?
// // You can reuse code: Define the code once, and use it many times.

// // You can use the same code many times with different arguments, to produce different results.