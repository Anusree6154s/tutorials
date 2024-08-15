const upper = require("upper-case").upperCase;

function greet(name){
    console.log(upper(`Hello ${name}, you are learning to code!`));
}

module.exports=greet;