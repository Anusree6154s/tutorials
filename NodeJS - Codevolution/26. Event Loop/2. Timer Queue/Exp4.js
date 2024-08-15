setTimeout(()=>console.log("setTimeout 1"),0);
setTimeout(()=>{
    console.log("setTimeout 2");
    process.nextTick(()=>console.log("process.nextTick inside setTimeout"));
},0);
setTimeout(()=>console.log("setTimeout 3"),0);