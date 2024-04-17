// This is a way to import a exported code or function from another file.
// Syntax - const name = require('pathname');
const greet = require('./greet');
// const person1 = require('./peoples'); // for importing one variable
const { person1, person2, person3 } = require('./peoples'); // for importing multiple variables. We export this as an objects.
// But the use cases in the both the cases are same


greet("aadi");
greet(person1);
greet(person2);
greet(person3);

