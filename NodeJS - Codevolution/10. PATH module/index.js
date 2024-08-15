// For built-in module - PATH

const path= require("node:path");
// const path= require("path");

console.log("1. __filename: "+__filename);
console.log("2. __dirname: "+__dirname);

console.log("3. path.basename(__filename): "+path.basename(__filename));
console.log("4. path.basename(__dirname): "+path.basename(__dirname));

console.log("5. path.extname(__filename): "+path.extname(__filename));
console.log("6. path.extname(__dirname): "+path.extname(__dirname));

console.log("7. path.parse(__dirname): "+path.parse(__dirname));
console.log("8. path.format(path.parse(__dirname)): "+path.format(path.parse(__dirname)));

console.log("9. path.isAbsolute(__dirname): "+path.isAbsolute(__dirname));//true=it is absolute path
console.log("10. path.isAbsolute(./data.json): "+path.isAbsolute("./data.json"));//false=it is relative path

console.log("path.join: ");
console.log(path.join("folder1", "folder2", "index.html"));
console.log(path.join("/folder1", "folder2", "index.html"));
console.log(path.join("folder1", "//folder2", "index.html"));//normalises // to /
console.log(path.join("folder1", "folder2", "../index.html"));
console.log(path.join(__dirname, "./data.json"));


console.log("path.resolve: ");
console.log(path.resolve("folder1", "folder2", "index.html"));
console.log(path.resolve("/folder1", "folder2", "index.html"));
console.log(path.resolve("folder1", "//folder2", "index.html"));//normalises // to /
console.log(path.resolve("folder1", "folder2", "../index.html"));
console.log(path.resolve(__dirname, "./data.json"));