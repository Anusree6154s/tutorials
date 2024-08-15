process.nextTick(()=>console.log("process.netTick 1"));
process.nextTick(()=>{
    console.log("process.nextTick 2");
    process.nextTick(()=>console.log("process.nextTick inside process.nextTick"));
});
process.nextTick(()=>console.log("process.netTick 3"));

Promise.resolve().then(()=>console.log("Promise.resolve 1"));
Promise.resolve().then(()=>{
    console.log("Promise.resolve 2");
    process.nextTick(()=>console.log("process.nextTick inside Promise.resolve"));
});
Promise.resolve().then(()=>console.log("Promise.resolve 3"));