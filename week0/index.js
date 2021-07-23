/* 
Multi line comment 
*/

//   This is a single line comment, ignored by javascript, good for note taking.

/*
Variables
-------
Call a variable and show it in the console
*/


var people = "John"; //var is calling people as the key and "John" as the value

people = "Sam"; //Key was re-assigned to "Sam"

console.log(people); //This prints to the console

/*
Operators
-------
Call an operator and show it in the console
*/

var str = "string"; //string
var make = true; //boolean
var num = 25; //number
var dec = 5.78; //decimal

console.log(str);
console.log(make);
console.log(num);
console.log(dec);

/*
Comparison Operators
-------
Call an comparison operator and show it in the console
*/

/*
<      greater than
>      less than
=      assignment
==     equal to exactly
===    equal to in all ways
<=     greater than or equal to
>=     less than or equal to
!      is not
!=     is not equal to
||     or operator
&&     and operator
*/

/* 
Concatinating is adding values together wiht a + sign
and parenthesis between two +.
*/

var a = "john";
var b = 40;

console.log(a + ' ' + b); 

/*
Function are reusable code that can be reused anywhere,
making it more conveinent for developers to use and more 
effecient.
*/

function func() { 
    var a = 5;
    var b = 19;
    return (a * b); 
}
console.log(func());