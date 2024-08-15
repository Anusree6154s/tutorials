// http routing

const http = require ("node:http");
const fs = require("node:fs");

const server = http.createServer ((req, res)=>{
    // res.end(req.url); //gives the http url
    //req.method GET POST PUT DELETE

    if (req.url==="/"){
        res.writeHead(200, {"Contetn-Type":"text/plain"});
        res.end("Home Page");
    }else if (req.url==="/about"){
        res.writeHead(200, {"Contetn-Type":"text/plain"});
        res.end("About");
    }else if (req.url==="/api"){
        res.writeHead(200, {"Contetn-Type":"application/json"});
        res.end(JSON.stringify({
            name:"Bruce",
            lastName:"Wayne"
        }));
    }
});

server.listen(3000, ()=>{
    console.log("server is running on 3000");
});