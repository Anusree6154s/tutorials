
// fs module

const fs = require("node:fs");

//synchronous readfile
const fileContents = fs.readFileSync("./file.txt");//synchronous file reading
console.log(fileContents);

const fileContents1 = fs.readFileSync("./file.txt", "utf-8");
console.log(fileContents1);


//asynchronous readfile
console.log("first");//to check asynchronisation of readFile
fs.readFile("./file.txt", "utf-8", (error, data)=>{//async readFile
    if (error){
        console.log("error");
    }else{
        console.log(data);
    }
});
console.log("second");//to check asynchronisation of readFile


//write file
fs.writeFileSync("./file1.txt", "Hello World!");
fs.writeFileSync("./file1.txt", "Hello Other World!");//rewrite the same file
fs.writeFile("./file1.txt", " Hello Old Wolrd!", {flag: "a"}, (err)=>{
    //appends with the previous text (for appending - {flag: "a"})
    if(err){
        console.log(err);
    }else{
        console.log("Appended this time!");
    }
});
