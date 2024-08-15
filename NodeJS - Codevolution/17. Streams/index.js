
// Stream

const fs= require ("node:fs");

const readableStream= fs.createReadStream("./file.txt", {
    encoding:"utf-8",
    highWaterMark:2 //deal with data of 2bytes (stream of 2bytes)
});

const writableStream=fs.createWriteStream("./file1.txt");

readableStream.on("data", (chunk)=>{
    console.log(chunk);
    writableStream.write(chunk);
})
