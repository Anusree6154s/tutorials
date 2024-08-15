//demostration of module wrapper by iife

(function(message){
    const superhero = "batman";
    console.log(message, superhero);
})("Hello,");

(function(message){
    const superhero = "superman";
    console.log(message, superhero);
})("Hi,");

// (function(exports, require, module, __filename, __dirname){
//     body
// })(argument);