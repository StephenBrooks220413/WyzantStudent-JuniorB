/*
For loops, if statements and functions are logical operations that 
perform an action based upon the function itself. Examples are below 
of some operations that would happen based upon on something happening
or being true.
*/

var items = {
    name: "John",
    salary: "50,000",
    job: "Manager",
    address: "1131 Main St. - Nevada, L.A."
}

var loggedIn = true;

if(loggedIn) {
    //There are different ways of calling the proerty or values in the console.log() to show the result
    console.log('Hello ' + items.name + ' ' + ' your are the ' + items.job);
    console.log(`Hello ${items.name} you are the ${items.job}`); //This is the shortest
} else {
    console.log("You are not authorized!!!");
}

var cars = [
    "kia", "ford", "gmc", "new models", "older models"
];

cars.push("cadilac"); // adds item to an array
cars.shift("kia"); // takes out first item in array
cars.splice(1, 2); // takes out some proprty values

for (let index = 0; index < cars.length; index++) {
    const element = cars[index];
    console.log(element);
}

/*
for loops and if statments are fine and good for working
with arrays or objects. But when the data grows in the array
or objects, another type of statement would be more practical
and more effecient to write instead. To go through a long if 
statement, you would be seeing:

if(par1, par2){
    par1 = true;
    par2 = "John";
} else if(par1, par2){
    par1 = true;
    par2 = "John";
} else if(par1, par2){
    par1 = true;
    par2 = "John";
} else if(par1, par2){
    par1 = true;
    par2 = "John";
} elseif(par1, par2){
    par1 = true;
    par2 = "John";
} else if(par1, par2){
    par1 = true;
    par2 = "John";
} else {
    return("Not authorized");
}
*/

//THE SWICTH STATEMENT
let day;
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case  6:
    day = "Saturday";
}

console.log(day);