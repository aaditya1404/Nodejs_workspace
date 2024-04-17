let person1 = "HuXn";
let person2 = "None";
let person3 = "many";

// If we want to use this variables into another file
// module.exports = person1; // for exporting one variable 
module.exports = {person1, person2, person3}; // for exporting multiple variables. We export variables as an object