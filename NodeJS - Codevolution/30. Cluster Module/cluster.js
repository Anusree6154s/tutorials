const http = require("node:http");
const cluster = require("node:cluster");

if (cluster.isMaster) {
    console.log(`Master process ${process.pid} is running`);
    cluster.fork();
    cluster.fork();
} else {
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
    
    console.log(`Worker process ${process.pid} started running`);
    server.listen(8000, ()=>console.log("Server is running on port 8000"));
}
