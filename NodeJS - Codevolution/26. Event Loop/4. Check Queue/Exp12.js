setImmediate(()=>console.log("setImmediate 1"));
setImmediate(()=>{
    console.log("setImmediate 2");
    process.nextTick(()=>console.log("process.nextTick inside setImmediate"));
    Promise.resolve().then(()=>console.log("Promise.resolve inside setImmediate"));
});
setImmediate(()=>console.log("setImmediate 3"));