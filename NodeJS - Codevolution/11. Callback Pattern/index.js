// function greet(name){
//     console.log(`Hello ${name}`);
// }
// function HigherOrderFunction(callbackFunction){
//     callbackFunction("Vishwas");
// }
// HigherOrderFunction(greet);




//another way of writing
const HigherOrderFunction = (callbackfunction) => {
  callbackfunction("vishwas");
};

const greet = (name) => {
  console.log(`Hello ${name}`);
};

HigherOrderFunction(greet);


//callbackfunction - a function passed into another function