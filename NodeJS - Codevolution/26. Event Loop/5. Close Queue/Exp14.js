const fs=require("fs");

const readableStream=fs.createReadStream(__filename);
readableStream.close();

readableStream.on("close", ()=>console.log("This is from readbleStream close event callback"))
setTimeout(()=>console.log("setTimeout 1"), 0);
setImmediate(()=>console.log("setImmediate 1"));
process.nextTick(()=>console.log("process.nextTick 1"));
Promise.resolve().then(()=>console.log("Promise.resolve 1"));