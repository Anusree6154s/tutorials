setTimeout(()=>console.log("setTimeout 1"), 0);
setImmediate(()=>console.log("setImmediate 1"));
for (let i=0; i<20000000; i++){}