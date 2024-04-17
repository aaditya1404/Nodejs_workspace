// Module Wrapper

(function (exports, require, module, __filename, __dirname) {
    //<Each and every node js code which we run is wrapped around this function.>
    // This fucntion is called a iife function - Invoked Function Expression (IIFE)
    console.log("Hello");
})()

console.log(__filename);
console.log(__dirname);
console.log(module);