// fs Promise Module - instead of callback in fs
const fs = require("node:fs/promises");

console.log("first");//to check the asynchronicity
fs.readFile("./file.txt", "utf-8")
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
console.log("second");//to check the asynchronicity

//async-await function (same as readfile but a function and easier to read)
async function readFile(){
    try{
        const data = await fs.readFile("./file.txt", "utf-8");
        console.log(data);
    }
    catch (err){
        console.log(err);
    }
}
readFile();