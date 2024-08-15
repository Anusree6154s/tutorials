// html template

const http = require ("node:http");
const fs = require("node:fs");

const server = http.createServer ((req, res)=>{
    const name = "Anusree";
    res.writeHead(200, {"Content-Type":"text/html"});
    res.end(fs.readFileSync("./index.html", "utf-8").replace("{name}", name));
    //can also write above line as:
    // let html = fs.readFileSync("./index.html", "utf-8");
    // html = html.replace("{{name}}", name);
    // res.end(html);
});

server.listen(3000, ()=>{
    console.log("server is running on 3000");
});
