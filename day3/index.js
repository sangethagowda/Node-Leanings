const http = require("http");
const fs = require("fs");

// just creates server
const myServer = http.createServer((req,res)=>{
    const log = `New request at time :${Date.now()}`
    fs.appendFile("log.txt",log,(err,data)=>{
        switch(res.url){
            case "/":res.end("Home")
            break;
            case "/comtact":res.end("contact 918265365")
            break;
        }
    })

});

myServer.listen(8000)


const server2=http.createServer((req,res)=>{
    res.end("response from server 2")
})

server2.listen(8001)
