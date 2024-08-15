// Method 1 
// const add = (a, b) =>{
//     return a+b;
// }
// module.exports=add;

// Method 1
// module.exports= (a, b) =>{
//     return a+b;
// }


// Method 2
// const add = (a, b) =>{
//     return a+b;
// } 

// const subtract = (a, b) =>{
//     return a-b;
// } 

// module.exports={
//     add, 
//     subtract
// };


// Method 3
// module.exports.add = (a, b) =>{
//     return a+b;
// } 

// module.exports.subtract = (a, b) =>{
//     return a-b;
// } 


// Method 4
exports.add = (a, b) =>{
    return a+b;
} 

exports.subtract = (a, b) =>{
    return a-b;
} 