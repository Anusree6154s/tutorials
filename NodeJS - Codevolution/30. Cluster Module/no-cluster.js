const http = require("node:http");

const server = http.createServer((req, res)=>{
    if (req.url==="/") {
        res.writeHead(200,{"Content-Type":"text/plain"});
        res.end("Home Page");
    } else if (req.url==="/slowpage"){
        for(let i=0; i<5000000000; i++){} // To simulate CPU work
        res.writeHead(200,{"Content-Type":"text/plain"});
        res.end("Slow Page");
    }
});

server.listen(8000, ()=>console.log("Server is running on port 8000"));