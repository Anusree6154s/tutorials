// http module 

const http = require ("node:http");

const server = http.createServer ((req, res)=>{
    res.writeHead(200);
    res.end("Hello World!");
});

server.listen(3000, ()=>{
    console.log("server is running on 3000");
});