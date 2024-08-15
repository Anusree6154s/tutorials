console.log("console.log 1");
process.nextTick(()=>console.log("process.nextTick 1"));
console.log("console.log 2");