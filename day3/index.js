const http = require("http");
const fs = require("fs");

// just creates server
// const myServer = http.createServer((req,res)=>{
//     const log = `New request at time :${Date.now()}`
//     fs.appendFile("log.txt",log,(err,data)=>{
//         switch(res.url){
//             case "/":res.end("Home")
//             break;
//             case "/comtact":res.end("contact 918265365")
//             break;
//         }
//     })

// });

// myServer.listen(8000)


const hostname = '127.0.0.1';
const port = 3000;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

