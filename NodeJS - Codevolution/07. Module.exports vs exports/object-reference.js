const obj1={
    name: "Bruce Wayne"
};//it is modeule.export

let obj2 = obj1;

obj2.name="Clark Kent"; //changing obj2 will also change obj1 this way

// obj2= {
//     name: "Clark Kent"
// };//it is just exports //assigning a class to obj2 doesnt change obj1

console.log(obj1.name);

//doesnt make sense to me