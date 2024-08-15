const fs=require("fs");

fs.readFile(__filename, ()=>console.log("readfile 1"));
process.nextTick(()=>console.log("process.nextTick 1"));
Promise.resolve().then(()=>console.log("Promise.resolve 1"));