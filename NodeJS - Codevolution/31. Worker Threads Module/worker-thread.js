const {parentPort} = require("node:worker_threads");

let j=0;
for(let i=0; i<5000000000; i++){
    j++;
} // To simulate CPU work

parentPort.postMessage(j);