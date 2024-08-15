const fs=require("fs");

fs.readFile(__filename, ()=>console.log("readfile 1"));
setTimeout(()=>console.log("setTimeout 1"), 0);