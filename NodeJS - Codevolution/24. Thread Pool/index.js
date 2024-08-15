// thread pool

// const crypto = require ("node:crypto");

// const start =Date.now();
// //password based key derivation function 2 - pbkdf2
// //to check time taken in running that line of code
// crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512");
// crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512");
// crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512");
// crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512");
// console.log("Hash: ", Date.now() - start);
// //running 4 lines take 4 times the time for running 1 line when pbkdf2

/*----------Instead----------*/
// const crypto = require ("node:crypto");

// process.env.UV_THREADPOOL_SIZE=16; // to increase thread pool size
// const MAX_CALLS = 4;
// const start =Date.now();

// for(let i=0; i<MAX_CALLS; i++){
//     crypto.pbkdf2("password", "salt", 100000, 512, "sha512", ()=>{
//         console.log(`Hash ${i+1}`, Date.now()-start);
//     });
// }
