// // way 1
// const operations =require("./math");
// console.log(operations.add(2, 3));
// console.log(operations.subtract(2, 3));

// way 2
const operations =require("./math");
const {add, subtract}=operations;
console.log(add(2, 3));
console.log(subtract(2, 3));