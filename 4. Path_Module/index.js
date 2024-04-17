// Path module allows us to work with the path.
// eg:- c:\\courses\\nodejs\\path-module  This is an example of a path.
import path from "path";

// console.log(path);


console.log(path.basename("c:\\courses\\nodejs\\path-module")); // basename path returns the last portion of the path. In the above example the basename will return - path-module as an output.

console.log(path.basename("c:\\courses\\nodejs\\app.js", ".js")); // This will return only app not app.js

console.log(path.dirname("c:\\courses\\nodejs\\app.js")); // This will return the directory name of the path.

console.log(path.extname("c:\\courses\\nodejs\\app.js")); // This gives the extension of the file.

console.log(path.join("c:", "web-dev", "path-name", "is", "joined.js")); // It joins different types of string to form a path.

console.log(path.join("c:", "web-dev", "path-name", "is", "joined.js", "..")); // It is used to go up a level.

console.log(path.join("c:", "web-dev", "path-name", "is", "joined.js", "..", "..")); // It is used to go up two levels.

console.log(path.normalize("c:\\\\\normalixe\\\\a_pathname\\\it just simplfies it"));

console.log(path.parse("c:\\courses\\nodejs\\app.js")); // It gives all the specified values as an object such as root, directory, basename, extension and name.