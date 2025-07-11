const http = require("http");
const fs = require("fs");
const url = require("url");

// just creates server

const hostname = '127.0.0.1';
const port = 3000;

const myServer = http.createServer((req,res)=>{
    const log = `New request at time :${Date.now()}`
    const myUrl = url.parse(req.url,true,true) 
    console.log("myUrl",myUrl);
    fs.appendFile("log.txt",log,(err,data)=>{
        switch(res.url){
            case "/":res.end("Home")
            break;
            case "/contact":res.end("contact 918265365")
            break;
        }
    })
    console.log("name",myUrl.query.name);
    console.log("user ID",myUrl.query.id);

});

myServer.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});



