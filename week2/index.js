// JavaScript Objects
// In real life, a car is an object.

// A car has properties like weight and color, and methods like start and stop:
// You have already learned that JavaScript variables are containers for data values.

// This code assigns a simple value (Fiat) to a variable named car:

const car = {
    type:"Fiat",    //object value
    model:"500",    //object value
    color:"white"   //object value
};

console.log(car.type); //getting the value
console.log(car.model);
console.log(car.color);

////////////////////////////////////////////
//EXAMPLE OF OBJECTS
// PROPERTY     PROERTY VALUE
// firstName	John
// lastName	    Doe
// age	        50
// eyeColor	    blue
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};

console.log(person);

//USING A NESTED FUNCTION IN THE OBJECT TO ACCESS THE OBJECT PROPERTY
const listItems = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
};

console.log(listItems.fullName());

////////////////////////////////////////////////////
///////////////////////////////////////////////////

// Do Not Declare Strings, Numbers, and Booleans as Objects!
// When a JavaScript variable is declared with the keyword "new", the variable is created as an object:

//////////////////////////////////////////////////
/////////////////////////////////////////////////

// JavaScript strings are used for storing and manipulating text.

// JavaScript Strings
// A JavaScript string is zero or more characters written inside quotes.
let carName1 = "Volvo XC60";  // Double quotes
let carName2 = 'Volvo XC60';  // Single quotes
console.log(carName1 + ' ' + carName2); //putting bot properties in the print statement and separating them with a space by adding an empty ' ' and putting them together with +

// String Length
// To find the length of a string, use the built-in length property:

// Example
let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
console.log(text.length);    // Will return 26

/*
Escape characters are used in order to used ' with words in a sentence in JavaScript
This '\' is the escape character used, as seen below
*/

let text1 = "We are the so-called \"Vikings\" from the north.";
let text2= 'It\'s alright.';

// The sequence \\  inserts a backslash in a string:

// Example
let text3 = "The character \\ is called backslash.";
console.log(text1 + ' ' + text2 + ' ' + text3);


///////////////////////////////////////////////////////
//////////////////////////////////////////////////////
/////////////////////////////////////////////////////
// JavaScript arrays are used to store multiple values in a single variable.

// Example
const cars = ["Saab", "Volvo", "BMW"];

console.log(cars);              //shows the items in the array
console.log(cars.length);       //shows the length of array