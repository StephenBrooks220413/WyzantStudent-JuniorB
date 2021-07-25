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
Statements
-------
Call a statement and show it in the console
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
Variables
Variables defined with 'let' cannot be redeclared.
You cannot accidentally redeclare a variable.

With'var' you can redeclare and use it globally

Variables defined with const cannot be Redeclared.
Variables defined with const cannot be Reassigned.
Variables defined with const have Block Scope.

As a general rule, always declare a variables with const 
unless you know that the value will change. But you can 
declare in another scope.

*/

///////////////////////////////////////

/*
JavaScript Arithmetic Operators
Arithmetic operators are used to perform arithmetic on numbers:

Operator	Description
+	Addition
-	Subtraction
*	Multiplication
**	Exponentiation (ES2016)
/	Division
%	Modulus (Division Remainder)
++	Increment
--	Decrement
*/

const h = 20;
const g = 33;
const f = h * g;
console.log(f);

///////////////////////////////////////////////////////

/*
JavaScript Assignment Operators
Assignment operators assign values to JavaScript variables.

https://www.w3schools.com/js/js_assignment.asp

Operator	    Example	Same As
=	x = y	    x = y
+=	x += y	    x = x + y
-=	x -= y	    x = x - y
*=	x *= y	    x = x * y
/=	x /= y	    x = x / y
%=	x %= y	    x = x % y
**=	x **= y	    x = x ** y
*/

//examples
let x = 10;
x += 5;
console.log(x);

///////////////////////////////////////

/*
Comparison Operators
-------
Call an comparison operator and show it in the console
*/

/*
==	    equal to
===	    equal value and equal type
!=	    not equal
!==	    not equal value or not equal type
>	    greater than
<	    less than
>=	    greater than or equal to
<=	    less than or equal to
?	    ternary operator
*/

/*
JavaScript Logical Operators
Operator	Description
&&	        logical and
||	        logical or
!	        logical not
*/

/* 
JavaScript String Operators
Concatinating is adding values together wiht a + sign
and parenthesis between two +.
*/

let text1 = "John";
let text2 = "Doe";
let text3 = text1 + " " + text2;

console.log(text3); 
console.log(text1 + ' ' + text2); //or comment out line 126 and do this

let answer = "What a very ";
console.log(answer += "nice day");

/*
JavaScript Arithmetic Operators
Arithmetic operators perform arithmetic on numbers (literals or variables).

Operator	Description
+	Addition
-	Subtraction
*	Multiplication
**	Exponentiation (ES2016)
/	Division
%	Modulus (Remainder)
++	Increment
--	Decrement
*/

let high = 100 + 50 * 11;
console.log(high);

let res = 5;
res++; // adds one to 5
let n = res;
console.log(n);

let res1 = 5;
res1--; // takes one tfrom 5
let n1 = res1;
console.log(n1);

//More arithmetic examples on https://www.w3schools.com/js/js_arithmetic.asp
