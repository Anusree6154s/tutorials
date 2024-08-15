Promise.resolve().then(()=>console.log("promise.resolve 1"));
process.nextTick(()=>console.log("process.nextTick 1"));