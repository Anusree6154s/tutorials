const fs=require("fs");

fs.readFile(__filename, ()=>{
    console.log("readfile 1");
    setImmediate(()=>console.log("setImmediate inside readfile"));
    process.nextTick(()=>console.log("process.nextTick inside readfile"));
    Promise.resolve().then(()=>console.log("Promise.resolve inside readfile"));
});
process.nextTick(()=>console.log("process.nextTick 1"));
Promise.resolve().then(()=>console.log("Promise.resolve 1"));
setTimeout(()=>console.log("setTimeout 1"), 0);

for (let i=0; i<20000000; i++){}