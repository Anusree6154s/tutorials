// Pipes

const fs= require ("node:fs");
const zlib=require("node:zlib");//for zip file


const readableStream= fs.createReadStream("./file.txt", {
    encoding:"utf-8",
    highWaterMark:2 //deal with data of 2bytes (stream of 2bytes)
}); 

//coping data from file  to zipfile file1
const gZip=zlib.createGzip();
readableStream.pipe(gZip).pipe(fs.WriteStream("./file1.txt.gz"));
// can also write as
// const writableStream1=fs.WriteStream("./file1.txt.gz");
// readableStream.pipe(gZip).pipe(writableStream1);


//copying content sfrom file to file 1
const writableStream2=fs.createWriteStream("./file1.txt");
readableStream.pipe(writableStream2);


// // can also write the entire file as:
// const gZip=zlib.createGzip();
// fs.createReadStream("./file.txt", {
//     encoding:"utf-8",
//     highWaterMark:2 //deal with data of 2bytes (stream of 2bytes)
// }).pipe(gZip).pipe(fs.WriteStream("./file1.txt.gz"));