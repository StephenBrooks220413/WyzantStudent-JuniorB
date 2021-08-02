var employees = {
    name1: "John",
    name2: "Mark",
    name3: "Stephanie",
    name4: "Joe",
    name5: "Lindsey"
};

var locations = [
    "Texas", "Oklahoma", "Louisiana", "Florida", "California"
];

var position1 = employees.name5 + locations[7];

let userResponse = "John";

if(userResponse == employees){
    console.log("positive match: " + employees.name1 + " at the location in " + locations["0"]);
    console.log(`positive match: ${employees.name1} at the location in ${locations[0]}`);
} else {
    console.log("no match found");
}